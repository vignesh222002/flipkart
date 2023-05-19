import { useDispatch } from 'react-redux'
import '../profile.css'
import { useEffect, useRef, useState } from 'react'
import { didUpdate } from '../../../state/profilePopupOtp/ProfilePopupOtp'
import { IP, Port } from '../../../IP Address/IPAddress'
import axios from 'axios'
import { getUser } from '../../../utils/Profile'

let ProfileOtpPopupInput = ({ name, number, handleChange }) => {
    let labelRef = useRef()

    function handleFocus(e) {
        e.target.classList.add('panInputActive')
        if (e.target.id == labelRef.current.id) {
            labelRef.current.classList.add('panLabelActive')
        }
    }
    function handleBlur(e) {
        e.target.classList.remove('panInputActive')
        if(e.target.value.length == 0) {
            if (e.target.id == labelRef.current.id) {
                labelRef.current.classList.remove('panLabelActive')
            }
        }
    }

    return (
        <div className="profileOtpPopupInputContainer">
            <input id={name} type="text" maxLength="6" className="profileOtpPopupInput" onChange={(e) => handleChange(e)} name={name} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
            <label ref={labelRef} id={name} htmlFor={name} className="profileOtpPopup">Enter OTP sent to {number}</label>
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
                        getUser(dispatch)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        // Update Email

        if (purpose == "updateEmail") {
            let data = JSON.stringify({
                "newEmail": number1,
                "emailOTP": value.value1,
                "SMSOTP": value.value2
            })
            // console.log("data :", data)

            const token = localStorage.getItem('token')

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `http://${IP}:${Port}/verifyOTPEMAILSMS`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                data: data
            }

            axios.request(config)
                .then((response) => {
                    console.log(response.data)
                    if (response.data.status) {
                        dispatch(didUpdate())
                        getUser(dispatch)
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
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