import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Forgot from './pages/auth/Forgot'
import Reset from './pages/auth/Reset'
import Dashboard from './pages/dashboard/Dashboard'
import Sidebar from './components/sidebar/Sidebar'
import Layout from './components/layout/Layout'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
axios.defaults.withCredentials= true;
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);
  return (
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/forgot' element={<Forgot/>}/>
         <Route path='/resetpassword/:resetToken' element={<Reset/>}/>
          <Route path='/dashboard' element={ <Sidebar>
            <Layout>
              <Dashboard/>
            </Layout>
           </Sidebar>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App