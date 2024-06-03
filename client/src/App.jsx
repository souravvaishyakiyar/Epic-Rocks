import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Profile from './Pages/Profile'
import Signup from './Pages/Signup'
import About from './Pages/About'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App
