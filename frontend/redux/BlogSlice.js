import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blog: {
      name: '',
      bio: '',
    },
  },
  reducers: {
    setBlog: (state, action) => {
      state.blog = action.payload
    },
  },
})

export const { setBlog } = blogSlice.actions
export const selectBlog = (state) => state.blog

export default blogSlice.reducer
