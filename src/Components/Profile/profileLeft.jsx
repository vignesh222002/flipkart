import { Link, NavLink } from "react-router-dom"
import './profile.css'
import { useEffect, useState } from "react"
import ProfilePicMale from '../../Media/ProfilePicMale.svg'

let ProfileLeftCard = ({style, children}) => {

    return (
        <div className="profileLeftCard" style={style}>{children}</div>
    )
} 

let ShowProfile = () => {

    return (
        <div className="showProfile">
            <img src={ProfilePicMale} alt="ProfilePicMale" />
            <div className="showProfileInfomation">
                <div className="showProfileHello">Hello,</div>
                <div className="showProfileName">Flipkart Customer</div>
            </div>
        </div>
    )
}

let ProfileNavBox = ({children}) => {

    return (
        <div className="profileNavBox">{children}</div>
    )
}
let ProfileBoxContent = ({children}) => {

    return <div className="profileBoxContent">{children}</div>
}

let ProfileNavBoxLine = ({style}) => {

    return <div style={style}></div>
}

let ProfileNavBoxIcon = ({children}) => {

    return (
        <div className="profileNavBoxIcon">{children}</div>
    )
}

let ProfileNavBoxLink = ({children}) => {

    return (
        <Link className="profileNavBoxLink">{children}</Link>
    )
}
let ProfileNavBoxContent = ({children}) => {

    return (
        <Link className="profileNavBoxContent">{children}</Link>
    )
}

let ProfileNavLink = ({to, children, profileNavInitialActive }) => {

    return (
        <NavLink to={to} className='profileNavLink'>
            {({isActive}) => 
                isActive || profileNavInitialActive ? 
                    <div className="profileNavLinkActive profileNavLinkContent">{children}</div>       
                     : 
                    <div className="profileNavLinkContent">{children}</div>
            }
        </NavLink>
    )
}

let ProfileNavLeftFooter = ({children}) => {

    return <div className="profileNavLeftFooter">{children}</div>
}

let ProfileLeftContent = () => {
    let [profileNavInitialActive, setProfileNavInitialActive] = useState(true)

    function handleNavDeactive() {
        setProfileNavInitialActive(false)
    }

    return (
        <div>
            <ProfileLeftCard>
                <ShowProfile />
            </ProfileLeftCard>
            <ProfileLeftCard style={{marginBottom: "16px"}}>
                <div>
                    <ProfileNavBox>
                        <ProfileBoxContent>
                            <ProfileNavBoxIcon><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 18"><g fill="none" fillRule="evenodd" transform="translate(-8.694 -11)"><ellipse cx="20.557" cy="20" rx="20.557" ry="20"/><path fill="#2874F1" d="M9 11v17.108c0 .493.41.892.918.892h4.93v-5.257h-3.033l4.912-4.77 4.972 4.83h-3.035V29h12.417c.507 0 .918-.4.918-.892V11H9z"/></g></svg></ProfileNavBoxIcon>
                            <ProfileNavBoxLink>
                                MY ORDERS
                                <span className="profileNavBoxLinkIconBox"><svg width="14" height="14" viewBox="0 0 16 27"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg></span>
                            </ProfileNavBoxLink>
                        </ProfileBoxContent>
                    </ProfileNavBox>
                    <ProfileNavBoxLine style={{borderBottom: "1px solid #f0f0f0"}} />
                </div>
                <div>
                    <ProfileNavBox>
                        <ProfileBoxContent>
                            <ProfileNavBoxIcon><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 21"><g fill="none" fillRule="evenodd" transform="translate(-9.694 -10)"><path fill="#2874F0" d="M14.275 22.704c2.272-.412 4.347-.618 6.225-.618 1.878 0 3.953.206 6.225.618a5.15 5.15 0 0 1 4.23 5.068V31h-20.91v-3.228a5.15 5.15 0 0 1 4.23-5.068zm1.274-7.724c0-2.58 2.163-4.673 4.832-4.673 2.667 0 4.83 2.092 4.83 4.673 0 2.58-2.163 4.673-4.83 4.673-2.67 0-4.833-2.092-4.833-4.673z"/><ellipse cx="20.557" cy="20" rx="20.557" ry="20"/></g></svg></ProfileNavBoxIcon>
                            <ProfileNavBoxContent>ACCOUNT SETTINGS</ProfileNavBoxContent>
                        </ProfileBoxContent>
                        <div className="profileNavLinkFlex">
                        <ProfileNavLink  to="account" profileNavInitialActive={profileNavInitialActive}>Profile Information</ProfileNavLink>
                        <ProfileNavLink to="address" ><span onClick={handleNavDeactive}>Manage Addresses</span></ProfileNavLink>
                        <ProfileNavLink to="pancard">PAN Card Information</ProfileNavLink>
                    </div>
                    </ProfileNavBox>
                    <ProfileNavBoxLine style={{borderBottom: "1px solid #f0f0f0"}} />
                </div>
                <div>
                    <ProfileNavBox>
                        <ProfileBoxContent>
                            <ProfileNavBoxIcon><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 22"><g fill="none" fillRule="evenodd" transform="translate(-9.694 -9)"><ellipse cx="20.557" cy="20" rx="20.557" ry="20"/><path d="M7 6h28v28H7z"/><path fill="#2874F0" fillRule="nonzero" d="M31.5 27v1.167a2.34 2.34 0 0 1-2.333 2.333H12.833a2.333 2.333 0 0 1-2.333-2.333V11.833A2.333 2.333 0 0 1 12.833 9.5h16.334a2.34 2.34 0 0 1 2.333 2.333V13H21a2.333 2.333 0 0 0-2.333 2.333v9.334A2.333 2.333 0 0 0 21 27h10.5zM21 24.667h11.667v-9.334H21v9.334zm4.667-2.917c-.97 0-1.75-.782-1.75-1.75s.78-1.75 1.75-1.75c.968 0 1.75.782 1.75 1.75s-.782 1.75-1.75 1.75z"/></g></svg></ProfileNavBoxIcon>
                            <ProfileNavBoxContent>PAYMENTS</ProfileNavBoxContent>
                        </ProfileBoxContent>
                        <div className="profileNavLinkFlex">
                            <ProfileNavLink to="no">Gift Cards</ProfileNavLink>
                            <ProfileNavLink to="no">Saved UPI</ProfileNavLink>
                            <ProfileNavLink to="no">Saved Cards</ProfileNavLink>
                        </div>
                    </ProfileNavBox>
                    <ProfileNavBoxLine style={{borderBottom: "1px solid #f0f0f0"}} />
                </div>
                <div>
                    <ProfileNavBox>
                        <ProfileBoxContent>
                            <ProfileNavBoxIcon><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 19"><g fill="none" fillRule="evenodd"><path fill="#2874F0" fillRule="nonzero" d="M20.5 2.75h-9L9.25.5H2.5A2.247 2.247 0 0 0 .26 2.75l-.01 13.5A2.257 2.257 0 0 0 2.5 18.5h18a2.257 2.257 0 0 0 2.25-2.25V5a2.257 2.257 0 0 0-2.25-2.25zm-5.625 3.375a2.257 2.257 0 0 1 2.25 2.25 2.257 2.257 0 0 1-2.25 2.25 2.257 2.257 0 0 1-2.25-2.25 2.257 2.257 0 0 1 2.25-2.25zm4.5 9h-9V14c0-1.496 3.004-2.25 4.5-2.25s4.5.754 4.5 2.25v1.125z"/><path d="M-2-4h27v27H-2z"/></g></svg></ProfileNavBoxIcon>
                            <ProfileNavBoxContent>MY STUFF</ProfileNavBoxContent>
                        </ProfileBoxContent>
                        <div className="profileNavLinkFlex">
                        <ProfileNavLink to="no">My Coupons</ProfileNavLink>
                        <ProfileNavLink to="no">My Reviews & Ratings</ProfileNavLink>
                        <ProfileNavLink to="no">All Notifications</ProfileNavLink>
                        <ProfileNavLink to="no">My Wishlist</ProfileNavLink>
                    </div>
                    </ProfileNavBox>
                    <ProfileNavBoxLine style={{borderBottom: "1px solid #f0f0f0"}} />
                </div>
                <ProfileNavBoxLine style={{borderBottom: "1px solid #f0f0f0"}} />
                <Link>
                    <ProfileNavBox>
                        <ProfileBoxContent>
                            <ProfileNavBoxIcon><svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#2874F0" strokeWidth="0.3" stroke="#2874F0" d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></svg></ProfileNavBoxIcon>
                            <ProfileNavBoxLink>Logout</ProfileNavBoxLink>
                        </ProfileBoxContent> 
                    </ProfileNavBox>
                </Link>
            </ProfileLeftCard>
            <ProfileNavLeftFooter>
                <div className="profileNavLeftFooterHead">Frequently Visited:</div>
                <div className="profileNavLeftFooterLinkContent">
                    <div className="profileNavLeftFooterLink">Track Order</div>
                    <div className="profileNavLeftFooterLink">Help Center</div>
                </div>
            </ProfileNavLeftFooter>
        </div>
    )
}

export default ProfileLeftContent