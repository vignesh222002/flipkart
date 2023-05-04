import { useEffect, useReducer, useRef } from "react"

let AddAddress = ({addNewAdd, setAddNewAdd, editAddress, setEditAddress, prevAddress,toggle,open}) => {
    let initialAddress = editAddress ? {...prevAddress} : {
      name: "",
      mobileNum: "",
      pincode: "",
      locality: "",
      area: "",
      city: "",
      state: "",
      landmark: "",
      alternateMobileNum: "",
      type: ""
    }
    const reducer = (state, action) => {
      switch(action.type) {
          case 'updateName' :
              return {
                ...state,
                name: action.data
              }
          case 'updateMobileNum' :
              return {
                ...state,
                mobileNum: action.data
              }
          case 'updatePincode' :
              return {
                ...state,
                pincode: action.data
              }
          case 'updateLocality' :
              return {
                ...state,
                locality: action.data
              }
          case 'updateArea' :
              return {
                ...state,
                area: action.data
              }
          case 'updateCity' :
              return {
                ...state,
                city: action.data
              }
          case 'updateState' :
              return {
                ...state,
                state: action.data
              }
          case 'updateLandmark' :
              return {
                ...state,
                landmark: action.data
              }
          case 'updateAlterMobileNum' :
              return {
                ...state,
                alternateMobileNum: action.data
              }
          case 'updateTypeHome' :
              return {
                ...state,
                type: "home"
              }
          case 'updateTypeWork' :
              return {
                ...state,
                type: "work"
              }
          default :
              return state
        }
    }
    let [address, dispatch] = useReducer(reducer, initialAddress)
  
    // useEffect(() => {
    //   console.log(address);
    // },[address])
    useEffect(() => {
      if (editAddress) {
        if(address.name) {
          nameRef.current.classList.add('panLabelActive')
        }
        if(address.mobileNum) {
          mobileRef.current.classList.add('panLabelActive')
        }
        if(address.pincode) {
          pincodeRef.current.classList.add('panLabelActive')
        }
        if(address.locality) {
          localityRef.current.classList.add('panLabelActive')
        }
        if(address.area) {
          areaRef.current.classList.add('panLabelActive')
        }
        if(address.city) {
          cityRef.current.classList.add('panLabelActive')
        }
        if(address.landmark) {
          landmarkRef.current.classList.add('panLabelActive')
        }
        if(address.alternateMobileNum) {
          alterMobileRef.current.classList.add('panLabelActive')
        }
      }
    })
  
    const nameRef = useRef()
    const mobileRef = useRef()
    const pincodeRef = useRef()
    const localityRef = useRef()
    const areaRef = useRef()
    const cityRef = useRef()
    const landmarkRef = useRef()
    const alterMobileRef = useRef()
  
    function handleNameFocus(e) {
      e.target.classList.add('panInputActive')
      nameRef.current.classList.add('panLabelActive')
    }
    function handleNameBlur(e) {
      e.target.classList.remove('panInputActive')
      if (!address.name) {
        nameRef.current.classList.remove('panLabelActive')
      }
    }
    function handleMobileFocus(e) {
      e.target.classList.add('panInputActive')
      mobileRef.current.classList.add('panLabelActive')
    }
    function handleMobileBlur(e) {
      e.target.classList.remove('panInputActive')
      if (!address.mobileNum) {
        mobileRef.current.classList.remove('panLabelActive')
      }
    }
    function handlePincodeFocus(e) {
      e.target.classList.add('panInputActive')
      pincodeRef.current.classList.add('panLabelActive')
    }
    function handlePincodeBlur(e) {
      e.target.classList.remove('panInputActive')
      if (!address.pincode) {
        pincodeRef.current.classList.remove('panLabelActive')
      }
    }
    function handleLocalityFocus(e) {
      e.target.classList.add('panInputActive')
      localityRef.current.classList.add('panLabelActive')
    }
    function handleLocalityBlur(e) {
      e.target.classList.remove('panInputActive')
      if (!address.locality) {
        localityRef.current.classList.remove('panLabelActive')
      }
    }
    function handleAreaFocus(e) {
      e.target.classList.add('panInputActive')
      areaRef.current.classList.add('panLabelActive')
    }
    function handleAreaBlur(e) {
      e.target.classList.remove('panInputActive')
      if (!address.area) {
        areaRef.current.classList.remove('panLabelActive')
      }
    }
    function handleCityFocus(e) {
      e.target.classList.add('panInputActive')
      cityRef.current.classList.add('panLabelActive')
    }
    function handleCityBlur(e) {
      e.target.classList.remove('panInputActive')
      if (!address.city) {
        cityRef.current.classList.remove('panLabelActive')
      }
    }
    function handleLandmarkFocus(e) {
      e.target.classList.add('panInputActive')
      landmarkRef.current.classList.add('panLabelActive')
    }
    function handleLandmarkBlur(e) {
      e.target.classList.remove('panInputActive')
      if (!address.landmark) {
        landmarkRef.current.classList.remove('panLabelActive')
      }
    }
    function handleAlterMobileFocus(e) {
      e.target.classList.add('panInputActive')
      alterMobileRef.current.classList.add('panLabelActive')
    }
    function handleAlterMobileBlur(e) {
      e.target.classList.remove('panInputActive')
      if (!address.alternateMobileNum) {
        alterMobileRef.current.classList.remove('panLabelActive')
      }
    }
    function handleSave() {
      // Add New Address
      if(addNewAdd) {
        setAddNewAdd(false)
      }
      // Update Address
      if(open) {
        toggle(null)
      }
    }
    function handleCancel() {
        console.log("clicked")
      // Add New Address Cancel
      if(addNewAdd) {
        setAddNewAdd(false)
      }
      // Update Address Cancel
      if(open) {
        toggle(null)
      }
    }
  
    return (
      <div className="addAddressContainer">
        <span className="addAddressType">
          {addNewAdd && "ADD A NEW ADDRESS"}
          {editAddress && "EDIT ADDRESS"}
        </span>
        <div className="addAddress">
          <div className="useLocationContainer">
            <button className="useLocationBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="useLocationIcon"><g fill="none" fillRule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#fff" d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"></path></g></svg>
              Use my current location
            </button>
          </div>
          <div className="addAddressMultiInputContainer">
            <div className="addSpecificAddressInputContainer">
              <input name="addName" className="addSpecificAddressInput" type='text' required value={address.name} onChange={(e) => dispatch({type:"updateName", data: e.target.value})} onFocus={(e) => handleNameFocus(e)} onBlur={(e) => handleNameBlur(e)} />
              <label ref={nameRef} htmlFor="addName" className='addSpecificAddressLabel'>Name</label>
            </div>
            <div className="addSpecificAddressInputContainer">
              <input name="addMobile" className="addSpecificAddressInput" type='text' maxLength='10' required value={address.mobileNum} onChange={(e) => dispatch({type:"updateMobileNum", data: e.target.value})} onFocus={(e) => handleMobileFocus(e)} onBlur={(e) => handleMobileBlur(e)} />
              <label ref={mobileRef} htmlFor="addMobile" className='addSpecificAddressLabel'>10-digit mobile number</label>
            </div>
          </div>
          <div className="addAddressMultiInputContainer">
            <div className="addSpecificAddressInputContainer">
              <input name="addPincode" className="addSpecificAddressInput" type='text' maxLength='6' required value={address.pincode} onChange={(e) => dispatch({type:"updatePincode", data: e.target.value})} onFocus={(e) => handlePincodeFocus(e)} onBlur={(e) => handlePincodeBlur(e)} />
              <label ref={pincodeRef} htmlFor="addPincode" className='addSpecificAddressLabel'>Pincode</label>
            </div>
            <div className="addSpecificAddressInputContainer">
              <input name="addLocality" className="addSpecificAddressInput" type='text' required value={address.locality} onChange={(e) => dispatch({type: "updateLocality", data: e.target.value})} onFocus={(e) => handleLocalityFocus(e)} onBlur={(e) => handleLocalityBlur(e)} />
              <label ref={localityRef} htmlFor="addLocality" className='addSpecificAddressLabel'>Locality</label>
            </div>
          </div>
          <div className="addAddressMultiInputContainer" style={{marginBottom: '10px'}}>
            <div className="addAddressAreaInputContainer">
              <textarea name="addArea" className='addAddressAreaInput' cols="10" rows="4" required value={address.area} onChange={(e) => dispatch({type: "updateArea", data: e.target.value})} onFocus={(e) => handleAreaFocus(e)} onBlur={(e) => handleAreaBlur(e)} ></textarea>
              <label ref={areaRef} htmlFor="addArea" className='addSpecificAddressLabel'>Address (Area and Street)</label>
            </div>
          </div>
          <div className="addAddressMultiInputContainer">
            <div className="addSpecificAddressInputContainer">
              <input name="addCity" className="addSpecificAddressInput" type='text' required value={address.city} onChange={(e) => dispatch({type: "updateCity", data: e.target.value})} onFocus={(e) => handleCityFocus(e)} onBlur={(e) => handleCityBlur(e)} />
              <label ref={cityRef} htmlFor="addCity" className='addSpecificAddressLabel'>City/District/Town</label>
            </div>
            <div className="addAddressStateContainer">
              <div className="addAddressStateLabel">State</div>
              <div className="addAddressSelectStateContainer">
                <select value={address.state} onChange={(e) => dispatch({type:"updateState", data: e.target.value})} className="addAddressSelectStateInput" name="updateState" required><option selected disabled value="">--Select State--</option><option value="Andaman &amp; Nicobar Islands">Andaman &amp; Nicobar Islands</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chandigarh">Chandigarh</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu</option><option value="Delhi">Delhi</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Ladakh">Ladakh</option><option value="Lakshadweep">Lakshadweep</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Puducherry">Puducherry</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttarakhand">Uttarakhand</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="West Bengal">West Bengal</option></select>
              </div>
            </div>
          </div>
          <div className="addAddressMultiInputContainer">
            <div className="addSpecificAddressInputContainer">
              <input name="addLandmark" className="addSpecificAddressInput" type='text' value={address.landmark} onChange={(e) => dispatch({type: "updateLandmark", data: e.target.value})} onFocus={(e) => handleLandmarkFocus(e)} onBlur={(e) => handleLandmarkBlur(e)} />
              <label ref={landmarkRef} htmlFor="addLandmark" className='addSpecificAddressLabel'>Landmark (Optional)</label>
            </div>
            <div className="addSpecificAddressInputContainer">
              <input name="addAlternateMobile" className="addSpecificAddressInput" type='text' maxLength='10' value={address.alternateMobileNum} onChange={(e) => dispatch({type: "updateAlterMobileNum", data: e.target.value})} onFocus={(e) => handleAlterMobileFocus(e)} onBlur={(e) => handleAlterMobileBlur(e)} />
              <label ref={alterMobileRef} htmlFor="addAlternateMobile" className='addSpecificAddressLabel'>Alternate Phone (Optional)</label>
            </div>
          </div>
          <div className="addAddressTypeContainer">
            <p className="addAddressTypeHead">Address Type</p>
            <div className="addressTypeContainer">
              <label htmlFor="home" className='profilePersonalInfoSelectGenderContainerEdit'>
                <input type="radio" className='profilePersonalInfoMaleInput' checked={address.type == "home" ? true : false} onClick={() => address.type != "home" && dispatch({type: "updateTypeHome"})} id='home' name='addressType'/>
                <div className={`profilePersonalInfoGenderCheck ${address.type == "home" && "radioActive"}`}></div>
                <div className="profilePersonalInfoGenderLabel">Home</div>
              </label>
              <label htmlFor="work" className='profilePersonalInfoSelectGenderContainerEdit'>
                <input type="radio" className='profilePersonalInfoMaleInput' checked={address.type == "work" ? true : false} onClick={() => address.type != "work" && dispatch({type: "updateTypeWork"})} id='work' name='addressType'/>
                <div className={`profilePersonalInfoGenderCheck ${address.type == "work" && "radioActive"}`}></div>
                <div className="profilePersonalInfoGenderLabel">Work</div>
              </label>
            </div>
          </div>
          <div className="addAddressSubmitContainer">
            <button className="addAddressSubmitBtn" onClick={handleSave}>Save</button>
            <button className="addAddressCancelBtn" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }

  export default AddAddress