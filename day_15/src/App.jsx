import React from 'react'
import Login from './components/login'
import Dashboard from './components/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  const user = {
    name: "Kamal",email:"singhkamalraj5@gmail.com",password:"123456"
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login user={user} />} />
          <Route path='/dashboard' element={<Dashboard user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
