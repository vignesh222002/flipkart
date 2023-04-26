import React from 'react'
import Add from '../../Media/Add.svg'

function profileAddress() {
  return (
    <>
        <span className='profileAddressHead'>Manage Address</span>
        <div>
            <div className="profileAddAddressBtnContainer">
                <div className="profileAddAddressBtn">
                    <img src={Add} className='profileAddAddressIcon' />
                    ADD A NEW ADDRESS
                </div>
            </div>
        </div>
    </>
  )
}

export default profileAddress