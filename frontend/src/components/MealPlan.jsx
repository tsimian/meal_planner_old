import { FaBan } from 'react-icons/fa'

const MealPlan = ({ meals, setMeals }) => {
    const onDelete = async (id) => {
        setMeals(meals.filter(meal => meal.id !== id))
    }

  return (
    <div className="container mt-3">
        { meals.length > 0 ? <table className="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Meal</th>
                </tr>
            </thead>
            <tbody>
                {meals.map(meal => {
                    return (
                        <tr key={meal.id}>
                            <td>{meal.day}</td>
                            <td>{meal.name}</td>
                            <td>
                                <div className="dlt-btn text-center" onClick={() => {
                                    const id = meal.id;
                                    onDelete(id)
                                    }}>
                                    <FaBan />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table> : <h5 className="text-center mt-4">You have no meals planned</h5>}
    </div>
  )
}

export default MealPlan