import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userList from './userList';

const initialState = {
  loading: false,
  users: userList,
  error: ''
}




const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    "addUser": (state, action) => {
      state.users = [...state.users, action.payload]
    }
  }

})

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
