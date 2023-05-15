import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import './login.css'
import axios from 'axios';
import { IP, Port } from '../../IP Address/IPAddress';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoginIslogin, updateLoginNumber } from '../../state/login/login';

export let LoginPageLeft = () => {
    return (
        <div className='loginPageLeft'>
            <span className="loginPageLeftHead">Login</span>
            <p className="loginPageLeftPara">Get access to your Orders, Wishlist and Recommendations</p>
        </div>
    )
}

export let LoginPageRight = ({setLoginProcess, setSignupProcess, setLoginOtpProcess}) => {
    let userInfo = useSelector(state => state.login)
    let dispatch = useDispatch()

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
        if (userInfo.mobileNumber && mobileNo) {

            axios.post(`http://${IP}:${Port}/login`, {
                "mobilenum": userInfo.officialNumber.toString()
            })
            .then(res => {
                if (res.data.status) {
                    // console.log(res.data)
                    setLoginProcess(false)
                    setLoginOtpProcess(true)
                }
            })
        }
    },[userInfo])

    function otpRequest() {
        dispatch(updateLoginNumber({ mobileNumber: mobileNo, officialNumber: '+91' + mobileNo }))
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
    let userInfo = useSelector(state => state.login)
    let dispatch = useDispatch()
    let [otp, setOTP] = useState()
    let navigate = useNavigate()

    function updateOTP(e) {
        setOTP(e.target.value)
    }

    function backToLogin() {
        setLoginOtpProcess(false)
        setLoginProcess(true)
        dispatch(updateLoginNumber({ mobileNumber: null, officialNumber: null }))
    }

    function submitOTP() {
        if(otp) {
            // console.log("otp :", otp)
            axios.post(`http://${IP}:${Port}/verifyOTPSMS`, {
                    "mobilenum": userInfo.officialNumber.toString(),
                    "otp" : otp.toString()
            })
            .then(res => {
                if (res.data.status) {
                    // console.log(res.data)
                    localStorage.setItem("token", res.data.token)
                    dispatch(updateLoginIslogin())
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
            .catch(err => console.log(err))
        }
    }

    function resendCode() {
        axios.post(`http://${IP}:${Port}/login`, {
                "mobilenum": userInfo.officialNumber.toString()
        })
    }

    return (
        <div className="loginOtpPageRight">
            <div>Please enter the OTP sent to</div>
            <div>
                <span className='loginOtpPageRightuser'>{userInfo.mobileNumber}.</span>
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
                <span className='blueLink resendLoginOTP' onClick={resendCode}> Resend code</span>
            </div>
        </div>
    )
}