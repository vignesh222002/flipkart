import { NavLink } from 'react-router-dom'
import './cart.css'

let CartNav = () => {

    return (
        <div className="cartNav">
            <div className="cartNavContainer"></div>
        </div>
    )
}

let CartNavLink = ({children}) => {
    const cartNavStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? '3px solid #2a55e5' : 'none',
            padding : isActive ? '17px' : '',
            width : isActive ? '50%' : '', 
            color : isActive ? '2a55e5' : '#111112'
        }
    }

    return (
        <NavLink style={cartNavStyle} className='cartNavLink'>{children}</NavLink>
    )
}

let CartItemsContainer = () => {

    return (
        <div className="cartItemsContainer"></div>
    )
}

let Cart = () => {

    return (
        <div className='cartContainer'></div>
    )
}

export default Cart