import React, { useState } from 'react'
import Add from '../../Media/Add.svg'
import AddAddress from './profileAddress/AddAddress'
import AddressCard from './profileAddress/AddressCard'

export let AddressMenuPopup = ({setEditAddress}) => {

  return (
    <div className="addressMenuPopup">
      <div className="addressMenuPopupBtn" onClick={() => setEditAddress(true)}><span>Edit</span></div>
      <div className="addressMenuPopupBtn"><span>Delete</span></div>
    </div>
  )
}

function ProfileAddress() {
  let [addNewAdd, setAddNewAdd] = useState(false)
  let [editAddress, setEditAddress] = useState(false)

  return (
    <div className='profileAddressContainer'>
        <span className='profileAddressHead'>Manage Addresses</span>
        <div>
            <div className="profileAddAddressBtnContainer">
                {/* Add Address Window */}
                {addNewAdd ? 
                 <AddAddress addNewAdd={addNewAdd} setAddNewAdd={setAddNewAdd} /> : (
                  <div className="profileAddAddressBtn" onClick={() => setAddNewAdd(true)}>
                    <img src={Add} className='profileAddAddressIcon' />
                    ADD A NEW ADDRESS
                  </div>
                 )
              }
            </div>
            {/* Address Card */}
            <div>
              <AddressCard editAddress={editAddress} setEditAddress={setEditAddress} />
              <AddressCard editAddress={editAddress} setEditAddress={setEditAddress} />
            </div>
        </div>
    </div>
  )
}

export default ProfileAddress