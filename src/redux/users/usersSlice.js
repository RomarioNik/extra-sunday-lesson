import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser(state, { payload }) {
      state.users.push(payload);
    },
    delUser(state, { payload }) {
      //   const userIdx = state.users.findIndex(el => el === el.id);
      //   state.users.slice(userIdx, 1);
      state.users = state.users.filter(el => el.id !== payload);
    },
  },
});

export const { addUser, delUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
