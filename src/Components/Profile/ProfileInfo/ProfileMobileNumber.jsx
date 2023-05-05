import { useEffect, useState } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"

let ProfileMobileNumber = ({ userInfo, UpdateUser }) => {
    let [edit, setEdit] = useState(false)
    const [changeUser, setChangeUser] = useState({
        mobileNumber: userInfo.mobileNumber
    })
    // useEffect(() => {
    //     console.log('changed User',changeUser)
    // },[changeUser])

    function updateMobileNumber(e) {
        setChangeUser({
            mobileNumber: e.target.value
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
        <div className='profileInfoMobileNumber'>
            <ProfilePersonalInfoHeadContainer>
                <ProfilePersonalInfoHead>Mobile Number</ProfilePersonalInfoHead>
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
                            <input type="text" maxLength="10" name='mobileNumber' className='profileInfoPersonalNameInput' required value={changeUser.mobileNumber} onChange={(e) => updateMobileNumber(e)} />
                            <label htmlFor="mobileNumber" className='profileInfoPersonalNameLabel'>Mobile Number</label>
                        </>
                    ) : (
                        <input type="text" maxLength="10" name='mobileNumber' className='profileInfoPersonalDisabledName' value={userInfo.mobileNumber} disabled />
                    )}
                </ProfilePersonalInfoInput>
                {edit && <div onClick={handleSave}><ProfilePersonalInfoSaveBtn /></div>}
            </ProfilePersonalInfoInputContainer>
        </div>
    )
}

export default ProfileMobileNumber