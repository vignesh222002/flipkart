import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import './login.css'
import { UserContext } from '../Context/UserInfoContext';
import axios from 'axios';
import { IP } from '../../IP Address/IPAddress';

export let SignupPageLeft = () => {

    return (
        <div className='signupPageLeft'>
            <span className="signupPageLeftHead">Looks like you're new here!</span>
            <p className="signupPageLeftPara">Sign up with your mobile number to get started</p>
        </div>
    )
}

export let SignupPageRight = ({setLoginProcess, setSignupProcess, setSignupOtpProcess}) => {
    let userInfo = useContext(UserContext)

    let [mobileNo, setMobileNo] = useState()
    let [registered, setRegistered] = useState(false)

    const inputRef = useRef();
    const labelRef = useRef();

    function handleFocus() {
        labelRef.current.classList.add('loginLabelActive');
        inputRef.current.classList.add('inputUnderBlue')
    }

    function handleBlur() {
        if (!mobileNo) {
            labelRef.current.classList.remove('loginLabelActive');
            inputRef.current.classList.remove('inputUnderBlue')
        }
    }
    let updateMobileNo = (e) => {
        setMobileNo(e.target.value)
    }
    
    let handleBacktoLogin = () => {
        setLoginProcess(true)
        setSignupProcess(false)
    }
    let handleSignupOtp = () => {
        userInfo.login({
            ...userInfo.user,
            mobileNumber: mobileNo,
            officialNumber: '+91' + mobileNo
        })
    }
    useEffect(() => {
        if (userInfo.user.mobileNumber && mobileNo) {

            axios.post(`http://${IP}:3000/register`, {
                "mobilenum": userInfo.user.officialNumber.toString()
            })
            .then(res => {
                console.log(res.data);
                if (res.data.status) {
                    setSignupProcess(false)
                    setSignupOtpProcess(true)
                }
            })
            .catch((err) => {
                // console.log(err.response.data)
                if(!err.response.data.status){
                   setRegistered(true)
                }
            })
        }
    },[userInfo.user])

    return (
        <div className="loginPageRight">
            <div className="loginPageRightInput">
                <input ref={inputRef} className='loginPageRightInput1' type="text" autoComplete='off' onFocus={handleFocus} onBlur={handleBlur} onChange={updateMobileNo}/>
                <label ref={labelRef} className="loginPageRightInputLabel">Enter Mobile number</label>
                <div className='alreadyRegistered'>{registered && "Mobile Number Already Registered"}</div>
            </div>
            <div className="loginPageRightDescription">By continuing, you agree to Flipkart's 
                <Link className='blueLink'> Terms of Use </Link> and 
                <Link className='blueLink'> Privacy Policy.</Link>
            </div>
            <button className="signupPageRightOTPBtn" onClick={handleSignupOtp}>CONTINUE</button>
            <Link className='backToLoginPopup' onClick={handleBacktoLogin}>Existing User? Log in</Link>
        </div>
    )
}

export let SignupOtpPageRight = ({callLogin, setLoginProcess, setSignupProcess, setSignupOtpProcess, setCallLogin, redirectPath}) => {
    let userInfo = useContext(UserContext)
    // console.log(userInfo.user)
    let navigate = useNavigate()
    let [otp, setOtp] = useState(null)

    const inputRef = useRef();
    const labelRef = useRef();

    let handleBacktoLogin = () => {
        setLoginProcess(true)
        setSignupOtpProcess(false)
    }
    let goToSignup = () => {
        setSignupOtpProcess(false)
        setSignupProcess(true)
    }
    let handleSetOtp = (e) => {
        setOtp(e.target.value)
    }

    function handleFocus() {
        labelRef.current.classList.add('loginLabelActive')
        labelRef.current.classList.add('signupPageOtpLabel2')
        inputRef.current.classList.add('inputUnderBlue')
    }

    function handleBlur() {
        if(!otp) {
            labelRef.current.classList.remove('loginLabelActive')
            labelRef.current.classList.remove('signupPageOtpLabel2')
            inputRef.current.classList.remove('inputUnderBlue')
        }
    }

    function submitOTP() {
        if(otp) {
            axios.post(`http://${IP}:3000/verifyOTPSMS`, {
                    "mobilenum": userInfo.user.officialNumber.toString(),
                    "otp" : otp.toString()
            })
            .then(res => {
                if (res.data.status) {
                    // console.log(res.data.token);
                    localStorage.setItem("token", res.data.token)
                    userInfo.login({
                        ...userInfo.user,
                        isLogin: !(!localStorage.getItem("token"))
                    })
                }
                return res
            })
            .then(res => {
                if (res.data.status) {
                    // console.log(res.data.status)
                    setSignupProcess(false)
                    setSignupOtpProcess(false)
                    navigate(redirectPath)
                    if (callLogin) {
                        setCallLogin(false)
                    }
                }
            })
        }
    }

    return (
        <div className='signupOtpPageRight'>
            <div className="signupOtpMObileNo">
                <div className='signupOtpPageInput'>{userInfo.user.mobileNumber}</div>
                <label className="signupOtpPageLabel"><span>Mobile Number</span></label>
                <span className="signupOtpPageSpan">+91</span>
                <Link className='signupOtpPageChangeNo' onClick={goToSignup}>Change?</Link>
            </div>
            <div className="signupOtpPageResend">
                <span>OTP sent to Mobile</span>
                <Link className='signupOtpPageResendLink'>Resend?</Link>
            </div>
            <div className="signupPageEnterOtp">
                <input ref={inputRef} type="text" className='signupPageEnterOtpInput' maxLength="6" autoComplete='off' onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => handleSetOtp(e)}/>
                <label ref={labelRef} className="signupPageEnterOtpLabel">Enter OTP</label>
            </div>
            <div className="signupOtpPageBtn">
                <button className='signupPageRightOTPBtn'onClick={submitOTP}>Signup</button>
                <Link className='backToLoginPopup' onClick={handleBacktoLogin}>Existing User? Log in</Link>
            </div>
        </div>
    )
}