import { Link } from 'react-router-dom';
import { useRef } from 'react';
import './login.css'

export let SignupPageLeft = () => {

    return (
        <div className='signupPageLeft'>
            <span className="signupPageLeftHead">Looks like you're new here!</span>
            <p className="signupPageLeftPara">Sign up with your mobile number to get started</p>
        </div>
    )
}

export let SignupPageRight = ({setLoginProcess, setSignupProcess}) => {
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
    let handleBacktoLogin = () => {
        setLoginProcess(true)
        setSignupProcess(false)
    }

    return (
        <div className="loginPageRight">
            <form>
                <div className="loginPageRightInput">
                    <input ref={inputRef} className='loginPageRightInput1' type="text" autoComplete='off' onFocus={handleFocus} onBlur={handleBlur}/>
                    <label ref={labelRef} className="loginPageRightInputLabel">Enter Mobile number</label>
                </div>
                <div className="loginPageRightDescription">By continuing, you agree to Flipkart's 
                    <Link className='blueLink'> Terms of Use </Link> and 
                    <Link className='blueLink'> Privacy Policy.</Link>
                </div>
                <button className="signupPageRightOTPBtn">CONTINUE</button>
                <Link className='backToLoginPopup' onClick={handleBacktoLogin}>Existing User? Log in</Link>
            </form>
        </div>
    )
}