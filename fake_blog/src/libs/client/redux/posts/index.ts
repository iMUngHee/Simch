import { createSlice } from '@reduxjs/toolkit';

interface PostsState {
  type: 'recent' | 'tags';
}

const initialState = {
  type: 'recent',
} as PostsState;

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleType(state, action) {
      state.type = action.payload === 'recent' ? 'recent' : 'tags';
    },
  },
});

export const { toggleType } = postSlice.actions;
