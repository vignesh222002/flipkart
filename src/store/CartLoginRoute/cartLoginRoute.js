// Action

export const cartLoginRouteTrue = () => {
    return {
        type: 'true'
    }
}

export const cartLoginRouteFalse = () => {
    return {
        type: 'false'
    }
}

// State

let initialState = {
    cartLoginRoute: true
}

// Reducers

const cartLoginRouteReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'true': return {
            ...state,
            cartLoginRoute: true
        }
        case 'false': return {
            ...state,
            cartLoginRoute: false
        }
        default: return state
    }
}

export default cartLoginRouteReducer
