import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import CategoryPage from './src/pages/CategoryPage'
import ProductPage from './src/pages/ProductPage'
import CartPage from './src/pages/CartPage'

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element={<CategoryPage category="sweatshirts"/>} />
        <Route path='/category/sweatshirts' element={<CategoryPage category="sweatshirts"/>} />
        <Route path='/category/tshirts' element={<CategoryPage category="tshirts"/>} />
        <Route exact path='/product/:id' element={<ProductPage/>}/>
        <Route exact path='/cart' element={<CartPage/>}/>
    </Routes>
  )
}
