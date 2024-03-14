import { createSlice } from "@reduxjs/toolkit";

const getCurrentAuth = () => {
  if(localStorage.length > 0){
    return true
  } else {
    return false
  }
}

export const isAuthSlice = createSlice({
  name: "isAuth",
  initialState: getCurrentAuth,
  reducers: {
    login: (state) =>{
      if(state == false){
        return !state
      }
    },
    logout: (state) => {
      if (state == true) {
       return !state;
      }
    }
  },
});

export const {login, logout} = isAuthSlice.actions

export default isAuthSlice.reducer