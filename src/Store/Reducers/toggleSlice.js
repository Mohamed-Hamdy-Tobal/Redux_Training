import { createSlice } from "@reduxjs/toolkit"

const initialState = {toggle:true}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleFn : (state) => {
            state.toggle= !state.toggle
        }
    }
})

export const toggleActions = toggleSlice.actions

export default toggleSlice.reducer