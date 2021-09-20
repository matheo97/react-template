import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { APILoadingStatus } from '../../../models/apiLoadingStatus.model'
import { Auth } from '../../../models/auth.model'

export type AuthState = {
  auth: Auth | null
  authStatus: APILoadingStatus
  authError: Record<string, unknown> | null
  userStatus: APILoadingStatus
  isLogged: boolean
}

const initialState: AuthState = {
  auth: null,
  authStatus: APILoadingStatus.Idle,
  authError: null,
  userStatus: APILoadingStatus.Idle,
  isLogged: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload
    },
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload
    },
  },
})

export const authActions = { ...authSlice.actions }

export default authSlice.reducer
