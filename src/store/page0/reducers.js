import page0State from './page0State'
import actionTypes from './actionTypes'

export default function reducer(state = page0State, action) {
    switch(action.type) {
        case actionTypes.ADD:
            state.count += action.data
            return {...state}
        case actionTypes.SUB:
            break;
        case actionTypes.UPDATE_BLOGS:
            state.blogs = action.payload
            return {...state}
        default:
            return page0State
    }
}