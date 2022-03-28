import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getMeals, reset } from '../features/meals/mealSlice'
import { FaTimes } from 'react-icons/fa'

function Profile() {

    const [popup, setPopup] = useState(false)
    const [text, setText] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { meals, isLoading, isError, message } = useSelector((state) => state.meals)

    const firstLet = user.name[0]

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

    const togglePopup = () => {
      setPopup(!popup)
      console.log(popup)
    }

    const onSubmit = () => {
      console.log(text);
    }

    if (isLoading) {
        return <Spinner />
    }

  return (
    <div className='grid'>
        <div className="box box-1">
          {meals.map(meal => (
            <div className="row" key={meal._id}>
              <div className="row-header">
                <h4>{meal.dishType}</h4>
              </div>
              <div className="row-content">
                <h2>{meal.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="box box-2">
          <div className="box-2-header">
            <div className="circle">
              <h1>{user && firstLet}</h1>
            </div>
          </div>
          <div className="box-2-content">
            <p>Joined: 28.3.2022</p>
          </div>
        </div>
        <div className="box box-3">
          <button className="btn btn-block popup-btn" onClick={togglePopup}>Add To Shopping</button>

          {popup && <div className="popup">
                <div onClick={togglePopup} className="overlay"></div>
                <div className="popup-content">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="item">Item</label>
                            <input 
                                type="text" 
                                name="item"
                                id="item"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                autoComplete="off" 
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
        </div>
    </div>
  )
}

export default Profile