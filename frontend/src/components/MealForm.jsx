import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMeal } from '../features/meals/mealSlice'


function MealForm() {

    const [day, setDay] = useState('')
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createMeal({ day, name }))
        setDay('')
        setName('')
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="day">Day</label>
                <input 
                    type="text" 
                    name="day"
                    id="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Meal</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Add Meal</button>
            </div>
        </form>
    </section>
  )
}

export default MealForm