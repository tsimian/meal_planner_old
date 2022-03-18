import { useState, useEffect } from 'react'
import MealForm from './components/MealForm'
import MealPlan from './components/MealPlan'

const LOCAL_STORAGE_KEY = process.env.REACT_APP_KEY

function App() {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const storedMeals = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedMeals) {
      setMeals(storedMeals)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(meals))
  }, [meals])



  return (
    <div className="App">
      <MealForm meals={meals} setMeals={setMeals} />
      <MealPlan meals={meals} setMeals={setMeals} />
    </div>
  );
}

export default App;
