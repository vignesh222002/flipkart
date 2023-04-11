import { Link } from "react-router-dom"
import "./loginPopup.css"

let LoginPopup = ({setLoginActive}) => {
    return (
        <div className="loginPopup" onMouseOver={() => setLoginActive(true)} onMouseOut={() => setLoginActive(false)}>
            <div className="loginPopupArrow"></div>
            <div className="loginPopupContent">
                <div className="loginPopupHead">
                    <div>New customer?</div>
                    <Link className="blueLink">Sign Up</Link>
                </div>
                <ul className="loginPopupList">
                    <li className="loginPopupListItem">
                        <Link to="/login" className="loginPopupListLink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 14"><path fill="#2874F1" fill-rule="nonzero" d="M7 .333A6.67 6.67 0 0 0 .333 7 6.67 6.67 0 0 0 7 13.667 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333zm0 2c1.107 0 2 .894 2 2 0 1.107-.893 2-2 2s-2-.893-2-2c0-1.106.893-2 2-2zM7 11.8a4.8 4.8 0 0 1-4-2.147C3.02 8.327 5.667 7.6 7 7.6c1.327 0 3.98.727 4 2.053A4.8 4.8 0 0 1 7 11.8z"></path></svg>
                            <div className="loginPopupListItemContent">My Profile</div>
                        </Link>
                    </li>
                    <li className="loginPopupListItem">
                        <Link to="/" className="loginPopupListLink">
                            <svg width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="Desktop_VIP" stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(7.873 .143)"><path d="M6.484 4.94s2.476 1.227 3.698 1.748c1.188.506 1.323 2.4.016 3.04-1.307.64-1.67.744-1.67.744s.208-.53.178-1.044c-.085-.914-2.787-1.656-4.576-2.094 0 0-1.375-4.311-1.995-5.512C1.509.612.242.11.242.11l2.995.04s1.03-.05 1.488 1.055c.456 1.106 1.76 3.734 1.76 3.734" fill="#2873F0" mask="url(#b)"></path></g><g transform="translate(8.635 8.27)"><path d="M5.547 6.265S4.334 8.713 3.8 9.965c-.507 1.187-2.44 1.322-3.079.015C.081 8.673.015 8.44.015 8.44s.387.076 1 .048c.915-.084 1.7-2.786 2.138-4.575 0 0 4.311-1.377 5.513-1.997 1.21-.624 1.71-1.892 1.71-1.892l-.04 3.44s.05.587-1.055 1.044c-1.105.455-3.734 1.757-3.734 1.757" fill="#2873F0" mask="url(#d)"></path></g><g transform="translate(0 8.778)"><path d="M4.655 5.573S2.193 4.353.956 3.826C-.232 3.32-.367 1.423.94.786 2.248.145 2.774.026 2.774.026s-.34.545-.255 1.157C2.606 2.1 5.22 2.74 7.008 3.179c0 0 1.427 4.287 1.997 5.513.695 1.493 1.848 1.72 1.848 1.72l-3.396-.05s-.585.05-1.042-1.055c-.458-1.106-1.76-3.734-1.76-3.734" fill="#2873F0" mask="url(#f)"></path></g><g transform="translate(0 .143)"><path d="M4.857 4.754s1.219-2.46 1.747-3.699c.506-1.188 2.4-1.321 3.04-.016.64 1.308.701 1.544.701 1.544s-.482.007-.993.035c-.916.087-1.663 2.702-2.101 4.49 0 0-4.296 1.405-5.513 1.996C.066 9.916 0 10.957 0 10.957l.068-3.4s-.05-.586 1.055-1.043c1.105-.457 3.734-1.76 3.734-1.76" fill="#2873F0" mask="url(#h)"></path></g></g></svg>
                            <div className="loginPopupListItemContent">Flipkart Plus Zone</div>
                        </Link>
                    </li>
                    <li className="loginPopupListItem">
                        <Link to="/" className="loginPopupListLink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" class="" viewBox="0 0 16 12"><g fill="none" fill-rule="evenodd"><path fill="#2874F1" d="M6.038 11.682h8.407c.565 0 1.018-.38 1.13-.855V.847H.426v9.98c0 .475.452.855 1.017.855h2.232v-2.98H1.94L4.776 6l2.996 2.703H6.038v2.98z"></path></g></svg>
                            <div className="loginPopupListItemContent">Orders</div>
                        </Link>
                    </li>
                    <li className="loginPopupListItem">
                        <Link to="/" className="loginPopupListLink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                            <div className="loginPopupListItemContent">Wishlist</div>
                        </Link>
                    </li>
                    <li className="loginPopupListItem">
                        <Link to="/" className="loginPopupListLink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M0 0h16v16H0z"></path><path fill="#2874F0" d="M16 9.25v2.5c0 .69-.597 1.25-1.333 1.25H1.333C.597 13 0 12.44 0 11.75v-2.5c.736 0 1.333-.56 1.333-1.25S.736 6.75 0 6.75v-2.5C0 3.56.597 3 1.333 3h13.334C15.403 3 16 3.56 16 4.25v2.5c-.736 0-1.333.56-1.333 1.25S15.264 9.25 16 9.25zM4.4 3.625v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4z"></path></g></svg>
                            <div className="loginPopupListItemContent">Rewards</div>
                        </Link>
                    </li>
                    <li className="loginPopupListItem">
                        <Link to="/" className="loginPopupListLink">
                            <svg width="16" height="16" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(-9.694 -9)"><ellipse cx="20.557" cy="20" rx="20.557" ry="20"></ellipse><path d="M7 6h28v28H7z"></path><path fill="#2874F0" fill-rule="nonzero" d="M31.5 27v1.167a2.34 2.34 0 0 1-2.333 2.333H12.833a2.333 2.333 0 0 1-2.333-2.333V11.833A2.333 2.333 0 0 1 12.833 9.5h16.334a2.34 2.34 0 0 1 2.333 2.333V13H21a2.333 2.333 0 0 0-2.333 2.333v9.334A2.333 2.333 0 0 0 21 27h10.5zM21 24.667h11.667v-9.334H21v9.334zm4.667-2.917c-.97 0-1.75-.782-1.75-1.75s.78-1.75 1.75-1.75c.968 0 1.75.782 1.75 1.75s-.782 1.75-1.75 1.75z"></path></g></svg>
                            <div className="loginPopupListItemContent">Gift Cards</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LoginPopup