import { useContext, useEffect, useState } from "react"
import './cartPage.css'
import NavbarMain from "../../Components/NavBar/NavbarMain"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"
import CartMissing from "../../Components/Cart/Cart"
import CartFooter from "../../Components/CartFooter/CartFooter"
import { useDispatch, useSelector } from "react-redux"
import { cartLoginRouteFalse } from "../../Redux/CartLoginRoute/cartLoginRoute"
import { UserContext } from "../../Components/Context/UserInfoContext"
import LoginSignupModule from "../../Components/LoginSignupModule/LoginSignupModule"
import UserPopup from "../../Components/NavBar/UserPopup"

let CartPage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let [profileActive, setProfileActive] = useState(false)
    let redirectPath="/cart"
    let cartLoginRoute = useSelector(state => state.cartLoginPath.cartLoginRoute)
    let dispatch = useDispatch()
    let userInfo = useContext(UserContext)

    useEffect(() => {
        dispatch(cartLoginRouteFalse())
    },[])

    let login = userInfo.user.isLogin

    return (
            <div className="cartPageBody">
                <NavbarMain style={{boxShadow: '0 2px 2.5px 0 rgb(0 0 0 / 30%)'}} navbarLoginBtn={!login} navbarBecameSeller={false} navbarMore={false} navbarCart={false} navbarUser={login} setLoginActive={setLoginActive} setCallLogin={setCallLogin} setProfileActive={setProfileActive}/>
                {loginActive && <LoginPopup style={{right: '6%'}} setLoginActive={setLoginActive} />}
                {profileActive && <UserPopup style={{right: '5%'}} setProfileActive={setProfileActive} redirectPath={redirectPath}/>}
                {callLogin && <LoginSignupModal callLogin={callLogin} setCallLogin={setCallLogin} redirectPath={redirectPath} />}
                {login ? (
                    <CartMissing/>
                ) : ((!cartLoginRoute) ? (
                        <CartMissing/>
                    ) : (
                        <div className="cartLoginPage"><LoginSignupModule callLogin={callLogin} redirectPath={redirectPath} setCallLogin={setCallLogin}/></div>
                    )
                )}
                <CartFooter />
            </div>
        )
}

export default CartPage