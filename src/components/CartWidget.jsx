import styles from './CartWodget.module.css';
import logo from '../assets/216477_shopping_cart_icon.png';

import { useContext } from 'react';
import CartContext from '../context/Products/CartContext';

const CartWidget = () => {
  const { test } = useContext(CartContext);
  console.log('cartWidget: ', test);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.item}>
        <p>{test}</p>
      </div>
    </div>
  );
};

export default CartWidget;
