import { useDispatch } from 'react-redux'
import { deleteMeal } from '../features/meals/mealSlice'
import { FaMinusCircle } from 'react-icons/fa'

const MealItem = ({ meal }) => {

    const dispatch = useDispatch()

  return (
    <div className="meal">
        <div>{meal.day}</div>
        <h2>{meal.name}</h2>
        <button onClick={() => dispatch(deleteMeal(meal._id))} className="close">
            <FaMinusCircle />
        </button>
    </div>
  )
}

export default MealItem