import { Link } from 'react-router-dom'
import { useRef } from 'react';
import './login.css'
import { useUserInfo } from '../../Pages/LoginPage/UserInfo';

export let LoginPageLeft = () => {

    return (
        <div className='loginPageLeft'>
            <span className="loginPageLeftHead">Login</span>
            <p className="loginPageLeftPara">Get access to your Orders, Wishlist and Recommendations</p>
        </div>
    )
}

export let LoginPageRight = ({setLoginProcess, setSignupProcess}) => {
    let user = useUserInfo // User Context

    const inputRef = useRef();
    const labelRef = useRef();

    function handleFocus() {
        labelRef.current.classList.add('loginLabelActive');
        inputRef.current.classList.add('inputUnderBlue')
    }

    function handleBlur() {
        labelRef.current.classList.remove('loginLabelActive');
        inputRef.current.classList.remove('inputUnderBlue')

    }
    let handleGotoSignup = () => {
        setLoginProcess(false)
        setSignupProcess(true)
    }

    return (
        <div className="loginPageRight">
            <form>
                <div className="loginPageRightInput">
                    <input ref={inputRef} className='loginPageRightInput1' type="number" autoComplete='off' onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => user.login(e.target.value)}/>
                    <label ref={labelRef} className="loginPageRightInputLabel">Enter Email/Mobile number</label>
                </div>
                <div className="loginPageRightDescription">By continuing, you agree to Flipkart's 
                    <Link className='blueLink'> Terms of Use </Link> and 
                    <Link className='blueLink'> Privacy Policy.</Link>
                </div>
                <button className="loginPageRightOTPBtn">Request OTP</button>
                <div className="loginPageRightSignupLink" onClick={handleGotoSignup}><Link className='blueLink'>New to Flipkart? Create an account</Link></div>
            </form>
        </div>
    )
}

export let LoginOtpPageRight = () => {

    return (
        <div className="loginOtpPageRight">
            <div>Please enter the OTP sent to</div>
        </div>
    )
}