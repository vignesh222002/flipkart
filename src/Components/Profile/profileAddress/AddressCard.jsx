import { useEffect, useState } from "react"
import AddressMenu from "../../../Media/AddressMenu.svg"
import AddAddress from "./AddAddress"
import { triggerDeleteAddress } from "../../../store"
import { useDispatch } from "react-redux"

let AddressMenuPopup = ({ toggle, name, id, setAddressMenu }) => {
    // console.log("name is ", name)
    let dispatch = useDispatch()

    function handleDelete() {
        dispatch(triggerDeleteAddress(id))
    }

    return (
        <div className="addressMenuPopup" onMouseOver={() => setAddressMenu(true)} onMouseOut={() => setAddressMenu(false)}>
            <div className="addressMenuPopupEditBtn" onClick={() => toggle(name)}><span>Edit</span></div>
            <div className="addressMenuPopupDeleteBtn" onClick={() => handleDelete()} ><span>Delete</span></div>
        </div>
    )
}

let AddressCard = ({ name, toggle, open, prevAddress }) => {
    // console.log("name is ",name)
    // console.log(prevAddress)
    let [addressMenu, setAddressMenu] = useState(false)

    return (
        <div key={name} className="addressCard" onClick={() => addressMenu && setAddressMenu(false)} >
            {open ?
                <AddAddress toggle={toggle} prevAddress={prevAddress} name={name} open={open} /> :
                (
                    <div className="addressCardContent">
                        <div className="addressCardMenu" onMouseOver={() => setAddressMenu(true)} onMouseOut={() => setAddressMenu(false)}>
                            <img src={AddressMenu} alt="Toggle" />
                            {addressMenu && <AddressMenuPopup toggle={toggle} name={name} id={prevAddress.id} setAddressMenu={setAddressMenu} />}
                        </div>
                        <div className="addressCardTypeContainer">
                            <span className="addressCardType">{prevAddress.address_type}</span>
                        </div>
                        <p className="addressCardTitleContainer">
                            <span className='addressCardTitle'>{prevAddress.name}</span>
                            <span className='addressCardTitle addressCardTitleMobile'>{prevAddress.mobilenum}</span>
                        </p>
                        <span className="addressCardContentContainer">
                            {prevAddress.address}, {prevAddress.locality}, {prevAddress.city}, {prevAddress.state} - <span className='addressPincode'>{prevAddress.pincode}</span>
                        </span>
                    </div>
                )}
        </div>
    )
}

export default AddressCard