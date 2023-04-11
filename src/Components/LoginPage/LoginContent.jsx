import './login.css'
import { LoginOtpPageRight, LoginPageLeft, LoginPageRight } from './LoginPage'
import { SignupPageLeft, SignupPageRight } from './SignupPage'

let LoginContent = ({loginProcess, signupProcess, setLoginProcess, setSignupProcess, loginOtpProcess, setLoginOtpProcess}) => {

    return (
        <div className="loginSignupModalContent2">
            <div className="loginSignupModalLeft">
                {/* Left Content */}
                {(loginProcess || loginOtpProcess) && <LoginPageLeft />}
                {signupProcess && <SignupPageLeft />}
            </div>
            <div className="loginSignupModalRight">
                {/* Right Content */}
                {loginProcess && <LoginPageRight setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} setLoginOtpProcess={setLoginOtpProcess} />}
                {signupProcess && <SignupPageRight setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} />}
                {loginOtpProcess && <LoginOtpPageRight />}
            </div>
        </div>
    )
}

export default LoginContent