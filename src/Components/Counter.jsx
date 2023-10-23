// import { useEffect } from "react"
import { useCallback, useEffect } from "react"
import { counterActions } from "../Store/Reducers/CounterSlice"
import { toggleActions } from "../Store/Reducers/toggleSlice"
import store from "../Store/Store"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {

    let dispatch = useDispatch()

    // State To App
    const globalState = useSelector((state) => state)
    const {increment, decrement} = counterActions
    const {toggleFn} = toggleActions

    // Handle State That Should Be Grater Than 1
    const handleCounterValue = (value) => {
        if (value < 1) {
            return 'must be greater than 1'
        } else {
            return value
        }
    }

    console.log(`Store => `, store)

    const CounterHandler = useCallback((type, val) => {
        if (type === 'increment') {
            dispatch(increment(val))
        } else {
            dispatch(decrement(val))
        }
    } , [dispatch, increment, decrement]) 

    const toggleHandler = () => {
        if (globalState.toggleRed.toggle) {
            console.log("toggle true")
            dispatch(toggleFn())
        } else {
            console.log("toggle False")
            dispatch(toggleFn(1))
        }
    }
    
    useEffect(() => {
        // dispatch(increment(5 - theCounterValue))
        CounterHandler('increment', 5)
    },[CounterHandler])


    // Actions
    // const increase = () => {
    //     const action = {type:'increase', payload:1}
    //     dispatch(action)
    // }
    
    // const decrease = () => {
    //     const action = {type:'decrease', payload:1}
    //     dispatch(action)
    // }
    // const toggleFn = () => {
    //     const action = {type:'toggleBtn'}
    //     dispatch(action)
    // }

    // useEffect(() => {
    //     console.log("JLDf")
    // }, [])

    return (
        <div className="main-container">
            <h1>Hello Redux Basic</h1>
            <div className="container">
                <div className="content">
                    {globalState.toggleRed.toggle && <>
                    <div className="main-counter">
                        Counter : <span id="counter">{handleCounterValue(globalState.counterRed.counterValue)}</span>
                    </div>
                    <div className="buttons">
                        <button className="increase" onClick={() => {CounterHandler('increment', 1)}}>Increase</button>
                        <button className="decrease" onClick={() => {CounterHandler('decrement', 2)}}>Decrease</button>
                    </div>
                    </>}
                </div>
                <button className="SHBtn" onClick={() => {toggleHandler()}}>{globalState.toggleRed.toggle ? 'LogOut':'Login'}</button>
            </div>
        </div>
    )
}

export default Counter
