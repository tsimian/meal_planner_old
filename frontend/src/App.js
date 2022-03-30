import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Router>
        <div className="container">
        <div className="background-img"></div>
        <div className="page-overlay"></div>
        <Header />
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Profile' element={<Profile />} />
            </Routes>
          </div>
        <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
