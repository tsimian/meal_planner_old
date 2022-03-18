const mongoose = require('mongoose')

const mealSchema = mongoose.Schema(
    {
        day: {
            type: String,
            require: [true, 'Please add a text value']
        },
        name: {
            type: String,
            require: [true, 'Please add a text value']
        }
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Meal', mealSchema)