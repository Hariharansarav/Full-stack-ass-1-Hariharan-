import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/product'
import Product from './components/product'
import { Route } from 'react-router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

    <Product />


   
    
    </>
  )
}

export default App
