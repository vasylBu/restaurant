import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Item extends Component {
  render() {
    const { img, title, desc, price } = this.props.item;
    const { addToCart, item } = this.props;

    return (
      <div className='item'>
        <img src={img} alt={title} /> 
        <h2>{title}</h2>
        <p>{desc}</p>
        <b>{price}$</b>
        <div
          className='addToCart'
          onClick={() => addToCart(item)}
        >
          +
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Item;
