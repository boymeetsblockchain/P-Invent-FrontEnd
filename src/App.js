import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Forgot from './pages/auth/Forgot'
import Reset from './pages/auth/Reset'
function App() {
  return (
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/forgot' element={<Forgot/>}/>
         <Route path='/resetpassword/:resetToken' element={<Reset/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App