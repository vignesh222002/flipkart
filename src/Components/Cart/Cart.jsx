import { NavLink, Outlet } from 'react-router-dom'
import './cart.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartLoginRouteTrue } from '../../Redux/CartLoginRoute/cartLoginRoute'

export let CartNav = ({children}) => {

    return (
        <div className="cartNav">
            <div className="cartNavContainer">{children}</div>
        </div>
    )
}

export let CartNavLink = ({children, to, cartInitialActive}) => {
    return (
        <NavLink to={to} className='cartNavLink'>
            {({isActive}) =>
                isActive || cartInitialActive ? 
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

export let MissingCartBtn = ({style, children}) => {
    let dispatch = useDispatch()

    return (
        <button style={style} onClick= {() => dispatch(cartLoginRouteTrue())} className='missingCartBtn'>{children}</button>
    )
}

export let CartMissingContent = ({source, head, description, button, btnStyle}) => {

    return (
        <CardItemsMissing>
            <MissingCartImage source={source} />
            <MissingCartHead>{head}</MissingCartHead>
            <MissingCartDescription>{description}</MissingCartDescription>
            <MissingCartBtn style={btnStyle}>{button}</MissingCartBtn>
        </CardItemsMissing>
    )
}

let CartMissing = () => {
    let [cartInitialActive, setCartInitialActive] = useState(true)

    return (
        <div className='cartMissingContainer'>
            <div className="cartMissingContent">
                <CartNav>
                    <CartNavLink to="flipkart" cartInitialActive={cartInitialActive}>Flipkart</CartNavLink>
                    <CartNavLink to="grocery"><span onClick={() => setCartInitialActive(false)}>Grocery</span></CartNavLink>
                </CartNav>
                <Outlet />
            </div>
        </div>
    )
}

export default CartMissing