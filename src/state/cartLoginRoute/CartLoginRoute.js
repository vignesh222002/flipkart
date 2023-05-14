import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    cartLoginRoute: true
}

const cartLoginRouteSlice = createSlice({
    name: 'cartLoginRoute',
    initialState,
    reducers: {
        cartLoginRouteTrue: (state) => {
            state.cartLoginRoute = true
        },
        cartLoginRouteFalse: (state) => {
            state.cartLoginRoute = false
        }
    }
})

export default cartLoginRouteSlice.reducer
export const { cartLoginRouteTrue, cartLoginRouteFalse } = cartLoginRouteSlice.actions