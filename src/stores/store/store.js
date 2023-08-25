import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "stores/playerSlice"
export default configureStore({
  reducer: {
    player: playerReducer
  },
})