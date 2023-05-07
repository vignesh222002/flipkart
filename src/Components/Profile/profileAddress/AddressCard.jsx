import { useState } from "react"
import AddressMenu from "../../../Media/AddressMenu.svg"
import AddAddress from "./AddAddress"
import { IP, Port } from "../../../IP Address/IPAddress"
import axios from "axios"
let AddressMenuPopup = ({ toggle, name, id, setAddressMenu }) => {
    // console.log("name is ", name)
    function deleteAddress() {
        const token = localStorage.getItem('token')

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://${IP}:${Port}/deleteAddress/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios.request(config)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="addressMenuPopup" onMouseOver={() => setAddressMenu(true)} onMouseOut={() => setAddressMenu(false)}>
            <div className="addressMenuPopupEditBtn" onClick={() => toggle(name)}><span>Edit</span></div>
            <div className="addressMenuPopupDeleteBtn" onClick={deleteAddress()}><span>Delete</span></div>
        </div>
    )
}

// onClick={() => addressMenu && setAddressMenu(false)}

let AddressCard = ({ name, toggle, open, prevAddress }) => {
    // console.log("name is ",name)
    // console.log(prevAddress)
    let [addressMenu, setAddressMenu] = useState(false)

    return (
        <div key={name} className="addressCard" >
            {open ?
                <AddAddress toggle={toggle} prevAddress={prevAddress} open={open} /> :
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