import { useState } from "react"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import NavbarMain from "../../Components/NavBar/NavbarMain"


let HomePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    
    let login = false

    return (
        <>
            <NavbarMain navbarLoginBtn={true} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={login} setLoginActive={setLoginActive} setMoreActive={setMoreActive}/>
            {loginActive && <LoginPopup setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
        </>
    )
}

export default HomePage
