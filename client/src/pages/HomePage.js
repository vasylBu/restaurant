import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles/HomePage.module.css';

function HomePage({ items, addToCart }) {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.title}>Каталог товарів</h1>
      <div className={styles.itemsList}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.img} alt={item.title} className={styles.itemImage} />
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <p className={styles.itemDesc}>{item.desc}</p>
            <b className={styles.itemPrice}>{item.price}$</b>
            <div
              className={styles.addToCart}
              onClick={() => addToCart(item)}
            >
              +
            </div>
          </div>
        ))}
      </div>
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
  addToCart: PropTypes.func.isRequired,
};

export default HomePage;
