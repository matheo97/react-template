import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppState } from '../../store'
import { authActions } from '../../store/slices/auth'

function useAppInit() {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const { auth } = useAppState((state) => state.auth)
  useEffect(() => {
    if (auth && auth.access_token && auth.refresh_token) {
      const accessToken = `Bearer ${auth.access_token}`
      dispatch(authActions.getMe(accessToken))
        .then(unwrapResult)
        .then(() => {
          dispatch(
            authActions.setAuth({
              token_type: 'Bearer',
              access_token: auth.access_token,
              refresh_token: auth.refresh_token,
              expires_in: 86400,
              password_reset: false,
            })
          )
          dispatch(authActions.setIsLogged(true))
          setLoading(false)
        })
        .catch(() => {
          dispatch(authActions.refreshToken(auth.refresh_token))
            .then(unwrapResult)
            .then(() => {
              setLoading(false)
            })
            .catch(() => {
              setLoading(false)
              dispatch({ type: 'LOG_OUT' })
            })
        })
    } else {
      setLoading(false)
      dispatch({ type: 'LOG_OUT' })
    }
  }, [])

  return { loading }
}

export default useAppInit
