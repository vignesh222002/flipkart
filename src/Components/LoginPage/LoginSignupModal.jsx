import { useState } from 'react'
import './login.css'
import LoginContent from './LoginContent'

let LoginSignupModal = ({callLogin, setCallLogin, redirectPath}) => {
    let [loginProcess, setLoginProcess] = useState(true)
    let [signupProcess, setSignupProcess] = useState(false)
    let [loginOtpProcess, setLoginOtpProcess] = useState(false)
    let [signupOtpProcess, setSignupOtpProcess] = useState(false)

    return (
        <div className="loginSignupModal">
            <div className="loginSignupModalBox">
                <button className="loginSignupCloseBtn" onClick={() => setCallLogin(false)}>✕</button>
                <div className="loginSignupModalContent1">
                    <div className="loginSignupModalContent2">
                        <LoginContent loginProcess={loginProcess} signupProcess={signupProcess} callLogin={callLogin} setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess} loginOtpProcess={loginOtpProcess} setLoginOtpProcess={setLoginOtpProcess} signupOtpProcess={signupOtpProcess} setSignupOtpProcess={setSignupOtpProcess} setCallLogin={setCallLogin} redirectPath={redirectPath}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignupModal