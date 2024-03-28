import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  users:[],
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart(state) {
      state.loading = true
    },
    signInSuccess(state) {
      state.users = action.payload
      state.loading = false
    },
    signInFailure(state) {
      state.error = action.payload
      state.loading = false
    } 
  }
})

export const {signInSuccess, signInFailure, signInStart} = userSlice.actions;
export default user.reducer