const express = require('express')
const router = express.Router()
const {
    getMeals,
    setMeal,
    updateMeal,
    deleteMeal
} = require('../controllers/mealController')

router.route('/').get(getMeals).post(setMeal)
router.route('/:id').delete(deleteMeal).put(updateMeal)

module.exports = router