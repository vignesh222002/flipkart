import React from 'react'

const CustomRadioButton = ({ label = "", radioState = false, setRadioState }) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type="radio" class={`customRadio ${radioState && "customRadioBefore"}`} name="gender" readonly="" id="Male" checked="" />
            <div onClick={()=>setRadioState(true)} class="_1XFPmK"></div>
        </div>
    )
}

export default CustomRadioButton