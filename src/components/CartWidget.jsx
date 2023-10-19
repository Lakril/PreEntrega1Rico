import styles from './CartWodget.module.css';
import logo from '../assets/216477_shopping_cart_icon.png';

import { useContext } from 'react';
import CartContext from '../context/Products/CartContext';

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.item}>
        <span>{totalProducts() || ''}</span>
      </div>
    </div>
  );
};

export default CartWidget;
