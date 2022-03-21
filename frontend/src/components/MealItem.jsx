import { useDispatch } from 'react-redux'
import { deleteMeal } from '../features/meals/mealSlice'
import { FaTimes } from 'react-icons/fa'

const MealItem = ({ meal }) => {

    const dispatch = useDispatch()

  return (
    <div className="meal tile">
      <div className="tile-header">
        <h4>{meal.day}</h4>
        <button 
          onClick={() => dispatch(deleteMeal(meal._id))} 
          className="close">
          <FaTimes />
        </button>
      </div>
      <div className="tile-content">
        <h2>{meal.name}</h2>
      </div>
    </div>
  )
}

export default MealItem