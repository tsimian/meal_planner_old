import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mealService from './mealService'

const initialState = {
    meals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new meal
export const createMeal = createAsyncThunk('meals/create', async (mealData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await mealService.createMeal(mealData, token)

    }   catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get user meals
export const getMeals = createAsyncThunk('meals/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await mealService.getMeals(token)

    }   catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete user meal
export const deleteMeal = createAsyncThunk('meals/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await mealService.deleteMeal(id, token)

    }   catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createMeal.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createMeal.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.meals.push(action.payload)
        })
        .addCase(createMeal.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getMeals.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getMeals.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.meals = action.payload
        })
        .addCase(getMeals.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteMeal.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteMeal.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.meals = state.meals.filter(
                (meal) => meal._id !== action.payload.id
            )
        })
        .addCase(deleteMeal.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })   
    }
})

export const { reset } = mealSlice.actions
export default mealSlice.reducer