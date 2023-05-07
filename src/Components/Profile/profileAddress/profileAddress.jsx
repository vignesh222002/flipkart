import React, { useEffect, useState } from 'react'
import Add from '../../../Media/Add.svg'
import AddAddress from './AddAddress'
import AddressCard from './AddressCard'
import { IP, Port } from '../../../IP Address/IPAddress'
import axios from 'axios'


function ProfileAddress() {
  let [addNewAdd, setAddNewAdd] = useState(false)
  const [openKey, setOpenKey] = useState()
  let [address, setAddress] = useState([])
  let res = []

  // useEffect(() => console.log(address),[address])

  const handleToggle = (key) => {
    // open key is the key of opened address
    // key is the current clicked key
    setOpenKey(openKey !== key ? key : null)
  }

  function getAddress() {
    const token = localStorage.getItem('token')

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://${IP}:${Port}/getAddress`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    axios.request(config)
      .then((response) => {
        res = [...response.data.address]
        res = res.reverse()
        setAddress([...res])
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => getAddress(), [addNewAdd, openKey])

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
          {address.map((res) => <AddressCard prevAddress={res} toggle={handleToggle} key={res.id} name={res.id} open={openKey === res.id} />)}

        </div>
      </div>
    </div>
  )
}

export default ProfileAddress