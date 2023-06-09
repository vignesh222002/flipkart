import React, { useEffect, useState } from 'react'
import '.././profile.css'
import MyProfileFooter from '../../../Media/myProfileFooter.png'
import axios from 'axios'
import { IP, Port } from '../../../IP Address/IPAddress'
import ProfilePersonalInfo from './ProfilePersonalInfo'
import ProfileEmailAddress from './ProfileEmailAddress'
import ProfileMobileNumber from './ProfileMobileNumber'
import { getUser } from '../../../utils/Profile'
import { useDispatch, useSelector } from 'react-redux'

function ProfileRightInfo() {
    let dispatch = useDispatch()
    let user = useSelector((state) => state.userInfo)

    useEffect(() => {
        getUser(dispatch)
    }, [])
    // useEffect(() => console.log(user) , [user])

    return (
        <>
            <div className='profileRightInfo'>
                <div className="profilePersonalInfo">

                    <ProfilePersonalInfo />

                    <ProfileEmailAddress userInfo={user} />

                    <ProfileMobileNumber userInfo={user} />

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
