import React from 'react'

export default function Header() {
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
        <div className='presentation'></div>
    </header>
  )
}
