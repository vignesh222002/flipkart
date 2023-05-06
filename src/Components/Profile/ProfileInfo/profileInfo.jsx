import React, { useEffect, useState } from 'react'
import '.././profile.css'
import MyProfileFooter from '../../../Media/myProfileFooter.png'
import axios from 'axios'
import { IP, Port } from '../../../IP Address/IPAddress'
import ProfilePersonalInfo from './ProfilePersonalInfo'
import ProfileEmailAddress from './ProfileEmailAddress'
import ProfileMobileNumber from './ProfileMobileNumber'

function ProfileRightInfo() {
    const [userInfo, setUserInfo] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        email: "",
        mobilenum: ""})

    // useEffect(() => console.log("updated",userInfo),[userInfo])

    function get() {
        // get Personal Information
        const token = localStorage.getItem('token')
        // console.log(token)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(`http://${IP}:${Port}/getProfile`, config)
            .then(res => {
                // console.log(res.data)
                setUserInfo(res.data)
            })

    }   
    useEffect(() => get(), [])

    return (
        <>
            <div className='profileRightInfo'>
                <div className="profilePersonalInfo">

                    <ProfilePersonalInfo userInfo={userInfo} get={get} />

                    <ProfileEmailAddress userInfo={userInfo} get={get} />

                    <ProfileMobileNumber userInfo={userInfo} get={get} />

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
