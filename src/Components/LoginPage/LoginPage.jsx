import { Link } from 'react-router-dom'
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
    function otpRequest() {
         userInfo.login({
            ...userInfo.user,
            mobileNumber: mobileNo,
            officialNumber: '+91' + mobileNo
        })
    }
    useEffect(() => {
        console.log(userInfo.user.mobileNumber)

        // axios.post(`http://localhost:4000/login`, {
        //     "body": {
        //         "mobilenum": userInfo.user.mobileNumber.toString()
        //     }
        // })
        // .then(setLoginProcess(false))
        // .then(setLoginOtpProcess(true))
    },[userInfo.user.mobileNumber])

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

export let LoginOtpPageRight = () => {
    let userInfo = useContext(UserContext)

    return (
        <div className="loginOtpPageRight">
            <div>Please enter the OTP sent to</div>
            <div>
                <span className='loginOtpPageRightuser'>{userInfo.user.mobileNumber}.</span>
                <Link className='blueLink changeLoginNumber'>Change</Link>
            </div>
            <form>
                <div className="loginOtpPageRightInput">
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="number" autoComplete='off' required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="number" autoComplete='off' required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="number" autoComplete='off' required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="number" autoComplete='off' required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="number" autoComplete='off' required/>
                    </div>
                    <div className="loginOtpPageRightInput1">
                        <input className="loginOtpPageRightInput1Value" type="number" autoComplete='off' required/>
                    </div>
                </div>
                <button className='loginOtpVerifyBtn'>Verify</button>
            </form>
            <div className="loginOtpPageRightDescription">Not received your code? 
                <span className='blueLink resendLoginOTP'> Resend code</span>
            </div>
        </div>
    )
}