import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateMeal, createMeal } from '../features/meals/mealSlice'
import { FaTimes, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'


function MealForm({ meals, mealData, setMealData, currId, showForm, toggleForm, addField, toggleField }) {

    const dispatch = useDispatch()

    const { day, name, dishType, servings, prepTime, totalTime, ingredients, directions } = mealData

    const onChange = (e) => {
        setMealData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (meals.some(meal => meal._id === currId)) {
            let curr = {
                id: currId,
                day: mealData.day,
                name: mealData.name,
                dishType: mealData.dishType,
                servings: mealData.servings,
                prepTime: mealData.prepTime,
                totalTime: mealData.totalTime,
                ingredients: mealData.ingredients,
                directions: mealData.directions
            }

            dispatch(updateMeal(curr))
        }   else {
            dispatch(createMeal(mealData))
        }

        toggleForm()
    }

  return (
    <section className="form">
        <button className="btn btn-block popup-btn" onClick={toggleForm}>Add Meal</button>

        {showForm && <div className="popup">
                <div onClick={toggleForm} className="overlay"></div>
                <div className="popup-content">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="day">Day</label>
                            <input 
                                type="text" 
                                name="day"
                                id="day"
                                value={day}
                                onChange={onChange}
                                autoComplete="off" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Meal</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                value={name} 
                                onChange={onChange}
                                autoComplete="off"
                                required 
                            />
                        </div>
                        <div className="add-file-wrapper">
                            <p>Add Recipe (optional)</p>
                            <div className="add-btn" onClick={toggleField}>
                                {addField ? 
                                    <FaChevronCircleUp className="arrow" size={'24px'} />
                                    :
                                    <FaChevronCircleDown className="arrow" size={'24px'} />
                                }
                            </div>
                        </div>
                        {addField && 
                            <div className="extra-fields">
                                <div className="extra-field form-group">
                                    <label htmlFor="dishType">
                                        Dish Type   
                                    </label>    
                                    <select name="dishType" id="dish-type" onChange={onChange} value={dishType}>
                                        <option value="" disabled hidden>Please Select</option>
                                        <option value="Main Dish">Main Dish</option>
                                        <option value="Side Dish">Side Dish</option>
                                        <option value="Appetizer">Appetizer</option>
                                        <option value="Soup">Soup</option>
                                        <option value="Salad">Salad</option>
                                        <option value="Dessert">Dessert</option>
                                        <option value="Drink">Drink</option>
                                    </select>
                                </div>
                                <div className="extra-field form-group">
                                    <label htmlFor="servings">
                                        No. of Servings    
                                    </label>    
                                    <input 
                                        type="text" 
                                        name="servings" 
                                        id="servings" 
                                        value={servings} 
                                        onChange={onChange}
                                        autoComplete="off"
                                        placeholder="(ex: 6)"
                                    />
                                </div>
                                <div className="extra-field form-group">
                                    <label htmlFor="prepTime">
                                        Prep time (in minutes)  
                                    </label>     
                                    <input 
                                        type="text" 
                                        name="prepTime" 
                                        id="prep-time" 
                                        value={prepTime} 
                                        onChange={onChange}
                                        autoComplete="off"
                                        placeholder="(ex: 30)"
                                    />
                                </div>
                                <div className="extra-field form-group">
                                    <label htmlFor="totalTime">
                                        Total time (in minutes)   
                                    </label>     
                                    <input 
                                        type="text" 
                                        name="totalTime" 
                                        id="total-time" 
                                        value={totalTime} 
                                        onChange={onChange}
                                        autoComplete="off"
                                        placeholder="(ex: 60)"
                                    />
                                </div>
                                <div className="extra-field form-group">
                                    <label htmlFor="ingredients">
                                        Ingredients    
                                    </label>     
                                    <textarea
                                        name="ingredients" 
                                        id="ingredients" 
                                        value={ingredients} 
                                        onChange={onChange}
                                        rows="4" 
                                        cols="50"
                                        placeholder="Type here..."
                                        autoComplete="off"
                                    >
                                    </textarea>
                                </div>
                                <div className="extra-field form-group">
                                    <label htmlFor="directions">
                                        Directions    
                                    </label>     
                                    <textarea
                                        name="directions" 
                                        id="directions" 
                                        value={directions} 
                                        onChange={onChange}
                                        rows="4" 
                                        cols="50"
                                        placeholder="Type here..."
                                        autoComplete="off"
                                    >
                                    </textarea>
                                </div>
                            </div>
                        }
                        <div className="form-group">
                            <button className="btn btn-block" type="submit">Submit</button>
                        </div>
                    </form>              
                    <button className="close-popup" onClick={toggleForm}>
                        <FaTimes />
                    </button>
                </div>
            </div>
        }
    </section>
  )
}

export default MealForm