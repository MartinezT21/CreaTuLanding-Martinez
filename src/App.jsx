import { useState } from 'react'
import './App.css'
import { CartWidget } from './components/NavBar/CartWidget/CartWidget'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.JSX'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <>
    
    <header>
    <NavBar/>
    </header>
    <body>
      <div>
        <ItemListContainer Usuario={"Tester"}/>
      </div>
      </body>
    </>
  
    
  )
}

export default App
