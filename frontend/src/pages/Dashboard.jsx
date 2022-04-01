import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import MealForm from '../components/MealForm'
import MealItem from '../components/MealItem'
import Spinner from '../components/Spinner'
import { getMeals, reset } from '../features/meals/mealSlice'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [mealData, setMealData] = useState({
    day: '',
    name: '',
    dishType: '',
    servings: '',
    prepTime: '',
    totalTime: '',
    ingredients: '',
    directions: ''
  })

  const [showForm, setShowForm] = useState(false)
  const [addField, SetAddField] = useState(false)
  const [currId, setCurrId] = useState(0)

    const toggleForm = () => {
        setMealData({
          day: '',
          name: '',
          dishType: '',
          servings: '',
          prepTime: '',
          totalTime: '',
          ingredients: '',
          directions: ''
        })
        setShowForm(!showForm)
        SetAddField(false)
        setCurrId(0)
    }

    const toggleField = () => {
        SetAddField(!addField)
    }

    if (showForm) {
        document.body.classList.add('active-popup')
    }   else {
        document.body.classList.remove('active-popup')
    }
    
    const fillForm = (meal) => {
      setShowForm(true)
      setCurrId(meal._id)

      setMealData({
        day: meal.day,
        name: meal.name,
        dishType: meal.dishType ? meal.dishType : '',
        servings: meal.servings ? meal.servings : '',
        prepTime: meal.prepTime ? meal.prepTime : '',
        totalTime: meal.totalTime ? meal.totalTime : '',
        ingredients: meal.ingredients ? meal.ingredients : '',
        directions: meal.directions ? meal.directions : ''
      })

    }
  
  const { user } = useSelector((state) => state.auth)
  const { meals, isLoading, isError, message } = useSelector((state) => state.meals)

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getMeals())

    return () => {
      dispatch(reset())
    }
    
  },[user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name} </h1>
      </section>
      <MealForm meals={meals} mealData={mealData} setMealData={setMealData} currId={currId} showForm={showForm} toggleForm={toggleForm} addField={addField} toggleField={toggleField} />
      <section className="page-content">
        { meals.length > 0 ? (
          <div className="meals">
            {meals.map((meal) => (
              <MealItem key={meal._id} meal={meal} onEdit={fillForm} />
            ))}
          </div>
        ) : (<h3>You have no meals planned</h3>)}
      </section>
    </>
  )
}

export default Dashboard