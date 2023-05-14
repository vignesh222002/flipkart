import "./navbar.css"
import { Link } from "react-router-dom";
import Flipkart from "../../Media/flipkartLogo.png";
import Plus from "../../Media/plus.png"
import NavbarLoginBtn from "./NavbarLoginBtn";
import NavbarUser from "./NavbarUser";
import NavbarMore from "./NavbarMore";
import { useDispatch } from "react-redux";
import { cartLoginRouteFalse } from "../../state/cartLoginRoute/CartLoginRoute";


let NavbarLogo = () => {
    return (
        <div className="NavbarMainContent1">
            <div className="NavbarMainLogo">
                <Link to="/" className="NavbarMainHomeLink link"><img className="NavbarMainFlipImg" alt="Logo" src={Flipkart} /></Link>
                <Link to="" className="NavbarMainPlusLink link">Explore <span className="PlusYellow">Plus</span><img className="NavbarMainPLusImg" src={Plus} /></Link>
            </div>
        </div>
    )
}

let NavbarSearchBar = () => {
    return (
        <div className="NavbarMainSearchBar">
            <form className="NavbarMainSearchForm">
                <div className="NavbarMainSearchContent">
                    <div className="NavbarMainSearchContent1">
                        <input className="NavbarMainSearchInput" type="text" placeholder="Search for products, brands and more" />
                    </div>
                    <button className="NavbarMainSearchButton"><svg width="20" height="20" viewBox="0 0 17 18" className="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fillRule="evenodd"><path className="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path className="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg></button>
                </div>
            </form>
        </div>
    )
}

let NavbarBecameSeller = () => {
    return (
        <div className="NavbarMainBecameSeller">
            <Link to="becomeseller" className="NavbarMainBecameSellerLink link"><span>Become a Seller</span></Link>
        </div>
    )
}

let NavbarCart = () => {
    let dispatch = useDispatch()
    
    return (
        <div className="NavbarMainCart" onClick={() => dispatch(cartLoginRouteFalse())}>
            <div className="NavbarMainCart1">
                <div className="NavbarMainCart2">
                    <Link to="/cart/flipkart" className="NavbarMainCartLink link">
                    <svg className="NavbarMainCartLogo" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                    <span>Cart</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export let NavbarMainClear = () => {
    return (
        <div className="navbarMainClear"></div>
    )
}

let NavbarMain = ({style, navbarLoginBtn, navbarBecameSeller, navbarMore, navbarCart, navbarUser, setLoginActive, setMoreActive, setCallLogin, setProfileActive}) => {
    return (
        <>
            <div style={style} className="navbarMain">
                <div className="navbarMainLeftSpace" />
                <div className="navbarMainContent">
                    <NavbarLogo />
                    <NavbarSearchBar />
                    {navbarLoginBtn && <NavbarLoginBtn setLoginActive={setLoginActive} setCallLogin={setCallLogin}/>}
                    {navbarUser && <NavbarUser setProfileActive={setProfileActive} />}
                    {navbarBecameSeller && <NavbarBecameSeller />}
                    {navbarMore && <NavbarMore setMoreActive={setMoreActive} />}
                    {navbarCart && <NavbarCart />}
                </div>
                <div className="navbarMainRightSpace" />
            </div>
        </>
    )
}

export default NavbarMain
