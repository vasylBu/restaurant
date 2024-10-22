import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Item from './Item';

class Items extends Component {
  render() {
    const { items } = this.props;
    return (
      <main>
        {items.map((element) => (
          <Item key={element.id} item={element} />
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
};

export default Items;
