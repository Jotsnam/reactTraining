import {combineReducers} from 'redux'
import users from './Users'
import employee from './Employee'

const rootReducer = combineReducers({
    users : users,
    employee : employee
})

export default rootReducer