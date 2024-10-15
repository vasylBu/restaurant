import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2> {this.props.item.title}</h2>
        <p> {this.props.item.disc}</p>
        <b> {this.props.item.price}$</b>
        <div className='addToCart'>+</div>
      </div>
    );
  }
}

export default Item;
