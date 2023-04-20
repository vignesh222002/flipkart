let NavbarMore = ({setMoreActive}) => {
    return (
        <div className="NavbarMainMore" onMouseOver={() => setMoreActive(true)} onMouseOut={() => setMoreActive(false)}>
            <div className="NavbarMainMore1">
                <div className="NavbarMainMore2">
                    <div>
                        <div className="NavbarMainMore3">More</div>
                    </div>
                </div>
                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="NavbarMainMoreArrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_2gTTdy"></path></svg>
            </div>
        </div>
    )
}

export default NavbarMore