import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import mealReducer from '../features/meals/mealSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    meals: mealReducer
  },
})
