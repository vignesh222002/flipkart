import { useState, useEffect } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"

let ProfileEmailAddress = ({ userInfo, UpdateUser }) => {
    let [edit, setEdit] = useState(false)
    const [changeUser, setChangeUser] = useState({
        email: userInfo.email
    })
    // useEffect(() => {
    //     console.log('changed User',changeUser)
    // },[changeUser])

    function updateEmail(e) {
        setChangeUser({
            email: e.target.value
        })
    }
    function handleSave() {
        UpdateUser({
            ...userInfo,
            ...changeUser
        })
        setEdit(false)
    }

    return (
        <div className='profileInfoEmailAddress'>
            <ProfilePersonalInfoHeadContainer>
                <ProfilePersonalInfoHead>Email Address</ProfilePersonalInfoHead>
                {edit ? (
                    <ProfilePersonalInfoEditBtn><span onClick={() => setEdit(false)}>Cancel</span></ProfilePersonalInfoEditBtn>
                ) : (
                    <ProfilePersonalInfoEditBtn><span onClick={() => setEdit(true)}>Edit</span></ProfilePersonalInfoEditBtn>
                )}
            </ProfilePersonalInfoHeadContainer>

            <ProfilePersonalInfoInputContainer>
                <ProfilePersonalInfoInput>
                    {edit ? (
                        <>
                            <input type="text" name='email' className='profileInfoPersonalNameInput' required value={changeUser.email} onChange={(e) => updateEmail(e)} />
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