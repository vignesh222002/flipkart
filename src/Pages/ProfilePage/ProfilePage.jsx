import { useContext, useState } from "react"
import './ProfilePage.css'
import NavbarMain from "../../Components/NavBar/NavbarMain"
import Sector from "../../Components/Sector/Sector"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModule from "../../Components/LoginSignupModule/LoginSignupModule"
import { UserContext } from "../../Components/Context/UserInfoContext"
import UserPopup from "../../Components/NavBar/UserPopup"

let ProfilePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let [profileActive, setProfileActive] = useState(false)
    let redirectPath="/profile"
    let userInfo = useContext(UserContext)
    let login = userInfo.user.isLogin

    return (
        <div className="profilePageBody">
            <NavbarMain navbarLoginBtn={!login} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={login} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin} setProfileActive={setProfileActive}/>
            {loginActive && <LoginPopup style={{right: '32%'}} setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
            {profileActive && <UserPopup style={{right: '30%'}} redirectPath={redirectPath} setProfileActive={setProfileActive} />}
            <Sector />
            {login ? (
                <></>
            ) : (
                <LoginSignupModule callLogin={callLogin} redirectPath={redirectPath}/>
            )}
            <Footer />
        </div>
    )
}

export default ProfilePage