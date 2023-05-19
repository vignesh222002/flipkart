import { useState, useEffect, useCallback } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"
import { IP, Port } from "../../../IP Address/IPAddress"
import { useDispatch } from "react-redux"
import { updateEmail } from "../../../state/profilePopupOtp/ProfilePopupOtp"
import axios from "axios"
import { getUser } from "../../../utils/Profile"

let ProfileEmailAddress = ({ userInfo, get }) => {
    let [edit, setEdit] = useState(false)
    let [newEmail, setNewEmail] = useState(userInfo.email)
    let dispatch = useDispatch()

    const handleCancel = useCallback(() => {
        setEdit(false)
        getUser(dispatch)
    }, [edit])

    function handleSave() {
        const token = localStorage.getItem('token')
        // console.log("email :", newEmail, "mobile :", userInfo.mobilenum)

        let data = JSON.stringify({
            "email": newEmail
        })

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://${IP}:${Port}/updateProfileEmail`,
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
                    dispatch(updateEmail({ email: newEmail, mobile: userInfo.mobilenum }))
                    setEdit(false)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='profileInfoEmailAddress'>
            <ProfilePersonalInfoHeadContainer>
                <ProfilePersonalInfoHead>Email Address</ProfilePersonalInfoHead>
                {edit ? (
                    <ProfilePersonalInfoEditBtn><span onClick={handleCancel}>Cancel</span></ProfilePersonalInfoEditBtn>
                ) : (
                    <ProfilePersonalInfoEditBtn><span onClick={() => setEdit(true)}>Edit</span></ProfilePersonalInfoEditBtn>
                )}
            </ProfilePersonalInfoHeadContainer>

            <ProfilePersonalInfoInputContainer>
                <ProfilePersonalInfoInput>
                    {edit ? (
                        <>
                            <input type="text" name='email' className='profileInfoPersonalNameInput' required value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                            <label htmlFor="email" className='profileInfoPersonalNameLabel'>Email Address</label>
                        </>
                    ) : (
                        <input type="text" name='email' className='profileInfoPersonalDisabledName' value={userInfo.email} disabled />
                    )}
                </ProfilePersonalInfoInput>
                {edit && <div onClick={handleSave}><ProfilePersonalInfoSaveBtn /></div>}
            </ProfilePersonalInfoInputContainer>
        </div>
    )
}

export default ProfileEmailAddress