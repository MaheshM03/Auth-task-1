import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./assets/style.css"
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  const [login, setlogin] = useState({

  })

  useEffect(() => {
    let data = {}
    data = JSON.parse(window.localStorage.getItem("UserData"))
    if (!!data) {
      setlogin(data)
    }
    return () => {

    }
  }, [])


  return (
    <BrowserRouter>
      <Navigation setlogin={setlogin} login={login} />
      <Routes>
        <Route path='/' element={<Home login={login} />} />
        <Route path='/dashboard' element={<Dashboard login={login} />} />
        <Route path='/login' element={<SignIn setlogin={setlogin} login={login} />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App