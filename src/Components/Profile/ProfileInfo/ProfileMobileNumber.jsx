import { useCallback, useEffect, useState } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"
import ProfileOtpPopup from "./ProfilePopup"

let ProfileMobileNumber = ({ userInfo, get }) => {
    let [edit, setEdit] = useState(false)
    let [newNumber, setNewNumber] = useState(userInfo.mobilenum)
    
    const handleCancel = useCallback(() => {
        setEdit(false)
        get()
    }, [edit])   

    function handleSave() {
        // setVerifyOtp(true)
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