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