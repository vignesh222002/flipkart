import { Route, Routes } from "react-router-dom"
import HomePage from '../../Pages/HomePage/HomePage'
import ProfilePage from '../../Pages/ProfilePage/ProfilePage';
import CartPage from '../../Pages/CartPage/CartPage';
import { CartMissingContent } from "../../Components/Cart/Cart";
import CartMissingImage from '../../Media/cartMissingImage.webp'
import BasketEmptyImage from '../../Media/basketEmptyImage.webp'
import ProfileRightInfo from "../../Components/Profile/ProfileInfo/profileInfo";
import ProfileAddress from "../../Components/Profile/profileAddress/profileAddress";
import ProfilePanCard from "../../Components/Profile/ProfilePanCard/profilePanCard";
import CataloguePage from "../cataloguePage/CataloguePage";

let LapRoute = () => {
    
    let isLogin = !(!localStorage.getItem("token"))
    let cartShopBtn = isLogin ? ({
        button: "Shop now",
        btnStyle: {background: '#2874f0'}
    }) : ({
        button: "Login",
        btnStyle: {background: '#fb641b'}
    })

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<ProfilePage />}>
                <Route path="account" element={<ProfileRightInfo />} />
                <Route path="address" element={<ProfileAddress />} />
                <Route path="pancard" element={<ProfilePanCard />} />
            </Route>
            <Route path='/cart' element={<CartPage />}>
                <Route path="flipkart" element={<CartMissingContent source={CartMissingImage} head="Missing Cart items?" description="Login to see the items you added previously" button={cartShopBtn.button} btnStyle={cartShopBtn.btnStyle} /> }></Route>
                <Route path="grocery" element={<CartMissingContent source={BasketEmptyImage} head="Your basket is empty!" description="Enjoy Upto 50% Savings on Grocery" button="Shop now" btnStyle={{background: '#2874f0'}} /> }></Route>
            </Route>
            <Route path="/catalogue/:api" element={<CataloguePage />}></Route>
        </Routes>
    )
}

export default LapRoute