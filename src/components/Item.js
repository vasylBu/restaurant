import PropTypes from 'prop-types'; 
import React, { Component } from 'react';


export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} /> 
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className='addToCart'>+</div>
      </div>
    );
  }
} 

Item.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,  
    title: PropTypes.string.isRequired, 
    desc: PropTypes.string.isRequired,   
    price: PropTypes.string.isRequired,  
  }).isRequired, 
};

export default Item;
