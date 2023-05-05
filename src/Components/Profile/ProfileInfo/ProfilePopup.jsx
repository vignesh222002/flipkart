import { Link } from 'react-router-dom'
import '../profile.css'
import { useState } from 'react'

let ProfileOtpPopupInput = ({ name, number, handleChange }) => {
    return (
        <div className="profileOtpPopupInputContainer">
            <input type="text" maxLength="6" className="profileOtpPopupInput" onChange={(e) => handleChange(e)} name={name} />
            <label htmlFor={name} className="profileOtpPopup">Enter OTP sent to {number}</label>
        </div>
    )
}

let ProfileOtpPopup = ({ purpose, number1, number2 }) => {
    let [value, setValue] = useState({
        value1: "",
        value2: ""
    })

    function handleChange(e) {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        }) 
    }

    function submitHandler() {
        // Submit Handler
    }

    return (
        <div className="profileOtpPopupContainer">
            <div className="profileOtpPopupContentContainer">
                <button className="profileOtpPopupCancelBtn">✕</button>
                <div className="profileOtpPopupContent">
                    <div className="profileOtpPopupRow">
                        <div className="profileOtpPopupRowVerify">Verify OTP</div>
                        <a className="profileOtpPopupRowResend">Resend OTP</a>
                    </div>
                    <div>
                        <ProfileOtpPopupInput name="value1" number={number1} handleChange={handleChange} />
                        <ProfileOtpPopupInput name="value2" number={number2} handleChange={handleChange} />
                        <button className="profileOtpPopupSubmitBtn" onClick={submitHandler}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileOtpPopup