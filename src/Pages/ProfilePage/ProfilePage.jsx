import { useContext, useEffect, useState } from "react"
import './ProfilePage.css'
import NavbarMain from "../../Components/NavBar/NavbarMain"
import Sector from "../../Components/Sector/Sector"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModule from "../../Components/LoginSignupModule/LoginSignupModule"
import { UserContext } from "../../Components/Context/UserInfoContext"
import UserPopup from "../../Components/NavBar/UserPopup"
import ProfileContent from "../../Components/Profile/profileContent"
import { useSelector } from 'react-redux'
import ProfileOtpPopup from "../../Components/Profile/ProfileInfo/ProfilePopup"
import ProfileDeletePopup from "../../Components/Profile/profileAddress/profileDeletePopup"

let ProfilePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let [profileActive, setProfileActive] = useState(false)
    let redirectPath = "/profile/account"
    let userInfo = useContext(UserContext)
    let login = userInfo.user.isLogin


    let width =  window.innerWidth
    let loginPopupStyle
    let morePopupStyle
    let userPopupStyle
    if(width > "1366") {
        loginPopupStyle = { right: "33.5%" }
        morePopupStyle = { right: "19%" }
        userPopupStyle = { right: "32%" }
    }
    else if (width > "900") {
        loginPopupStyle = { right: "32%" }
        morePopupStyle = { right: "12%" }
        userPopupStyle = { right: "30.5%" }
    }

    const popup = useSelector(state => state.updateUserInfo)
    // console.log(popup)
    const deletePopup = useSelector(state => state.deleteAddressPopup.deletePopup)

    return (
        <div className="profilePageBody">
            {popup.popup && <ProfileOtpPopup purpose={popup.purpose} number1={popup.number1} number2={popup.number2} />}
            {deletePopup && <ProfileDeletePopup />}

            <NavbarMain navbarLoginBtn={!login} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={login} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin} setProfileActive={setProfileActive} />
            {loginActive && <LoginPopup style={loginPopupStyle} setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup style={morePopupStyle} setMoreActive={setMoreActive} />}
            {profileActive && <UserPopup style={userPopupStyle} redirectPath={redirectPath} setProfileActive={setProfileActive} />}
            <Sector />
            {login ? (
                <ProfileContent />
            ) : (
                <LoginSignupModule callLogin={callLogin} redirectPath={redirectPath} />
            )}
            <Footer />
        </div>
    )
}

export default ProfilePage