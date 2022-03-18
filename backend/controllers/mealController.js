const asyncHandler = require('express-async-handler')
const Meal = require('../models/mealModel')

// @desc    Get meals
// @route   GET /api/meals
// @access  Private
const  getMeals = asyncHandler(
    async (req, res) => {
        const meals = await Meal.find()

        res.status(200).json(meals)
})

// @desc    Set meal
// @route   POST /api/meals
// @access  Private
const setMeal = asyncHandler(
    async (req, res) => {

        if (!req.body.day || !req.body.name) {
            res.status(400)
            throw new Error('Please add to fields')
        }

        const meal = await Meal.create({
            day: req.body.day,
            name: req.body.name
        })
    
        res.status(200).json(meal)
    }
)

// @desc    Update meal
// @route   PUT /api/meals/:id
// @access  Private
const updateMeal = asyncHandler(
    async (req, res) => {

        const meal = await Meal.findById(req.params.id)

        if (!meal) {
            res.status(400)
            throw new Error('Meal not found')
        }

        const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.status(200).json(updatedMeal)
    }
)

// @desc    Delete meal
// @route   DELETE /api/meals/:id
// @access  Private
const deleteMeal = asyncHandler(
    async (req, res) => {

        const meal = await Meal.findById(req.params.id)

        if (!meal) {
            res.status(400)
            throw new Error('Meal not found')
        }

        await meal.remove()

        res.status(200).json({ id: req.params.id })
    }
)

module.exports = {
    getMeals,
    setMeal,
    updateMeal,
    deleteMeal
}