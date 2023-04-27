import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function ProfilePanCard() {
    const inputPanNumRef = useRef()
    const labelPanNumRef = useRef()
    const inputPanNameRef = useRef()
    const labelPanNameRef = useRef()
    let [panInfo, setPanInfo] = useState({
        panNumber: null,
        panName: null
    })

    function handlePanNumFocus() {
        inputPanNumRef.current.classList.add('panInputActive')
        labelPanNumRef.current.classList.add('panLabelActive')
    }
    function handlePanNameFocus() {
        inputPanNameRef.current.classList.add('panInputActive')
        labelPanNameRef.current.classList.add('panLabelActive')
    }
    function handlePanNumBlur() {
        inputPanNumRef.current.classList.remove('panInputActive')
        if (!panInfo.panNumber) {
            labelPanNumRef.current.classList.remove('panLabelActive')
        }
    }
    function handlePanNameBlur() {
        inputPanNameRef.current.classList.remove('panInputActive')
        if (!panInfo.panName) {
            labelPanNameRef.current.classList.remove('panLabelActive')
        }
    }

    function updatePanNum(e) {
        setPanInfo({
            ...panInfo,
            panNumber: e.target.value
        })
        // console.log(panInfo)
    }
    function updatePanName(e) {
        setPanInfo({
            ...panInfo,
            panName: e.target.value
        })
        // console.log(panInfo)
    }
    
  return (
    <div className='profilePanCardContainer'>
        <div className="profilePanCardHead">PAN Card Information</div>
        <div className="profilePanCardContent">
            <div>
                <div className="profilePanCardInputContainer">
                    <input ref={inputPanNumRef} className='profileInputPanNum' type="text" name="PanCardNumber" required autoComplete='off' onFocus={handlePanNumFocus} onBlur={handlePanNumBlur} onChange={(e) => updatePanNum(e)} />
                    <label ref={labelPanNumRef} className='profileLabelPanNum' htmlFor="PanCardNumber">PAN Card Number</label>
                </div>
                <div className="profilePanCardInputContainer">
                    <input ref={inputPanNameRef} className='profileInputPanName' type="text" name="PanCardName" required autoComplete='off' onFocus={handlePanNameFocus} onBlur={handlePanNameBlur} onChange={(e) => updatePanName(e)} />
                    <label ref={labelPanNameRef} className='profileLabelPanName' htmlFor="PanCardName">Full Name</label>
                </div>
                <div className="profileUploadPanCard">
                    <label className='profileUploadPanCardLabel' htmlFor="profileUploadPanCard">Upload PAN Card (Only JPEG file is allowed)</label>
                    <input className='profileUploadPanCardInput' type="file" name='profileUploadPanCard' />
                </div>
                <div className="profilePanCardCheckBoxContainer">
                    <input className='profilePanCheckBoxInput' type="checkbox" name='panCheckBox'/>
                    <div className='profilePanCheckBoxLabel' htmlFor="panCheckBox">I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.flipkart.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.</div>
                </div>
                <button className='profilePanCardUploadBtn'>UPLOAD</button>
            </div>
            <div className="profilePanCardFooter">
                <Link className="profilePanCardFooterLink">Read Terms & Conditions of PAN Card Information</Link>
            </div>
        </div>
    </div>
  )
}

export default ProfilePanCard