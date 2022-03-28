import { useState, useEffect } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message} = useSelector
    (
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch ])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="card">
            <section className='heading'>
                <h1>
                    Login
                </h1>
                <p>Login and plan your meals!</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <div className="input-container">
                            <FaEnvelope className="icon" />
                            <input 
                                type='email' 
                                className='form-control' 
                                id='email' 
                                name='email' 
                                value={email} 
                                placeholder='Email' 
                                onChange={onChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className="input-container">
                            <FaLock className="icon" />
                            <input 
                                type='password' 
                                className='form-control' 
                                id='password' 
                                name='password' 
                                value={password} 
                                placeholder='Password' 
                                onChange={onChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
            <p>Don't have an account? 
                <Link to='/register'>
                    Sign up
                </Link>
            </p>
        </div>
    )
}

export default Login