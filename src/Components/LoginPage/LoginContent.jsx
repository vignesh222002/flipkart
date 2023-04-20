import './login.css'
import { LoginOtpPageRight, LoginPageLeft, LoginPageRight } from './LoginPage'
import { SignupOtpPageRight, SignupPageLeft, SignupPageRight } from './SignupPage'

let LoginContent = ({loginProcess, signupProcess, callLogin, setLoginProcess, setSignupProcess, loginOtpProcess, setLoginOtpProcess, signupOtpProcess, setSignupOtpProcess, setCallLogin, redirectPath}) => {

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
                {loginOtpProcess && <LoginOtpPageRight callLogin={callLogin} setLoginProcess={setLoginProcess} setLoginOtpProcess={setLoginOtpProcess} setCallLogin={setCallLogin} redirectPath={redirectPath}/>}
                {signupOtpProcess && <SignupOtpPageRight callLogin={callLogin} setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} setSignupOtpProcess={setSignupOtpProcess} setCallLogin={setCallLogin} redirectPath={redirectPath}/>}
            </div>
        </>
    )
}

export default LoginContent