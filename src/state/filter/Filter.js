import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    F_Assured: false,
    discount: null,
    rating: null,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateF_Assured: (state) => {
            state.F_Assured = true
        },
        didUpdateF_Assured: (state) => {
            state.F_Assured = false
        },
        updateDiscount: (state, action) => {
            state.discount = action.payload
        },
        didUpdateDiscount: (state) => {
            state.discount = null
        },
        updateRating: (state, action) => {
            state.rating = action.payload
        },
        didUpdateRating: (state) => {
            state.rating = null
        },
        clearAllFilter: (state) => {
            state.F_Assured = false
            state.discount = null
            state.rating = null
        }
    }
})

export default filterSlice.reducer
export const { updateF_Assured, didUpdateF_Assured, updateDiscount, didUpdateDiscount, updateRating, didUpdateRating, clearAllFilter } = filterSlice.actions