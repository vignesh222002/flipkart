// Action

export const userLogin = () => {
    return {
        type: 'login'
    }
}

export const userLogout = () => {
    return {
        type: 'logout'
    }
}

// State

let initialState = {
    login: false
}

// Reducers

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'login': return {
            ...state,
            login: true
        }
        case 'logout': return {
            ...state,
            login: false
        }
        default: return state
    }
}

export default loginReducer
