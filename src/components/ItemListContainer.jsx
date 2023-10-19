import styles from './ItemListContainer.module.css';
import ItemList from './ItemList';

import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import CartContext from '../context/Products/CartContext';

const ItemListContainer = () => {
  const { getProducts, products } = useContext(CartContext);

  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Item list comtainer
  const { category } = useParams();

  const filterCategory = products.filter((product) => product.category == category);
  // console.log(filterCategory);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <ItemList products={filterCategory} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
