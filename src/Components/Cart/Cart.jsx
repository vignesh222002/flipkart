import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './cart.css'
import { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartLoginRouteTrue } from '../../Redux/CartLoginRoute/cartLoginRoute'
import { UserContext } from '../Context/UserInfoContext'

export let CartNav = ({children}) => {

    return (
        <div className="cartNav">
            <div className="cartNavContainer">{children}</div>
        </div>
    )
}

export let CartNavLink = ({children, to}) => {
    return (
        <NavLink to={to} className='cartNavLink'>
            {({isActive}) =>
                isActive ? 
                    <div className="cartNavLinkContent">{children}</div> 
                        :
                    <div>{children}</div>
            }
        </NavLink>
    )
}

export let CartItemsContainer = () => {

    return (
        <div className="cartItemsContainer"></div>
    )
}

export let CardItemsMissing = ({children}) => {

    return (
        <div className="cardItemsMissingContainer">{children}</div>
    )
}

export let MissingCartImage = ({source}) => {

    return (
        <img className='missingCartItems' src={source} alt="Missing Cart Items" />
    )
}

export let MissingCartHead = ({children}) => {

    return (
        <div className="missingCartHead">{children}</div>
    )
}

export let MissingCartDescription = ({children}) => {

    return (
        <div className="missingCartDescription">{children}</div>
    )
}

export let MissingCartLoginBtn = ({style, children}) => {
    let dispatch = useDispatch()

    return (
        <button style={style} onClick= {() => dispatch(cartLoginRouteTrue())} className='missingCartBtn'>{children}</button>
    )
}

export let MissingCartShopBtn = ({style, children}) => {
    let navigate = useNavigate()
    return (
        <button style={style} onClick={() => navigate('/')} className='missingCartBtn'>{children}</button>
    )
}

export let CartMissingContent = ({source, head, description, button, btnStyle}) => {
    let userInfo = useContext(UserContext)
    let isLogin = userInfo.user.isLogin

    return (
        <CardItemsMissing>
            <MissingCartImage source={source} />
            <MissingCartHead>{head}</MissingCartHead>
            <MissingCartDescription>{description}</MissingCartDescription>
            {isLogin ? (
                <MissingCartShopBtn style={btnStyle}>{button}</MissingCartShopBtn>
            ): (
                <MissingCartLoginBtn style={btnStyle}>{button}</MissingCartLoginBtn>
            )}
        </CardItemsMissing>
    )
}

let CartMissing = () => {

    return (
        <div className='cartMissingContainer'>
            <div className="cartMissingContent">
                <CartNav>
                    <CartNavLink to="flipkart">Flipkart</CartNavLink>
                    <CartNavLink to="grocery">Grocery</CartNavLink>
                </CartNav>
                <Outlet />
            </div>
        </div>
    )
}

export default CartMissing