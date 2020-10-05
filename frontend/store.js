import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './redux/reducers/AccountSlice'

export default configureStore({
  reducer: {
    account: accountReducer,
  },
})
