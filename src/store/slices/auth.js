import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  is_auth: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    update_is_auth: (state) => {
      state.is_auth = true
    }
  },
})

export const { update_is_auth } = authSlice.actions

export default authSlice.reducer