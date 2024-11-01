import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header({ cart, onCabinetClick }) {
  let [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen((previous) => !previous);
  };

  return (
    <header className="header">
      <div>
        <Link to="/" className="logo">House Staff</Link>
      </div>
      <ul className="nav">
        <li><Link to="/about">Про нас</Link></li>
        <li><Link to="/contact">Контакти</Link></li>
        <li onClick={onCabinetClick} style={{ cursor: 'pointer', color: 'purple' }}>Кабінет</li>
        <li className="cartIconContainer" onClick={toggleCart}>
          <FaShoppingCart className="shopCartButton" />
          {cart.length > 0 && (
            <span className="cartItemCount">{cart.length}</span>
          )}
        </li>
      </ul>

      {cartOpen && (
        <div className="shopCart">
          <div className="cartHeader">
            <h3>Кошик</h3>
            <button onClick={toggleCart} className="closeCart">✕</button>
          </div>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.title}</p>
                <p>{item.price}$</p>
              </div>
            ))
          ) : (
            <p>Ваш кошик порожній</p>
          )}
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  onCabinetClick: PropTypes.func.isRequired,
};

export default Header;
