import "./NavBar.css"
import React from 'react'
import { CartWidget } from './CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <div className="Nav">

        <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        </ul>

  <CartWidget/>


    </div>
  )
}
