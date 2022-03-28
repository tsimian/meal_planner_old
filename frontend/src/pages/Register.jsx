import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser, FaEnvelope, FaLock, FaCheck  } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { 
        user, 
        isLoading, 
        isError, 
        isSuccess, 
        message 
    } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset)

    }, [user, isError, isSuccess, message, navigate, dispatch])
 
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match')
        }   else {
            const userData = {
                name, email, password
            }

            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }
   
  return (
    <div className="card">
        <section className="heading">
            <h1>
                Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <div className="input-container">
                        <FaUser className="icon" />
                        <input 
                            type="text" 
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={onChange}
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <FaEnvelope className="icon" />
                        <input 
                            type="email" 
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <FaLock className="icon" />
                        <input 
                            type="password" 
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Create password"
                            onChange={onChange}
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <FaCheck 
                            className="confirm-icon"
                            style={{
                                color: password.length > 0 && password === password2 ? '#66ff00' : '#f4f4f4'
                            }} 
                        />
                        <input 
                            type="password" 
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Confirm password"
                            onChange={onChange}
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
        <p>Already have an account? 
            <Link to='/login'>
                Sign in
            </Link>
        </p>
    </div>
  )
}

export default Register