import { useState } from 'react'
import LoginContent from '../LoginPage/LoginContent'
import './LoginSignupModule.css'

let LoginSignupModule = ({callLogin, redirectPath, setCallLogin}) => {
    let [loginProcess, setLoginProcess] = useState(true)
    let [signupProcess, setSignupProcess] = useState(false)
    let [loginOtpProcess, setLoginOtpProcess] = useState(false)
    let [signupOtpProcess, setSignupOtpProcess] = useState(false)

    return (
        <div className="loginSignupModuleContainer">
            <LoginContent loginProcess={loginProcess} signupProcess={signupProcess} callLogin={callLogin} setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} loginOtpProcess={loginOtpProcess} setLoginOtpProcess={setLoginOtpProcess} setCallLogin={setCallLogin} signupOtpProcess={signupOtpProcess} setSignupOtpProcess={setSignupOtpProcess} redirectPath={redirectPath}/>
        </div>
    )
}

export default LoginSignupModule