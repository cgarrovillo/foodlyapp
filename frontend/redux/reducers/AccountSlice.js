import {
  LOAD_TOKEN,
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
} from '../actions/types'

const initialState = {
  token: null, //localStorage.getItem('token')
  isAuth: null,
  isLoading: false,
  account: null,
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOKEN:
      return {
        ...state,
        token: localStorage.getItem('token'),
      }
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        account: action.payload,
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload, // user and token
        isAuth: true,
        isLoading: false,
      }
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuth: false,
        isLoading: false,
        account: null,
      }
    default:
      return {
        ...state,
      }
  }
}
