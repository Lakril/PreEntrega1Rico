import styles from './ItemListContainer.module.css';
import ItemDetail from './ItemDetail';

import { useContext, useEffect } from 'react';
import CartContext from '../context/Products/CartContext';

const ItemDetailContainer = () => {
  const { products, getProducts } = useContext(CartContext);

  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <ItemDetail products={products} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
