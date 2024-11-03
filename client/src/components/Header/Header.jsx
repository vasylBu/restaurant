import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './Header.module.css'; 

function Header({ cart, onCabinetClick }) {
  let [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen((previous) => !previous);
  };

  return (
    <header className={styles.header}> 
      <div>
        <Link to="/" className={styles.logo}>House Staff</Link> 
      </div>
      <ul className={styles.nav}> 
        <li><Link to="/about"  data-cy="about-link">Про нас</Link></li>
        <li><Link to="/contact">Контакти</Link></li>
        <li onClick={onCabinetClick} style={{ cursor: 'pointer', color: 'purple' }}>Кабінет</li>
        <li className={styles.cartIconContainer} onClick={toggleCart}> 
          <FaShoppingCart className={styles.shopCartButton} data-cy="cart-icon" /> 
          {cart.length > 0 && (
            <span className={styles.cartItemCount} data-cy="cart-item-count">{cart.length}</span> 
          )}
        </li>
      </ul>

      {cartOpen && (
        <div className={styles.shopCart} data-cy="cart-dropdown">
          <div className={styles.cartHeader}> 
            <h3>Кошик</h3>
            <button onClick={toggleCart} className={styles.closeCart} data-cy="close-cart">✕</button> 
          </div>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className={styles.cartItem}> 
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
