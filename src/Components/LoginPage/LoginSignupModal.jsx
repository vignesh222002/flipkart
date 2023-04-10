import { useState } from 'react'
import './login.css'
import LoginContent from './LoginContent'

let LoginSignupModal = ({setCallLogin}) => {
    let [loginProcess, setLoginProcess] = useState(true)
    let [signupProcess, setSignupProcess] = useState(false)

    return (
        <div className="loginSignupModal">
            <div className="loginSignupModalBox">
                <button className="loginSignupCloseBtn" onClick={() => setCallLogin(false)}>✕</button>
                <div className="loginSignupModalContent1">
                    <LoginContent loginProcess={loginProcess} signupProcess={signupProcess} setLoginProcess={setLoginProcess} setSignupProcess={setSignupProcess}/>
                </div>
            </div>
        </div>
    )
}

export default LoginSignupModal