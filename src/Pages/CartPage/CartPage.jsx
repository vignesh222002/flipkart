import { useState } from "react"
import './cartPage.css'
import NavbarMain, { NavbarMainClear } from "../../Components/NavBar/NavbarMain"
import Sector from "../../Components/Sector/Sector"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModule from "../../Components/LoginSignupModule/LoginSignupModule"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"

let CartPage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let [cartLogin, setCartLogin] = useState(false)

    let login = false

    return (cartLogin ? (
         (
            <div className="cartPageBody">
                <NavbarMain navbarLoginBtn={!login} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={login} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin}/>
                <Sector />
                {loginActive && <LoginPopup style={{right: '32%'}} setLoginActive={setLoginActive} />}
                {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
                <LoginSignupModule />
                <Footer />
            </div>
        )
        
    ) : (
        (
            <div className="cartPageBody">
            <NavbarMain style={{boxShadow: '0 2px 2.5px 0 rgb(0 0 0 / 30%)'}} navbarLoginBtn={!login} navbarBecameSeller={false} navbarMore={false} navbarCart={false} navbarUser={login} setLoginActive={setLoginActive} setCallLogin={setCallLogin}/>
            <NavbarMainClear />
            {loginActive && <LoginPopup style={{right: '6%'}} setLoginActive={setLoginActive} />}
            {callLogin && <LoginSignupModal setCallLogin={setCallLogin}/>}
            
        </div>
        )
    ));
}

export default CartPage