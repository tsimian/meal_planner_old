const mongoose = require('mongoose')

const mealSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        day: {
            type: String,
            require: [true, 'Please add a text value']
        },
        name: {
            type: String,
            require: [true, 'Please add a text value']
        },
        dishType : {
            type: String
        },
        servings: {
            type: String
        },
        prepTime: {
            type: String
        },
        totalTime: {
            type: String
        },
        ingredients: {
            type: String
        },
        directions: {
            type: String
        }
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Meal', mealSchema)