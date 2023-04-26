import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react';
import './login.css'
import { UserContext } from '../Context/UserInfoContext';
import axios from 'axios';

export let LoginPageLeft = () => {
    return (
        <div className='loginPageLeft'>
            <span className="loginPageLeftHead">Login</span>
            <p className="loginPageLeftPara">Get access to your Orders, Wishlist and Recommendations</p>
        </div>
    )
}

export let LoginPageRight = ({setLoginProcess, setSignupProcess, setLoginOtpProcess}) => {
    let userInfo = useContext(UserContext)

    let [mobileNo, setMobileNo] = useState()

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
    let handleGotoSignup = () => {
        setLoginProcess(false)
        setSignupProcess(true)
    }
    let updateMobileNo = (e) => {
        setMobileNo(e.target.value)
    }

    useEffect(() => {
        if (userInfo.user.mobileNumber && mobileNo) {

            axios.post(`http://192.168.1.87:3000/login`, {
                "mobilenum": userInfo.user.officialNumber.toString()
            })
            .then(res => {
                if (res.data.status) {
                    setLoginProcess(false)
                    setLoginOtpProcess(true)
                }
            })
        }
    },[userInfo.user])

    function otpRequest() {
        userInfo.login({
            ...userInfo.user,
            mobileNumber: mobileNo,
            officialNumber: '+91' + mobileNo
        })
    }

    return (
        <div className="loginPageRight">
            <div className="loginPageRightInput">
                <input ref={inputRef} className='loginPageRightInput1' type="text" required autoComplete='off' onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => updateMobileNo(e)}/>
                <label ref={labelRef} className="loginPageRightInputLabel">Enter Email/Mobile number</label>
            </div>
            <div className="loginPageRightDescription">By continuing, you agree to Flipkart's 
                <Link className='blueLink blueLinkHover'> Terms of Use </Link> and 
                <Link className='blueLink blueLinkHover'> Privacy Policy.</Link>
            </div>
            <button className="loginPageRightOTPBtn" onClick={otpRequest}>Request OTP</button>
            <div className="loginPageRightSignupLink" onClick={handleGotoSignup}><Link className='blueLink blueLinkHover blueLinkSignup'>New to Flipkart? Create an account</Link></div>
        </div>
    )
}

export let LoginOtpPageRight = ({callLogin, setLoginProcess, setLoginOtpProcess, setCallLogin, redirectPath}) => {
    let userInfo = useContext(UserContext)
    let [otp, setOTP] = useState()
    let navigate = useNavigate()

    function updateOTP(e) {
        setOTP(e.target.value)
    }

    function backToLogin() {
        setLoginOtpProcess(false)
        setLoginProcess(true)
        userInfo.login({
            ...userInfo.user,
            mobileNumber: null,
            officialNumber: null
        })
    }

    function submitOTP() {
        if(otp) {
            axios.post(`http://192.168.1.87:3000/verifyOTPSMS`, {
                    "mobilenum": userInfo.user.officialNumber.toString(),
                    "otp" : otp.toString()
            })
            .then(res => {
                if (res.data.status) {
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
                    setLoginProcess(false)
                    setLoginOtpProcess(false)
                    navigate(redirectPath)
                    if (callLogin) {
                        setCallLogin(false)
                    }
                }
            })
        }
    }

    return (
        <div className="loginOtpPageRight">
            <div>Please enter the OTP sent to</div>
            <div>
                <span className='loginOtpPageRightuser'>{userInfo.user.mobileNumber}.</span>
                <Link className='blueLink changeLoginNumber' onClick={backToLogin} >Change</Link>
            </div>
            <div className="loginOtpPageRightInput">
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="text" autoComplete='off' maxLength="6" required onChange={(e) => updateOTP(e)}/>
                    </div>
                    {/* <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="text" autoComplete='off' maxLength="1" required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="text" autoComplete='off' maxLength="1" required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="text" autoComplete='off' maxLength="1" required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="text" autoComplete='off' maxLength="1" required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="text" autoComplete='off' maxLength="1" required/>
                    </div> */}
                </div>
                <button className='loginOtpVerifyBtn' onClick={submitOTP}>Verify</button>
            <div className="loginOtpPageRightDescription">Not received your code? 
                <span className='blueLink resendLoginOTP'> Resend code</span>
            </div>
        </div>
    )
}