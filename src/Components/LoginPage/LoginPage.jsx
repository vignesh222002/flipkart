import { Link } from 'react-router-dom'
import './login.css'

export let LoginPageLeft = () => {

    return (
        <div className='loginPageLeft'>
            <span className="loginPageLeftHead">Login</span>
            <p className="loginPageLeftPara">Get access to your Orders, Wishlist and Recommendations</p>
        </div>
    )
}

export let LoginPageRight = () => {

    return (
        <div className="loginPageRight">
            <form>
                <div className="loginPageRightInput">
                    <input className='loginPageRightInput1' type="text" autoComplete='off'/>
                    <div className="loginPageRightInputLabel">Enter Email/Mobile number</div>
                </div>
                <div className="loginPageRightDescription">By continuing, you agree to Flipkart's 
                    <Link className='blueLink'> Terms of Use </Link> and 
                    <Link className='blueLink'>Privacy Policy</Link>
                </div>
                <button className="loginPageRightOTPBtn">Request OTP</button>
                <div className="loginPageRightSignupLink"><Link className='blueLink'>New to Flipkart? Create an account</Link></div>
            </form>
        </div>
    )
}