import React, { useEffect, useReducer, useState } from 'react'
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

let AddAddress = () => {
  let initialAddress ={
    name: "",
    mobileNum: "",
    pincode: "",
    locality: "",
    Area: "",
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
            case 'updateMobileNum' :
              return {
                ...state,
                mobileNum: action.data
              }
              case 'updateMobileNum' :
            return {
              ...state,
              mobileNum: action.data
            }
            case 'updateMobileNum' :
            return {
              ...state,
              mobileNum: action.data
            }
            case 'updateMobileNum' :
            return {
              ...state,
              mobileNum: action.data
            }
            case 'updateState' :
            return {
              ...state,
              state: action.data
            }
            case 'updateMobileNum' :
            return {
              ...state,
              mobileNum: action.data
            }
            case 'updateMobileNum' :
            return {
              ...state,
              mobileNum: action.data
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
  useEffect(() => {
    console.log(address);
  },[address])

  return (
    <div className="addAddressContainer">
      <span className="addAddressType">{/* addAddressType */} ADD A NEW ADDRESS</span>
      <div className="addAddress">
        <div className="useLocationContainer">
          <button className="useLocationBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="useLocationIcon"><g fill="none" fillRule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#fff" d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"></path></g></svg>
            Use my current location
          </button>
        </div>
        <div className="addAddressMultiInputContainer">
          <div className="addSpecificAddressInputContainer">
            <input name="addName" className="addSpecificAddressInput" type='text' required value={address.name} onChange={(e) => dispatch({type:"updateName", data: e.target.value})} />
            <label htmlFor="addName" className='addSpecificAddressLabel'>Name</label>
          </div>
          <div className="addSpecificAddressInputContainer">
            <input name="addMobile" className="addSpecificAddressInput" type='text' maxLength='10' required value={address.mobileNum} onChange={(e) => dispatch({type:"updateMobileNum", data: e.target.value})} />
            <label htmlFor="addMobile" className='addSpecificAddressLabel'>10-digit mobile number</label>
          </div>
        </div>
        <div className="addAddressMultiInputContainer">
          <div className="addSpecificAddressInputContainer">
            <input name="addPincode" className="addSpecificAddressInput" type='text' maxLength='6' required />
            <label htmlFor="addPincode" className='addSpecificAddressLabel'>Pincode</label>
          </div>
          <div className="addSpecificAddressInputContainer">
            <input name="addLocality" className="addSpecificAddressInput" type='text' required />
            <label htmlFor="addLocality" className='addSpecificAddressLabel'>Locality</label>
          </div>
        </div>
        <div className="addAddressMultiInputContainer" style={{marginBottom: '10px'}}>
          <div className="addAddressAreaInputContainer">
            <textarea name="addArea" className='addAddressAreaInput' cols="10" rows="4" required></textarea>
            <label htmlFor="addArea" className='addSpecificAddressLabel'>Address (Area and Street)</label>
          </div>
        </div>
        <div className="addAddressMultiInputContainer">
          <div className="addSpecificAddressInputContainer">
            <input name="addCity" className="addSpecificAddressInput" type='text' required />
            <label htmlFor="addCity" className='addSpecificAddressLabel'>City/District/Town</label>
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
            <input name="addLandmark" className="addSpecificAddressInput" type='text' />
            <label htmlFor="addLandmark" className='addSpecificAddressLabel'>Landmark (Optional)</label>
          </div>
          <div className="addSpecificAddressInputContainer">
            <input name="addAlternateMobile" className="addSpecificAddressInput" type='text' maxLength='10' />
            <label htmlFor="addAlternateMobile" className='addSpecificAddressLabel'>Alternate Phone (Optional)</label>
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
          <button className="addAddressSubmitBtn">Save</button>
          <button className="addAddressCancelBtn">Cancel</button>
        </div>
      </div>
    </div>
  )
}

function ProfileAddress() {
  return (
    <div className='profileAddressContainer'>
        <span className='profileAddressHead'>Manage Addresses</span>
        <div>
            <div className="profileAddAddressBtnContainer">
                {/* Add Address Window */}
                <AddAddress />
                {/* <div className="profileAddAddressBtn">
                    <img src={Add} className='profileAddAddressIcon' />
                    ADD A NEW ADDRESS
                </div> */}
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