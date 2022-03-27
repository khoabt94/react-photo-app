import { createSlice } from '@reduxjs/toolkit';

const photo = createSlice({
  name: 'photo',
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removeId = action.payload;
      const removeIndex = state.findIndex((el) => el.id === removeId);
      state.splice(removeIndex, 1);
    },
    updatePhoto: (state, action) => {
      const updatePhoto = action.payload;
      const updateIndex = state.findIndex((el) => el.id === updatePhoto.id);
      state[updateIndex] = updatePhoto;
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
