import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    trigger: false,
    id: null,
    data: null,
}

const sectorSlice = createSlice({
    name: 'sector',
    initialState,
    reducers: {
        triggerSector: (state, action) => {
            state.trigger = true
            state.id = action.payload
        },
        updateData: (state, action) => {
            state.data = action.payload
        },
        didSector: (state) => {
            state.trigger = false
        },
    }
})

export default sectorSlice.reducer
export const { triggerSector, updateData, didSector } = sectorSlice.actions