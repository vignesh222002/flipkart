import React from 'react'
import './cartFooter.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export function CartFooterLink({children}) {

    return (
        <Link className='cartFooterLink'>{children}</Link>
    )
}

export function CartRightFooterLink({children}) {

    return (
        <Link className='cartRightFooterLink'>{children}</Link>
    )
}

function CartFooter() {
  return (
    <footer className='cartFooter'>
        <div className="cartFooterContent">
            <div className="cartFooterContent1">
                <div className="cartFooterLeftContent">
                    <span>
                        <span>Policies:</span>
                        <CartFooterLink>Returns Policy</CartFooterLink>
                        <CartFooterLink>Terms of use</CartFooterLink>
                        <CartFooterLink>Security</CartFooterLink>
                        <CartFooterLink>Privacy</CartFooterLink>
                        <CartFooterLink>Infringement</CartFooterLink>
                    </span>
                    <span className='cartFooterYear'>
                        © 2007-2023 <span> Flipkart.com </span>
                    </span>
                </div>
                <div className="cartFooterRightContent">
                    <span>Need help? </span>
                    <span>Visit the
                        <CartRightFooterLink> Help Center</CartRightFooterLink> or 
                        <CartRightFooterLink> Contact Us</CartRightFooterLink>
                    </span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default CartFooter