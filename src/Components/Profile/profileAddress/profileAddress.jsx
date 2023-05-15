import React, { useEffect, useState } from 'react'
import '.././profile.css'
import Add from '../../../Media/Add.svg'
import AddAddress from './AddAddress'
import AddressCard from './AddressCard'
import { IP, Port } from '../../../IP Address/IPAddress'
import axios from 'axios'
import { useSelector } from 'react-redux'
import NoAddress from './NoAddress'


function ProfileAddress() {
  let [addNewAdd, setAddNewAdd] = useState(false)
  const [openKey, setOpenKey] = useState()
  let [address, setAddress] = useState([])
  let [noAdd, setNoAdd] = useState(false)
  let res = []
  const deletePopup = useSelector(state => state.deleteAddressPopup.deletePopup)

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
        console.log(res?.length)
        if (res?.length > 0) {
          setNoAdd(false)
        }
        else{
          setNoAdd(true)
        }
        setAddress([...res])
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => getAddress(), [deletePopup, addNewAdd, openKey])

  return (
    (noAdd) ? (<NoAddress setNoAdd={setNoAdd} setAddNewAdd={setAddNewAdd} />) : (
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
  )
}

export default ProfileAddress