import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Profile from './Pages/Profile'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'
import CreateListing from './Pages/CreateListing'

function App() {
  return (

    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />} >
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-listing' element={<CreateListing />} />
        </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App
