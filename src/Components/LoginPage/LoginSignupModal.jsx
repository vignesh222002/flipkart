import { useState } from 'react'
import './login.css'
import { LoginPageLeft, LoginPageRight } from './LoginPage'

let LoginSignupModal = ({setCallLogin}) => {
    let [loginProcess, setLoginProcess] = useState(true)
    let [signupProcess, setSignupProcess] = useState(false)

    return (
        <div className="loginSignupModal">
            <div className="loginSignupModalBox">
                <button className="loginSignupCloseBtn" onClick={() => setCallLogin(false)}>X</button>
                <div className="loginSignupModalContent1">
                    <div className="loginSignupModalContent2">
                        <div className="loginSignupModalLeft">
                            {/* Left Content */}
                            {loginProcess && <LoginPageLeft />}
                        </div>
                        <div className="loginSignupModalRight">
                            {/* Right Content */}
                            {loginProcess && <LoginPageRight />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignupModal