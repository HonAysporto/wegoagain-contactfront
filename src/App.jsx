import React from 'react'
import Home from './component/Home'
import AddContact from './component/AddContact'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addcontact' element={<AddContact/>}/>
        <Route path='/contact/:userid' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App