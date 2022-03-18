import { useState } from 'react'

const MealForm = ({ setMeals }) => {
    const [day, setDay] = useState('')
    const [name, setName] = useState('')

    const onSubmit = e => {
        e.preventDefault()

        setMeals(meals => [...meals, {
            id: Math.floor(Math.random() * 100),
            day: day,
            name: name
        }])

        console.log(day, name)
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
                    required 
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
                <button className="btn btn-dark btn-block" type="submit">Add Food</button> 
            </div>
        </form>
    </section>
  )
}

export default MealForm