import { createSlice } from "@reduxjs/toolkit"

const initialState = {counterValue:1}

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increase') {
//         return {...state, counter: state.counter + action.payload}
//     }
//     if (action.type === 'decrease') {
//         return {...state, counter: state.counter - action.payload}
//     }
//     if (action.type === 'toggleBtn') {
//         return {...state ,toggle: !state.toggle}
//     }
//     return state
// }

// export default counterReducer  

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counterValue += action.payload
        },
        decrement: (state, action) => {
            state.counterValue -= action.payload
        }
    }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer