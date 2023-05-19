import { useCallback, useEffect, useState } from "react"
import { ProfilePersonalInfoEditBtn, ProfilePersonalInfoHead, ProfilePersonalInfoHeadContainer, ProfilePersonalInfoInput, ProfilePersonalInfoInputContainer, ProfilePersonalInfoSaveBtn } from "./ProfileInfoCOmponents"
import axios from "axios"
import { IP, Port } from "../../../IP Address/IPAddress"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../../utils/Profile"
import { updateF_Name } from "../../../state/userInformation/UserInformation"

let ProfilePersonalInfo = () => {
    let [edit, setEdit] = useState(false)
    let user = useSelector((state) => state.userInfo)
    let dispatch = useDispatch()

    useEffect(() => console.log(user) , [user])

    const handleCancel = useCallback(() => {
        setEdit(false)
        // get()
        getUser(dispatch)
    }, [edit])

    function handleSave() {
        // get Personal Information
        const token = localStorage.getItem('token')
        // console.log(token);
        const data = {
            "firstname": user.firstname.toString(),
            "lastname": user.lastname.toString(),
            "gender": user.gender.toString()
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
                            <input type="text" name='firstname' className='profileInfoPersonalNameInput' required value={user.firstname} onChange={(e) => dispatch(updateF_Name(e.target.value))} />
                            <label htmlFor="firstName" className='profileInfoPersonalNameLabel'>First Name</label>
                        </>
                    ) : (
                        <input type="text" name='firstname' className='profileInfoPersonalDisabledName' value={user.firstname} disabled />
                    )}
                </ProfilePersonalInfoInput>
                <ProfilePersonalInfoInput>
                    {edit ? (
                        <>
                            <input type="text" name='lastname' className='profileInfoPersonalNameInput' required value={user.lastname} onChange={(e) => handleChange(e)} />
                            <label htmlFor="lastName" className='profileInfoPersonalNameLabel'>Last Name</label>
                        </>
                    ) : (
                        <input type="text" name='lastName' className='profileInfoPersonalDisabledName' value={user.lastname} disabled />
                    )}
                </ProfilePersonalInfoInput>
                {edit && <div onClick={handleSave}><ProfilePersonalInfoSaveBtn /></div>}
            </ProfilePersonalInfoInputContainer>

            <div className="profilePersonalInfoGender">Your Gender</div>
            <div>
                <label htmlFor="Male" className={`${edit ? "profilePersonalInfoSelectGenderContainerEdit" : "profilePersonalInfoSelectGenderContainer"}`}>
                    <input defaultChecked={user.gender == "Male" ? true : false} type="radio" onClick={(e) => edit && handleChange(e)} name='gender' value="Male" className='profilePersonalInfoMaleInput' id='Male' />

                    <div className={`${edit ? "profilePersonalInfoGenderCheck" : "profilePersonalInfoGenderCheckDisabled"} ${edit ? (user.gender == "Male" && "radioActive") : (user.gender == 'Male' && "radioActiveDisabled")}`}></div>

                    <div className="profilePersonalInfoGenderLabel">Male</div>
                </label>

                <label htmlFor="Female" className={`${edit ? "profilePersonalInfoSelectGenderContainerEdit" : "profilePersonalInfoSelectGenderContainer"}`}>
                    <input onClick={(e) => edit && handleChange(e)} type="radio" name='gender' value="Female" defaultChecked={user.gender == "Female" ? true : false} className='profilePersonalInfoFemaleInput' id='Female' />

                    <div className={`${edit ? "profilePersonalInfoGenderCheck" : "profilePersonalInfoGenderCheckDisabled"} ${edit ? (user.gender == "Female" && "radioActive") : (user.gender == 'Female' && "radioActiveDisabled")}`}></div>

                    <div className="profilePersonalInfoGenderLabel">Female</div>
                </label>
            </div>
        </div>

    )
}

export default ProfilePersonalInfo