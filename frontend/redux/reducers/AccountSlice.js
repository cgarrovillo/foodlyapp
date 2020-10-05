import { createSlice } from '@reduxjs/toolkit'

//MAJOR TODO: change localStorage to something more secure for JWT ----------------------
export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: localStorage.getItem('token'),
    isAuth: null,
    isLoading: false,
    account: null,
  },
  reducers: {
    loadToken: (state) => {
      localStorage ? (state.token = localStorage.getItem('token')) : null
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    loginSuccess: (state, action) => {
      successFn(state, action)
    },
    registerSuccess: (state, action) => {
      successFn(state, action)
    },
    logoutSuccess: (state) => {
      failFn(state)
    },
    authError: (state) => {
      failFn(state)
    },
    loginFail: (state) => {
      failFn(state)
    },
    registerFail: (state) => {
      failFn(state)
    },
  },
})

const successFn = (state, action) => {
  if (localStorage) {
    localStorage.setItem('token')
  }
  state = {
    ...state,
    ...action.payload,
  }
  state.isAuth = true
  state.isLoading = false
}

const failFn = (state) => {
  if (localStorage) {
    localStorage.removeItem('token')
  }
  state.token = null
  state.isAuth = false
  state.isLoading = false
  state.account = null
}

export const selectAccount = (state) => state.account

export const {
  loadToken,
  setLoading,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  authError,
  loginFail,
  registerFail,
} = accountSlice.actions

export default accountSlice.reducer
