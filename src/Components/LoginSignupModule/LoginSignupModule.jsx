import { useState } from 'react'
import LoginContent from '../LoginPage/LoginContent'
import './LoginSignupModule.css'

let LoginSignupModule = () => {
    let [loginProcess, setLoginProcess] = useState(true)
    let [signupProcess, setSignupProcess] = useState(false)
    let [loginOtpProcess, setLoginOtpProcess] = useState(false)

    return (
        <div className="loginSignupModuleContainer">
            <LoginContent loginProcess={loginProcess} signupProcess={signupProcess} setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} loginOtpProcess={loginOtpProcess} setLoginOtpProcess={setLoginOtpProcess}/>
        </div>
    )
}

export default LoginSignupModule