// Action

export const triggerDeleteAddress = (id) => {
    return {
        type: "triggerDeleteAddress",
        id: id
    }
}

export const didtriggerDeleteAddress = () => {
    return {
        type: "didTriggerDeleteAddress"
    }
}

// State

let initialState = {
    deletePopup: false,
    id: null
}

// Reducer

const DeleteAddressPopupReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'triggerDeleteAddress' : return {
            ...state,
            deletePopup: true,
            id: action.id
        }
        case 'didTriggerDeleteAddress' : return {
            ...state,
            deletePopup: false,
            id: null
        }
        default : return state
    }
}

export default DeleteAddressPopupReducer