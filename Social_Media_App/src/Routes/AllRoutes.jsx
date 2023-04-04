import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import DetailPage from '../components/DetailPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/item/:id" element={<DetailPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes