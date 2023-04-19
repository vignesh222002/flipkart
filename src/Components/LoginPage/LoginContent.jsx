import './login.css'
import { LoginOtpPageRight, LoginPageLeft, LoginPageRight } from './LoginPage'
import { SignupOtpPageRight, SignupPageLeft, SignupPageRight } from './SignupPage'

let LoginContent = ({loginProcess, signupProcess, setLoginProcess, setSignupProcess, loginOtpProcess, setLoginOtpProcess, signupOtpProcess, setSignupOtpProcess}) => {

    return (
        <>
            <div className="loginSignupModalLeft">
                {/* Left Content */}
                {(loginProcess || loginOtpProcess) && <LoginPageLeft />}
                {(signupProcess || signupOtpProcess) && <SignupPageLeft />}
            </div>
            <div className="loginSignupModalRight">
                {/* Right Content */}
                {loginProcess && <LoginPageRight setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} setLoginOtpProcess={setLoginOtpProcess} />}
                {signupProcess && <SignupPageRight setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} setSignupOtpProcess={setSignupOtpProcess}/>}
                {loginOtpProcess && <LoginOtpPageRight />}
                {signupOtpProcess && <SignupOtpPageRight setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} setSignupOtpProcess={setSignupOtpProcess}/>}
            </div>
        </>
    )
}

export default LoginContent