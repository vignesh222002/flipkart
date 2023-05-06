import { useCallback, useEffect, useState } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"
import axios from "axios"
import { IP, Port } from "../../../IP Address/IPAddress"

let ProfilePersonalInfo = ({ userInfo, handleChange, get }) => {
    let [edit, setEdit] = useState(false)

    const handleCancel = useCallback(() => {
        setEdit(false)
        get()
    }, [edit])

    function handleSave() {
        // get Personal Information
        const token = localStorage.getItem('token')
        // console.log(token);
        const data = {
            "firstname": userInfo.firstname.toString(),
            "lastname": userInfo.lastname.toString(),
            "gender": userInfo.gender.toString()
        }
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://${IP}:${Port}/updateProfile1`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        }
        

        axios.request(config)
            .then((response) => {
                // console.log(response.data);
                if(response.data.status)    setEdit(false)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="profileInfoPersonalInformation">
            <ProfilePersonalInfoHeadContainer>
                <ProfilePersonalInfoHead>Personal Information</ProfilePersonalInfoHead>
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
                            <input type="text" name='firstname' className='profileInfoPersonalNameInput' required value={userInfo.firstname} onChange={(e) => handleChange(e)} />
                            <label htmlFor="firstName" className='profileInfoPersonalNameLabel'>First Name</label>
                        </>
                    ) : (
                        <input type="text" name='firstname' className='profileInfoPersonalDisabledName' value={userInfo.firstname} disabled />
                    )}
                </ProfilePersonalInfoInput>
                <ProfilePersonalInfoInput>
                    {edit ? (
                        <>
                            <input type="text" name='lastname' className='profileInfoPersonalNameInput' required value={userInfo.lastname} onChange={(e) => handleChange(e)} />
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
                    <input defaultChecked={userInfo.gender == "Male" ? true : false} type="radio" onClick={(e) => edit && handleChange(e)} name='gender' value="Male" className='profilePersonalInfoMaleInput' id='Male' />

                    <div className={`${edit ? "profilePersonalInfoGenderCheck" : "profilePersonalInfoGenderCheckDisabled"} ${edit ? (userInfo.gender == "Male" && "radioActive") : (userInfo.gender == 'Male' && "radioActiveDisabled")}`}></div>

                    <div className="profilePersonalInfoGenderLabel">Male</div>
                </label>

                <label htmlFor="Female" className={`${edit ? "profilePersonalInfoSelectGenderContainerEdit" : "profilePersonalInfoSelectGenderContainer"}`}>
                    <input onClick={(e) => edit && handleChange(e)} type="radio" name='gender' value="Female" defaultChecked={userInfo.gender == "Female" ? true : false} className='profilePersonalInfoFemaleInput' id='Female' />

                    <div className={`${edit ? "profilePersonalInfoGenderCheck" : "profilePersonalInfoGenderCheckDisabled"} ${edit ? (userInfo.gender == "Female" && "radioActive") : (userInfo.gender == 'Female' && "radioActiveDisabled")}`}></div>

                    <div className="profilePersonalInfoGenderLabel">Female</div>
                </label>
            </div>
        </div>

    )
}

export default ProfilePersonalInfo