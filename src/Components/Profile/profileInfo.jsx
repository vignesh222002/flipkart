import React, { useState } from 'react'
import './profile.css'
import MyProfileFooter from '../../Media/myProfileFooter.png'

let ProfilePersonalInfoHeadContainer = ({children}) => {
    return  <div className="profilePersonalInfoHeadContainer">{children}</div>
}

let ProfilePersonalInfoHead = ({children}) => {
    return <span className="profilePersonalInfoHead">{children}</span>
}

let ProfilePersonalInfoEditBtn = ({children}) => {
    return <span className="profilePersonalInfoEditBtn">{children}</span>
}

let ProfilePersonalInfoInputContainer = ({children}) => {
    return <div className="profilePersonalInfoInputContainer">{children}</div>
}

let ProfilePersonalInfoInput = ({children}) => {
    return <div className="profilePersonalInfoInput">{children}</div>
}

let ProfilePersonalInfo = () => {
    let [edit, setEdit] = useState(false)

    return (
        <>
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
                    <input type="text" name='firstName' className='profileInfoPersonalNameInput' required value="Flipkart" />
                    <label htmlFor="firstName" className='profileInfoPersonalNameLabel'>First Name</label>
                </ProfilePersonalInfoInput>
                <ProfilePersonalInfoInput>
                    <input type="text" name='lastName' className='profileInfoPersonalNameInput' required value="Customer" />
                    <label htmlFor="lastName" className='profileInfoPersonalNameLabel'>Last Name</label>
                </ProfilePersonalInfoInput>
            </ProfilePersonalInfoInputContainer>
        </>
    )
}

function ProfileRightInfo() {
  return (
    <>
        <div className='profileRightInfo'>
            <div className="profilePersonalInfo">
                <div className="profileInfoPersonalInformation">
                    
                    <ProfilePersonalInfo />

                
                    <div className="profilePersonalInfoGender">Your Gender</div>
                    <div>
                        <label htmlFor="male" className='profilePersonalInfoSelectGenderContainer'>
                            <input type="radio" name='gender' className='profilePersonalInfoMaleInput' id='male' checked />
                            <div className="profilePersonalInfoGenderCheck"></div>
                            <div className="profilePersonalInfoGenderLabel">Male</div>
                        </label>
                        <label htmlFor="male" className='profilePersonalInfoSelectGenderContainer'>
                            <input type="radio" name='gender' className='profilePersonalInfoFemaleInput' id='female' />
                            <div className="profilePersonalInfoGenderCheck"></div>
                            <div className="profilePersonalInfoGenderLabel">Female</div>
                        </label>
                    </div>
                </div>

                
                <div className='profileInfoEmailAddress'>
                    <ProfilePersonalInfoHeadContainer>
                        <ProfilePersonalInfoHead>Email Address</ProfilePersonalInfoHead>
                        <ProfilePersonalInfoEditBtn>Edit</ProfilePersonalInfoEditBtn>
                    </ProfilePersonalInfoHeadContainer>

                    <ProfilePersonalInfoInputContainer>
                        <ProfilePersonalInfoInput>
                            <input type="text" name='email' className='profileInfoPersonalNameInput' required value="gtavignesh" />
                            <label htmlFor="email" className='profileInfoPersonalNameLabel'>Email Address</label>
                        </ProfilePersonalInfoInput>
                    </ProfilePersonalInfoInputContainer>
                </div>
                <div className='profileInfoMobileNumber'>
                    <ProfilePersonalInfoHeadContainer>
                        <ProfilePersonalInfoHead>Mobile Number</ProfilePersonalInfoHead>
                        <ProfilePersonalInfoEditBtn>Edit</ProfilePersonalInfoEditBtn>
                    </ProfilePersonalInfoHeadContainer>

                    <ProfilePersonalInfoInputContainer>
                        <ProfilePersonalInfoInput>
                            <input type="number" name='mobileNumber' className='profileInfoPersonalNameInput' required value="+919361738902" />
                            <label htmlFor="mobileNumber" className='profileInfoPersonalNameLabel'>Mobile Number</label>
                        </ProfilePersonalInfoInput>
                    </ProfilePersonalInfoInputContainer>
                </div>
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
        <div><img src={MyProfileFooter} width="100%" className='myProfileFooterImage'/></div>
    </>
  )
}

export default ProfileRightInfo