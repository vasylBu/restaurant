import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
        </div>
        <ul className='nav'>
        <li> Про нас</li>
        <li> Контакти</li>
        <li> Кабінет</li>
      </ul>
      <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopCartButton ${cartOpen && 'active'}`}/>
      {cartOpen &&(
        <div className='shopCart'>

        </div>
      )}
        <div className='presentation'></div>
    </header>
  )
}
