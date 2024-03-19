import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './cart/Navbar'
import CartContainer from './cart/CartContainer'
// items

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App