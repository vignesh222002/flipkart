import React from 'react'
import '.././profile.css'
import NoAddressImg from "../../../Media/NoAddress.png"

function NoAddress({ setNoAdd, setAddNewAdd }) {

    function handleAddAddress() {
        setNoAdd(false)
        setAddNewAdd(true)
    }
    return (
        <div className='noAddressContainer'>
            <div className="noAddressContent">
                <img src={NoAddressImg} />
                <span className="noAddressHead">No Addresses found in your account!</span>
                <span className="noAddressFoot">Add a delivery address.</span>
                <button className='noAddressAddAddressBtn' onClick={() => handleAddAddress()}>ADD ADDRESSES</button>
            </div>
        </div>
    )
}

export default NoAddress