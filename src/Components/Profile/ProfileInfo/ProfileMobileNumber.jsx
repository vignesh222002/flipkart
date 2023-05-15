import { useCallback, useEffect, useState } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"
import { useDispatch } from "react-redux"
import { updateMobileNumber } from "../../../state/profilePopupOtp/ProfilePopupOtp"
import { IP, Port } from "../../../IP Address/IPAddress"
import axios from "axios"

let ProfileMobileNumber = ({ userInfo, get }) => {
    let [edit, setEdit] = useState(false)
    let [newNumber, setNewNumber] = useState(userInfo.mobilenum)
    let dispatch = useDispatch()

    const handleCancel = useCallback(() => {
        setEdit(false)
        get()
    }, [edit])

    function handleSave() {
        // console.log("old :",userInfo.mobilenum, "new :", newNumber)
        const token = localStorage.getItem('token')

        let data = JSON.stringify({
            "newMobilenum": `+91${newNumber.toString()}`
        })

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://${IP}:${Port}/updateProfileMobileNum`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        }
        axios.request(config)
            .then(res => {
                // console.log(res.data)
                if (res.data.status) {
                    dispatch(updateMobileNumber({ prev: userInfo.mobilenum, current: newNumber }))
                    setEdit(false)

                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='profileInfoMobileNumber'>
            <ProfilePersonalInfoHeadContainer>
                <ProfilePersonalInfoHead>Mobile Number</ProfilePersonalInfoHead>
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
                            <input type="text" maxLength="10" name='mobilenum' className='profileInfoPersonalNameInput' required value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
                            <label htmlFor="mobilenum" className='profileInfoPersonalNameLabel'>Mobile Number</label>
                        </>
                    ) : (
                        <input type="text" maxLength="10" name='mobilenum' className='profileInfoPersonalDisabledName' value={userInfo.mobilenum} disabled />
                    )}
                </ProfilePersonalInfoInput>
                {edit && <div onClick={handleSave}><ProfilePersonalInfoSaveBtn /></div>}
            </ProfilePersonalInfoInputContainer>
        </div>
    )
}

export default ProfileMobileNumber