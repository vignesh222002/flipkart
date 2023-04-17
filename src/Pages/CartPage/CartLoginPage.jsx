import './cartPage.css'
import Sector from "../../Components/Sector/Sector"
import MorePopup from "../../Components/NavBar/MorePopup"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModule from "../../Components/LoginSignupModule/LoginSignupModule"
import NavbarMain from "../../Components/NavBar/NavbarMain"
import LoginPopup from "../../Components/NavBar/LoginPopUP"


let CartLoginPage = ({ loginActive, moreActive, setLoginActive, setMoreActive, setCallLogin, login }) => {

    return (
        <div className="cartPageBody">
            <NavbarMain navbarLoginBtn={!login} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={login} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin}/>
            <Sector />
            {loginActive && <LoginPopup style={{right: '32%'}} setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
            <LoginSignupModule />
            <Footer />
        </div>
    )
}

export default CartLoginPage