import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [
    {
      location: { id: 215854, name: 'Tel Aviv' },
      currentWeather: {
        temperature: 15.5,
        weatherText: 'Partly cloudy',
      },
    },
  ],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.unshift(action.payload);
      state.favorites = Array.reduce((acc, item) => {
        if (!acc.includes(item.location.id)) acc.push(item);

        return acc;
      }, state.favorites);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.location.id !== action.payload.location.id,
      );
    },
  },
});

export const {
  changeFavorites,
  addFavorite,
  deleteFavorite,
} = favoritesSlice.actions;

export const selectFavorites = (state) => {
  return state.favorites;
};

export default favoritesSlice.reducer;
