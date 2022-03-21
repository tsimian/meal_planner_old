import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMeal } from '../features/meals/mealSlice'
import { FaTimes } from 'react-icons/fa'


function MealForm() {

    const [day, setDay] = useState('')
    const [name, setName] = useState('')

    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }

    if (popup) {
        document.body.classList.add('active-popup')
    }   else {
        document.body.classList.remove('.active-popup')
    }

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createMeal({ day, name }))
        setDay('')
        setName('')
        togglePopup()
    }

  return (
    <section className="form">
        <button className="btn btn-block popup-btn" onClick={togglePopup}>Add Meal</button>

        {popup && <div className="popup">
                <div onClick={togglePopup} className="overlay"></div>
                <div className="popup-content">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="day">Day</label>
                            <input 
                                type="text" 
                                name="day"
                                id="day"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
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
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="off"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block" type="submit">Submit</button>
                        </div>
                    </form>              
                    <button className="close-popup" onClick={togglePopup}>
                        <FaTimes />
                    </button>
                </div>
            </div>
        }
    </section>
  )
}

export default MealForm