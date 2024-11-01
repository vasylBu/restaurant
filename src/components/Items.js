import PropTypes from 'prop-types'
import React from 'react'

import Item from './Item'

class Items extends React.Component {
  render() {
    const { items, addToCart } = this.props;
    return (
      <main>
        {items.map((element) => (
          <Item key={element.id} item={element} addToCart={addToCart} />
        ))}
      </main>
    );
  }
}

Items.propTypes = {
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

export default Items;
