import './login.css'
import { LoginPageLeft, LoginPageRight } from './LoginPage'
import { SignupPageLeft, SignupPageRight } from './SignupPage'

let LoginContent = ({loginProcess, signupProcess, setLoginProcess, setSignupProcess}) => {

    return (
        <div className="loginSignupModalContent2">
            <div className="loginSignupModalLeft">
                {/* Left Content */}
                {loginProcess && <LoginPageLeft />}
                {signupProcess && <SignupPageLeft />}
            </div>
            <div className="loginSignupModalRight">
                {/* Right Content */}
                {loginProcess && <LoginPageRight setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} />}
                {signupProcess && <SignupPageRight setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} />}
            </div>
        </div>
    )
}

export default LoginContent