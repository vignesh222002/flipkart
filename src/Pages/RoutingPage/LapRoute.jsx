import { Route, Routes } from "react-router-dom"
import HomePage from '../../Pages/HomePage/HomePage'
import ProfilePage from '../../Pages/ProfilePage/ProfilePage';
import CartPage from '../../Pages/CartPage/CartPage';
import { CartMissingContent } from "../../Components/Cart/Cart";
import CartMissingImage from '../../Media/cartMissingImage.webp'
import BasketEmptyImage from '../../Media/basketEmptyImage.webp'
import { useContext } from "react";
import { UserContext } from "../../Components/Context/UserInfoContext";
import ProfileRightInfo from "../../Components/Profile/profileInfo";

let LapRoute = () => {
    
    let userInfo = useContext(UserContext)
    let isLogin = userInfo.user.isLogin
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
                <Route index element={<ProfileRightInfo />} />
                <Route path="account" element={<ProfileRightInfo />} />
                <Route path="address" element={<></>} />
                <Route path="pancard" element={<></>} />
            </Route>
            <Route path='/cart' element={<CartPage />}>
                <Route index element={<CartMissingContent source={CartMissingImage} head="Missing Cart items?" description="Login to see the items you added previously" button={cartShopBtn.button} btnStyle={cartShopBtn.btnStyle} /> }></Route>
                <Route path="flipkart" element={<CartMissingContent source={CartMissingImage} head="Missing Cart items?" description="Login to see the items you added previously" button={cartShopBtn.button} btnStyle={cartShopBtn.btnStyle} /> }></Route>
                <Route path="grocery" element={<CartMissingContent source={BasketEmptyImage} head="Your basket is empty!" description="Enjoy Upto 50% Savings on Grocery" button="Shop now" btnStyle={{background: '#2874f0'}} /> }></Route>
            </Route>
        </Routes>
    )
}

export default LapRoute