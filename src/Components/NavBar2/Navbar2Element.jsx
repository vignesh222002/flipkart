import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './navbar2.css'

let Navbar2Elements = ({ nav2ProductImage, nav2ProductName }) => {
    const ProductNameRef = useRef()

    function handleFocus() {
        ProductNameRef.current.classList.add('bluecolor')
    }
    function handleBlur() {
        ProductNameRef.current.classList.remove('bluecolor')
    }

    return (
        <div className="navbar2Element" onMouseOver={handleFocus} onMouseOut={handleBlur} >
            <Link className='navbar2Link'>
                <div className="nav2ProductImg">
                    <img className='nav2ProductImage' src={nav2ProductImage} alt="Navbar2ProductImg" />
                </div>
                <div ref={ProductNameRef} className="nav2ProductName">{nav2ProductName}</div>
            </Link>
        </div>
    )
}

export default Navbar2Elements