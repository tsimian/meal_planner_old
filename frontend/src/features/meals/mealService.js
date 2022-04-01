import axios from 'axios'

const API_URL = '/api/meals/'

// Create new meal
const createMeal = async (mealData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, mealData, config)

    return response.data
}

// Get user meals
const getMeals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Update user meal
const updateMeal = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + data.id, data, config)

    return response.data
}

// Delete user meal
const deleteMeal = async (mealId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + mealId, config)

    return response.data
}

const mealService = {
    createMeal,
    getMeals,
    updateMeal,
    deleteMeal
}

export default mealService