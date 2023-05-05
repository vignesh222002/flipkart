import { useState } from "react"
import AddressMenu from "../../../Media/AddressMenu.svg"
import AddAddress from "./AddAddress"
let AddressMenuPopup = ({toggle,name}) => {
console.log("name is ",name)
    return (
      <div className="addressMenuPopup">
        <div className="addressMenuPopupBtn" onClick={() => toggle(name)}><span>Edit</span></div>
        <div className="addressMenuPopupBtn"><span>Delete</span></div>
      </div>
    )
  }
  

let AddressCard = ({ name, toggle, open }) => {
    // console.log("name is ",name)
    let [addressMenu, setAddressMenu] = useState(false)
    let prevAddress = {
        name: "Vignesh",
        mobileNum: "9361738902",
        pincode: "638009",
        locality: "Thadagam Road, R.S.Puram",
        area: "Codingmart Technologies, No. 471, CPC Towers, 2nd floor",
        city: "Coimbatore",
        state: "Tamil Nadu",
        landmark: "",
        alternateMobileNum: "",
        type: "home"
    }
  
    return (
        <div key={name} className="addressCard" onClick={() => addressMenu && setAddressMenu(false)}>
            {open ?
                <AddAddress toggle={toggle} prevAddress={prevAddress} open={open} /> : (
                    <div className="addressCardContent">
                        <div className="addressCardMenu" onMouseOver={() => setAddressMenu(true)} onMouseOut={() => setAddressMenu(false)}>
                            <img src={AddressMenu} alt="Toggle" />
                            {addressMenu && <AddressMenuPopup onMouseOver={() => setAddressMenu(true)} onMouseOut={() => setAddressMenu(false)}  toggle={toggle} name={name}/>}
                        </div>
                        <div className="addressCardTypeContainer">
                            <span className="addressCardType">{prevAddress.type}</span>
                        </div>
                        <p className="addressCardTitleContainer">
                            <span className='addressCardTitle'>{prevAddress.name}</span>
                            <span className='addressCardTitle addressCardTitleMobile'>{prevAddress.mobileNum}</span>
                        </p>
                        <span className="addressCardContentContainer">
                            {prevAddress.area}, {prevAddress.locality}, {prevAddress.city}, {prevAddress.state} - <span className='addressPincode'>{prevAddress.pincode}</span>
                        </span>
                    </div>
                )}
        </div>
    )
}

export default AddressCard