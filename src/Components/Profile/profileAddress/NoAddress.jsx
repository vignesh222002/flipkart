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
                <span class="noAddressHead">No Addresses found in your account!</span>
                <span class="noAddressFoot">Add a delivery address.</span>
                <button className='noAddressAddAddressBtn' onClick={() => handleAddAddress()}>ADD ADDRESSES</button>
            </div>
        </div>
    )
}

export default NoAddress