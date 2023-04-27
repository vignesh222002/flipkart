import React, { useState } from 'react'
import Add from '../../Media/Add.svg'
import AddressMenu from '../../Media/AddressMenu.svg'

let AddressCard = () => {
  let [addressMenu, setAddressMenu] = useState(false)

  return (
    <div className="addressCard">
      <div className="addressCardContent">
        <div className="addressCardMenu" onMouseOver={() => setAddressMenu(true)} onMouseOut={() => setAddressMenu(false)}>
          <img src={AddressMenu} alt="Toggle" />
          {addressMenu && <AddressMenuPopup onMouseOver={() => setAddressMenu(true)} onMouseOut={() => setAddressMenu(false)} /> }
        </div>
        <div className="addressCardTypeContainer">
          <span className="addressCardType">   Work   </span>
        </div>
        <p className="addressCardTitleContainer">
          <span className='addressCardTitle'>Vignesh</span>
          <span className='addressCardTitle addressCardTitleMobile'>9361738902</span>
        </p>
        <span className="addressCardContentContainer">
          Codingmart Technologies, No. 471, CPC Towers, 2nd floor, Thadagam Road, R.S.Puram, Coimbatore, Tamil Nadu - <span className='addressPincode'>638009</span>
        </span>
      </div>
    </div>
  )
}

let AddressMenuPopup = () => {

  return (
    <div className="addressMenuPopup">
      <div className="addressMenuPopupBtn"><span>Edit</span></div>
      <div className="addressMenuPopupBtn"><span>Delete</span></div>
    </div>
  )
}

function ProfileAddress() {
  return (
    <div className='profileAddressContainer'>
        <span className='profileAddressHead'>Manage Addresses</span>
        <div>
            <div className="profileAddAddressBtnContainer">
                <div className="profileAddAddressBtn">
                    <img src={Add} className='profileAddAddressIcon' />
                    ADD A NEW ADDRESS
                </div>
            </div>
            {/* Address Card */}
            <div>
              <AddressCard />
              <AddressCard />
            </div>
        </div>
    </div>
  )
}

export default ProfileAddress