import { useEffect, useState } from "react"
import './cartPage.css'
import NavbarMain, { NavbarMainClear } from "../../Components/NavBar/NavbarMain"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"
import CartLoginPage from "./CartLoginPage"
import CartMissing from "../../Components/Cart/Cart"
import CartFooter from "../../Components/CartFooter/CartFooter"
import { useDispatch, useSelector } from "react-redux"
import { cartLoginRouteFalse } from "../../Redux/CartLoginRoute/cartLoginRoute"

let CartPage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let cartLoginRoute = useSelector(state => state.cartLoginPath.cartLoginRoute)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(cartLoginRouteFalse())
    },[])

    let login = false

    return (cartLoginRoute ? (
         (
            <CartLoginPage login={login} loginActive={loginActive} moreActive={moreActive} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin} />
        )
        
    ) : (
        (
            <div className="cartPageBody">
                <NavbarMain style={{boxShadow: '0 2px 2.5px 0 rgb(0 0 0 / 30%)'}} navbarLoginBtn={!login} navbarBecameSeller={false} navbarMore={false} navbarCart={false} navbarUser={login} setLoginActive={setLoginActive} setCallLogin={setCallLogin}/>
                <NavbarMainClear />
                {loginActive && <LoginPopup style={{right: '6%'}} setLoginActive={setLoginActive} />}
                {callLogin && <LoginSignupModal setCallLogin={setCallLogin}/>}
                <CartMissing/>
                <CartFooter />
            </div>
        )
    ));
}

export default CartPage