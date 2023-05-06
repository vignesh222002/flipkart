// Action

export const updateMobileNumber = (prev, current) => {
    return {
        type: "updateMobileNumber",
        prev: prev,
        current: current
    }
}
export const didUpdate = () => {
    return {
        type: "didUpdate"
    }
}

export const registerEmail = (email, mobile) => {
    return {
        type: "updateEmail",
        email: email,
        mobile: mobile,
    }
}

// State

let initialState = {
    popup: false,
    purpose: "",
    number1: "",
    number2: ""
}

// Reducers

const UpdateUserInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'updateMobileNumber': return {
            ...state,
            popup: true,
            purpose: "updateMobile",
            number1: action.prev,
            number2: `+91${action.current}`,
        }
        case 'updateEmail' : return {
            ...state,
            popup: true,
            purpose: "updateEmail",
            number1: action.email,
            number2: action.mobile            
        }
        case 'didUpdate': return {
            ...state,
            popup: false,
            purpose: "",
            number1: "",
            number2: ""
        }
        default: return state
    }
}

export default UpdateUserInfoReducer