
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { myaxios } from '../../helpers/api'

const initialState = {
  users: [],
  loading:false,
  user:{},
  user_loading:false
}
export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (thunkAPI) => {
      const res = await myaxios.get('users').then(
      (response) => response.data.data
    )
    return res
  })
  export const getUser = createAsyncThunk(
    'users/getUser',
    async (id) => {
      const res = await myaxios.get(`users/${id}`).then(
      (response) => response.data.data
    )
    return res
  })

export const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.users = payload
    },
    [getUsers.rejected]: (state) => {
      state.loading = false
    },
    [getUser.pending]: (state) => {
        state.user_loading = true
    },
    [getUser.fulfilled]: (state, { payload }) => {
        state.user_loading = false
        state.user = payload
    },
    [getUser.rejected]: (state) => {
        state.user_loading = false
      },
  },
})


export default userSlice.reducer

