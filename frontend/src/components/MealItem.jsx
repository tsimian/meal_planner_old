import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteMeal } from '../features/meals/mealSlice'
import { FaEdit, FaTimes } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const MealItem = ({ meal, onEdit  }) => {

    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
      setPopup(!popup)
    }

    if (popup) {
      document.body.classList.add('active-popup')
    }   else {
          document.body.classList.remove('active-popup')
    }

    const dispatch = useDispatch()

  return (
    <>
      <div className="meal tile">
        <div className="tile-header">
          <h4>{meal.day}</h4>
          <div className="btn-wrapper">
            <button 
              onClick={() => {onEdit(meal)}}
              className="edit">
                <FaEdit />
              </button>
            <button 
              onClick={() => dispatch(deleteMeal(meal._id))} 
              className="close">
              <FaTimes />
          </button>
          </div>
        </div>
        <div className="tile-content" onClick={togglePopup}>
          <h2>{meal.name}</h2>
        </div>
      </div>
      {popup && 
        <div className="popup recipe">
            <div onClick={togglePopup} className="overlay"></div>
              <div className="popup-content recipe">
                <h2>{meal.name}</h2>
                <p><strong>No. of Servings: </strong>{meal.servings ? meal.servings : <em>NA</em>}</p>
                <p><strong>Prep Time: </strong> {meal.prepTime ? `${meal.prepTime} minutes` : <em>NA</em>}</p>
                <p><strong>Total Time: </strong> {meal.totalTime ? `${meal.totalTime} minutes` : <em>NA</em>}</p>
                <h3>Ingredients:</h3>
                {meal.ingredients ?
                  <ul>
                    {meal.ingredients.split(/\r?\n/).map(item => (
                      <li key={uuidv4()}>{item}</li>
                    ))}
                  </ul>
                : <em>NA</em>
                }
                <h3>Directions:</h3>
                {meal.directions ?
                  <ol>
                    {meal.directions.split(/\r?\n/).map(item => (
                      <li key={uuidv4()}>{item}</li>
                    ))}
                  </ol>
                : <em>NA</em>
                }
                <button className="close-popup" onClick={togglePopup}>
                    <FaTimes />
                </button>
            </div>
        </div>
      }
    </>
  )
}

export default MealItem