import { Link } from "react-router-dom"

let NavbarLoginBtn = ({setLoginActive, setCallLogin}) => {
    return (
        <div className="NavbarMainLoginBtn" onMouseOver={() => setLoginActive(true)} onMouseOut={() => setLoginActive(false)} onClick={() =>  setCallLogin(true)}>
            <div className="NavbarMainLoginBtn1" >
                <div className="NavbarMainLoginBtn2">
                    <div>
                        <Link className="NavbarMainLoginBtnLink link">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarLoginBtn