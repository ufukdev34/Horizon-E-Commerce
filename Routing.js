import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import HomePage from './src/pages/HomePage'
import Sweatshirts from './src/pages/Sweatshirts'

export default function Routing() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/sweatshirts' element={<Sweatshirts/>} />
    </Routes>
  )
}
