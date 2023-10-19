import styles from './ItemList.module.css';

import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const ItemList = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            category={p.category}
            image={p.image}
            description={p.description}
          />
        );
      })}
    </div>
  );
};

ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const MemoizedItemList = React.memo(ItemList);

export default MemoizedItemList;
