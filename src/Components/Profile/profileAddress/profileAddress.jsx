import React, { useState } from 'react'
import Add from '../../../Media/Add.svg'
import AddAddress from './AddAddress'
import AddressCard from './AddressCard'


function ProfileAddress() {
  let [addNewAdd, setAddNewAdd] = useState(false)
  const [openKey, setOpenKey] = useState()

  const handleToggle = (key) => {
    // open key is the key of opened address
    // key is the current clicked key
    setOpenKey(openKey !== key ? key : null)
  }
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
          {["1","2","3"].map((res) => <AddressCard toggle={handleToggle} key={res} name={res} open={openKey === res} />)}

        </div>
      </div>
    </div>
  )
}

export default ProfileAddress