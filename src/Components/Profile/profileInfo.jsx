import React, { useEffect, useState } from 'react'
import './profile.css'
import MyProfileFooter from '../../Media/myProfileFooter.png'

let ProfilePersonalInfoHeadContainer = ({ children }) => {
    return <div className="profilePersonalInfoHeadContainer">{children}</div>
}

let ProfilePersonalInfoHead = ({ children }) => {
    return <span className="profilePersonalInfoHead">{children}</span>
}

let ProfilePersonalInfoEditBtn = ({ children }) => {
    return <span className="profilePersonalInfoEditBtn">{children}</span>
}

let ProfilePersonalInfoInputContainer = ({ children }) => {
    return <div className="profilePersonalInfoInputContainer">{children}</div>
}

let ProfilePersonalInfoInput = ({ children }) => {
    return <div className="profilePersonalInfoInput">{children}</div>
}

let ProfilePersonalInfoSaveBtn = () => {
    return <button className='profilePersonalInfoSaveBtn'>SAVE</button>
}

let ProfilePersonalInfo = ({ userInfo, UpdateUser }) => {
    let [edit, setEdit] = useState(false)
    const [changeUser, setChangeUser] = useState({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        gender: userInfo.gender
    })
    // useEffect(() => {
    //     console.log('changed User',changeUser)
    // },[changeUser])

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
        UpdateUser({
            ...userInfo,
            ...changeUser
        })
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
                            <input type="text" name='firstName' className='profileInfoPersonalNameInput' required value={changeUser.firstName} onChange={(e) => updateFirstName(e)}/>
                            <label htmlFor="firstName" className='profileInfoPersonalNameLabel'>First Name</label>
                        </>
                    ) : (
                        <input type="text" name='firstName' className='profileInfoPersonalDisabledName' value={userInfo.firstName} disabled/>
                    )}
                </ProfilePersonalInfoInput>
                <ProfilePersonalInfoInput>
                    {edit ? (
                        <>
                            <input type="text" name='lastName' className='profileInfoPersonalNameInput' required value={changeUser.lastName} onChange={(e) => updateLastName(e)} />
                            <label htmlFor="lastName" className='profileInfoPersonalNameLabel'>Last Name</label>
                        </>
                    ) : (
                        <input type="text" name='lastName' className='profileInfoPersonalDisabledName' value={userInfo.lastName} disabled/>
                    )}
                </ProfilePersonalInfoInput>
                {edit && <div onClick={handleSave}><ProfilePersonalInfoSaveBtn /></div> }
            </ProfilePersonalInfoInputContainer>

            <div className="profilePersonalInfoGender">Your Gender</div>
            <div>
                <label htmlFor="male" className={`${edit ? "profilePersonalInfoSelectGenderContainerEdit" : "profilePersonalInfoSelectGenderContainer"}`}>
                    <input checked={changeUser.gender == "male" ? true : false} type="radio" onClick={() => updateGender("male")} name='gender' className='profilePersonalInfoMaleInput' id='male'/>
                    <div className={`${edit ? "profilePersonalInfoGenderCheck" : "profilePersonalInfoGenderCheckDisabled"} ${edit ? (changeUser.gender == "male" && "radioActive") : (changeUser.gender == 'male' && "radioActiveDisabled") }`}></div>
                    <div className="profilePersonalInfoGenderLabel">Male</div>
                </label>
                <label htmlFor="female" className={`${edit ? "profilePersonalInfoSelectGenderContainerEdit" : "profilePersonalInfoSelectGenderContainer"}`}>
                    <input onClick={() => updateGender("female")} type="radio" name='gender' checked={changeUser.gender == "female" ? true : false} className='profilePersonalInfoFemaleInput' id='female' />
                    <div className={`${edit ? "profilePersonalInfoGenderCheck" : "profilePersonalInfoGenderCheckDisabled"} ${edit ? (changeUser.gender == "female" && "radioActive") : (changeUser.gender == 'female' && "radioActiveDisabled")}`}></div>
                    <div className="profilePersonalInfoGenderLabel">Female</div>
                </label>
            </div>
        </div>
        
    )
}

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
                            <input type="text" name='email' className='profileInfoPersonalNameInput' required value={changeUser.email} onChange={(e) => updateEmail(e)}/>
                            <label htmlFor="email" className='profileInfoPersonalNameLabel'>Email Address</label>
                        </>
                    ) : (
                        <input type="text" name='email' className='profileInfoPersonalDisabledName' value={userInfo.email} disabled/>
                    )}
                </ProfilePersonalInfoInput>
                {edit && <div onClick={handleSave}><ProfilePersonalInfoSaveBtn /></div> }
            </ProfilePersonalInfoInputContainer>
        </div>
    )
}

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
                            <input type="text" maxLength="10" name='mobileNumber' className='profileInfoPersonalNameInput' required value={changeUser.mobileNumber} onChange={(e) => updateMobileNumber(e)}/>
                            <label htmlFor="mobileNumber" className='profileInfoPersonalNameLabel'>Mobile Number</label>
                        </>
                    ) : (
                        <input type="text" maxLength="10" name='mobileNumber' className='profileInfoPersonalDisabledName' value={userInfo.mobileNumber} disabled/>
                    )}
                </ProfilePersonalInfoInput>
                {edit && <div onClick={handleSave}><ProfilePersonalInfoSaveBtn /></div> }
            </ProfilePersonalInfoInputContainer>
        </div>
    )
}

function ProfileRightInfo() {
    const [userInfo, setUserInfo] = useState({
        firstName: "Flipkart",
        lastName: "Customer",
        gender: "male",
        email: "gtavignesh22042002@gmail.com",
        mobileNumber: "9361738902"
    })
    function UpdateUser(user) {
        setUserInfo(user)
    }
    // useEffect(() => {
    //     console.log(userInfo);
    // },[userInfo])

    return (
        <>
            <div className='profileRightInfo'>
                <div className="profilePersonalInfo">
                    
                    <ProfilePersonalInfo userInfo={userInfo} UpdateUser={UpdateUser} />

                    <ProfileEmailAddress userInfo={userInfo} UpdateUser={UpdateUser} />

                    <ProfileMobileNumber userInfo={userInfo} UpdateUser={UpdateUser} />

                    <div className="profileInfoFaq">
                        <div className="profileInfoFaqHead">FAQs</div>
                        <div>
                            <h4 className="profileInfoFaqQuestion">What happens when I update my email address (or mobile number)?</h4>
                            <p className="profileInfoFaqAnswer">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                            <h4 className="profileInfoFaqQuestion">When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
                            <p className="profileInfoFaqAnswer">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                            <h4 className="profileInfoFaqQuestion">What happens to my existing Flipkart account when I update my email address (or mobile number)?</h4>
                            <p className="profileInfoFaqAnswer">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                            <h4 className="profileInfoFaqQuestion">Does my Seller account get affected when I update my email address?</h4>
                            <p className="profileInfoFaqAnswer">Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                        </div>
                    </div>
                    <div className="profileDeactivate">Deactivate Account</div>
                </div>
            </div>
            <div><img src={MyProfileFooter} width="100%" className='myProfileFooterImage' /></div>
        </>
    )
}

export default ProfileRightInfo
