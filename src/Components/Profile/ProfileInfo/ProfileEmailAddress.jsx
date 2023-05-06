import { useState, useEffect, useCallback } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"

let ProfileEmailAddress = ({ userInfo, get }) => {
    let [edit, setEdit] = useState(false)
    let [newEmail, setNewEmail] = useState(userInfo.email)

    const handleCancel = useCallback(() => {
        setEdit(false)
        get()
    }, [edit])

    function handleSave() {
        setEdit(false)
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