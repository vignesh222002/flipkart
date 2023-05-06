import { useDispatch } from 'react-redux'
import '../profile.css'
import { useEffect, useState } from 'react'
import { didUpdate } from '../../../Redux'
import { IP, Port } from '../../../IP Address/IPAddress'
import axios from 'axios'

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
    let dispatch = useDispatch()

    // useEffect(() => {
    //     console.log("value", value)
    // }, [value])

    function handleChange(e) {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    function cancelHandler() {
        dispatch(didUpdate())
    }
    function submitHandler() {
        // Update Mobile Number

        if (purpose == "updateMobile") {
            let data = JSON.stringify({
                "newMobilenum": number2,
                "oldOTP": value.value1,
                "newOTP": value.value2,
            })
            // console.log("data :", data)

            const token = localStorage.getItem('token')

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `http://${IP}:${Port}/verifyOldNewMobileOTP`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                data: data
            }

            axios.request(config)
                .then((response) => {
                    // console.log(response.data)
                    if (response.data.status) {
                        dispatch(didUpdate())
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        // Update Email
    }

    return (
        <div className="profileOtpPopupContainer">
            <div className="profileOtpPopupContentContainer">
                <button className="profileOtpPopupCancelBtn" onClick={cancelHandler} >✕</button>
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