import { Link } from "react-router-dom"

let NavbarLoginBtn = ({setLoginActive}) => {
    return (
        <div className="NavbarMainLoginBtn" onMouseOver={() => setLoginActive(true)} onMouseOut={() => setLoginActive(false)}>
            <div className="NavbarMainLoginBtn1" >
                <div className="NavbarMainLoginBtn2">
                    <div>
                        <Link to='login' className="NavbarMainLoginBtnLink link">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarLoginBtn