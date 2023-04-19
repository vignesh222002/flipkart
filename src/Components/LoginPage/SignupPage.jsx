import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import './login.css'
import { UserContext } from '../Context/UserInfoContext';
import axios from 'axios';

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
        console.log(userInfo.user.mobileNumber.toString())

        // axios.post(`http://localhost:4000/register`, {
        //     "body": {
        //         "mobilenum": userInfo.user.mobileNumber.toString()
        //     }
        // })
        // .then(setSignupProcess(false))
        // .then(setSignupOtpProcess(true))
    },[userInfo.user.mobileNumber])

    return (
        <div className="loginPageRight">
            <div className="loginPageRightInput">
                <input ref={inputRef} className='loginPageRightInput1' type="text" autoComplete='off' onFocus={handleFocus} onBlur={handleBlur} onChange={updateMobileNo}/>
                <label ref={labelRef} className="loginPageRightInputLabel">Enter Mobile number</label>
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

export let SignupOtpPageRight = ({setLoginProcess, setSignupProcess, setSignupOtpProcess}) => {
    let userInfo = useContext(UserContext)
    // console.log(userInfo.user)

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
                <input ref={inputRef} type="text" className='signupPageEnterOtpInput' maxLength="10" autoComplete='off' onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => handleSetOtp(e)}/>
                <label ref={labelRef} className="signupPageEnterOtpLabel">Enter OTP</label>
            </div>
            <div className="signupOtpPageBtn">
                <button className='signupPageRightOTPBtn'>Signup</button>
                <Link className='backToLoginPopup' onClick={handleBacktoLogin}>Existing User? Log in</Link>
            </div>
        </div>
    )
}