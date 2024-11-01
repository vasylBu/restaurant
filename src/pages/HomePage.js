import '../styles/HomePage.css'

import PropTypes from 'prop-types'
import React from 'react'

import Items from '../components/Items'

function HomePage({ items, addToCart}) {
  return (
    <div>
      <h1>Каталог товарів</h1>
      <Items items={items} addToCart={addToCart} />
    </div>
  );
}

HomePage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

export default HomePage;
