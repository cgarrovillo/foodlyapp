import axios from 'axios'

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types'

import { returnErrors } from './errorActions'

//Check token & load Account
export const loadAccount = () => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING })

  axios(tokenConfig())
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data.msg, err.response.status))
      dispatch({
        type: AUTH_ERROR,
      })
    })
}

export const tokenConfig = () => {
  //Get token from localstorage
  const token = localStorage.getItem('token')

  //Headers
  const config = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    url: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts`,
  }

  //If token, add to headers
  if (token) {
    config.headers['X-Auth-Token'] = token
  }

  return config
}
