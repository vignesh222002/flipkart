import { useState } from "react";


let NavbarUser = () => {
    let [userName, setUserName] = useState('Flipkart')

    return (
        <div className="NavbarMainUser">
            <div className="NavbarMainUser1">
                <div className="NavbarMainUser2">
                    <div>
                        <div className="NavbarMainUser3">{userName}</div>
                    </div>
                </div>
                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="NavbarMainUserArrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2gTTdy"></path></svg>
            </div>
        </div>
    )
}

export default NavbarUser