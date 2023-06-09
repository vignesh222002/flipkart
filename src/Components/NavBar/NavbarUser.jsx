import { useSelector } from "react-redux";


let NavbarUser = ({ profileActive, setProfileActive }) => {
    let user = useSelector((state) => state.userInfo)

    function handleSet() {
        setProfileActive(true)
        // console.log('true setted')
    }
    function handleLeave() {
        setProfileActive(false)
        // console.log('false setted')
    }
    const arrowStyle = profileActive ? ({
        transform: "rotate(90deg)",
        transition: "transform 0.2s"
    }) : {}


    return (
        <div className="NavbarMainUser" onMouseOver={() => handleSet()} onMouseOut={() => handleLeave()}>
            <div className="NavbarMainUser1">
                <div className="NavbarMainUser2">
                    <div>
                        <div className="NavbarMainUser3">{user.firstname}</div>
                    </div>
                </div>
                <svg style={arrowStyle} width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="NavbarMainUserArrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"></path></svg>
            </div>
        </div>
    )
}

export default NavbarUser