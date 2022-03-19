import { useDispatch } from 'react-redux'
import { deleteMeal } from '../features/meals/mealSlice'

const MealItem = ({ meal }) => {

    const dispatch = useDispatch()
    
  return (
    <div className="meal">
        <div>{meal.day}</div>
        <h2>{meal.name}</h2>
        <button onClick={() => dispatch(deleteMeal(meal._id))} className="close">x</button>
    </div>
  )
}

export default MealItem