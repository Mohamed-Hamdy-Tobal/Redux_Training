import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Reducers/CounterSlice'
import toggleReducer from './Reducers/toggleSlice'

const store = configureStore({
    reducer: {
        counterRed: CounterReducer,
        toggleRed: toggleReducer
    },
})

export default store