import { combineReducers } from 'redux'

import accountReducer from './AccountSlice'
import errorReducer from './ErrorSlice'

export default combineReducers({
  account: accountReducer,
  error: errorReducer,
})
