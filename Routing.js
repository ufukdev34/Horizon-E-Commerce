import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import HomePage from './src/pages/HomePage'
import CategoryPage from './src/pages/CategoryPage'
import ProductPage from './src/pages/ProductPage'

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/category/sweatshirts' element={<CategoryPage category="sweatshirts"/>} />
        <Route path='/category/tshirts' element={<CategoryPage category="tshirts"/>} />
        <Route exact path='/product/:id' element={<ProductPage/>}/>
    </Routes>
  )
}
