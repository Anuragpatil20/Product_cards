import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product_cards from './Component/Product_cards'

function App() {
  return (
    <Routes>

    <Route path='' element = {<Product_cards/>}/>
    
    </Routes>
  )
}

export default App