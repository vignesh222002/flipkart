import { useEffect, useState } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"

let ProfilePersonalInfo = ({ userInfo }) => {
    let [edit, setEdit] = useState(false)
    console.log(userInfo)
    const [changeUser, setChangeUser] = useState({
        firstname: userInfo?.firstname || "",
        lastname: userInfo?.lastname || "",
        gender: userInfo?.gender || "",
    })
    useEffect(() => {
        console.log('changed User', changeUser)
        setChangeUser({
            firstname: userInfo?.firstname || "",
            lastname: userInfo?.lastname || "",
            gender: userInfo?.gender || "",
        });
    }, [])

    function updateFirstName(e) {
        setChangeUser({
            ...changeUser,
            firstName: e.target.value
        })
    }
    function updateLastName(e) {
        setChangeUser({
            ...changeUser,
            lastName: e.target.value
        })
    }
    function updateGender(e) {
        if (edit) {
            setChangeUser({
                ...changeUser,
                gender: e
            })
        }
    }
    function handleSave() {
        // UpdateUser({
        //     ...userInfo,
        //     ...changeUser
        // })
        setEdit(false)
    }

    return (
        <div className="profileInfoPersonalInformation">
            <ProfilePersonalInfoHeadContainer>
                <ProfilePersonalInfoHead>Personal Information</ProfilePersonalInfoHead>
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
                            <input type="text" name='firstName' className='profileInfoPersonalNameInput' required value={changeUser.firstname} onChange={(e) => updateFirstName(e)} />
                            <label htmlFor="firstName" className='profileInfoPersonalNameLabel'>First Name</label>
                        </>
                    ) : (
                        <input type="text" name='firstName' className='profileInfoPersonalDisabledName' value={userInfo.firstname} disabled />
                    )}
                </ProfilePersonalInfoInput>
                <ProfilePersonalInfoInput>
                    {edit ? (
                        <>
                            <input type="text" name='lastName' className='profileInfoPersonalNameInput' required value={changeUser.lastname} onChange={(e) => updateLastName(e)} />
                            <label htmlFor="lastName" className='profileInfoPersonalNameLabel'>Last Name</label>
                        </>
                    ) : (
                        <input type="text" name='lastName' className='profileInfoPersonalDisabledName' value={userInfo.lastname} disabled />
                    )}
                </ProfilePersonalInfoInput>
                {edit && <div onClick={handleSave}><ProfilePersonalInfoSaveBtn /></div>}
            </ProfilePersonalInfoInputContainer>

            <div className="profilePersonalInfoGender">Your Gender</div>
            <div>
                <label htmlFor="Male" className={`${edit ? "profilePersonalInfoSelectGenderContainerEdit" : "profilePersonalInfoSelectGenderContainer"}`}>
                    <input defaultChecked={changeUser.gender == "Male" ? true : false} type="radio" onClick={() => updateGender("Male")} name='gender' className='profilePersonalInfoMaleInput' id='Male' />
                    <div className={`${edit ? "profilePersonalInfoGenderCheck" : "profilePersonalInfoGenderCheckDisabled"} ${edit ? (changeUser.gender == "Male" && "radioActive") : (changeUser.gender == 'Male' && "radioActiveDisabled")}`}></div>
                    <div className="profilePersonalInfoGenderLabel">Male</div>
                </label>

                <label htmlFor="Female" className={`${edit ? "profilePersonalInfoSelectGenderContainerEdit" : "profilePersonalInfoSelectGenderContainer"}`}>
                    <input onClick={() => updateGender("Female")} type="radio" name='gender' defaultChecked={changeUser.gender == "Female" ? true : false} className='profilePersonalInfoFemaleInput' id='Female' />
                    <div className={`${edit ? "profilePersonalInfoGenderCheck" : "profilePersonalInfoGenderCheckDisabled"} ${edit ? (changeUser.gender == "Female" && "radioActive") : (changeUser.gender == 'Female' && "radioActiveDisabled")}`}></div>
                    <div className="profilePersonalInfoGenderLabel">Female</div>
                </label>
            </div>
        </div>

    )
}

export default ProfilePersonalInfo