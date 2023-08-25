import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: false,
  controls: null, // Değiştirildi: Başlangıçta kontrolleri null olarak ayarlayın
  playing: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      // Değiştirildi: Kontrolleri doğrudan kaydetmeyin, sadece gereken bilgileri kaydedin
      state.controls = {
        play: action.payload.play,
        pause: action.payload.pause,
        // Diğer kontrolleri buraya ekleyin
      };
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
  },
});

export const { setCurrent, setControls, setPlaying } = playerSlice.actions;

export default playerSlice.reducer;
