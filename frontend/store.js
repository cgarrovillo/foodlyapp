import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './redux/BlogSlice'

export default configureStore({
  reducer: {
    blog: blogReducer,
  },
})
