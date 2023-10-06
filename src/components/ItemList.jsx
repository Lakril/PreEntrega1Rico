import React from 'react';
import Item from './Item';
import styles from './ItemList.module.css';

// eslint-disable-next-line react/prop-types, no-unused-vars, react-refresh/only-export-components
const ItemList = ({ products }) => {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line no-undef, react/prop-types */}
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

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ItemList);
