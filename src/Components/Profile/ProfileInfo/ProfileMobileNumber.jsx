import { useCallback, useEffect, useState } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"

let ProfileMobileNumber = ({ userInfo, handleChange, get }) => {
    let [edit, setEdit] = useState(false)
    
    const handleCancel = useCallback(() => {
        setEdit(false)
        get()
    }, [edit])

    function handleSave() {
        // get Email
        const token = localStorage.getItem('token')
        // console.log(token);
        const data = {
            "mobilenum": userInfo.mobilenum.toString()
        }
        setEdit(false)
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
                            <input type="text" maxLength="10" name='mobilenum' className='profileInfoPersonalNameInput' required value={userInfo.mobilenum} onChange={(e) => handleChange(e)} />
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