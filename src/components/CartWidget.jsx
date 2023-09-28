import styles from "./CartWodget.module.css";
import logo from "../assets/216477_shopping_cart_icon.png"
import { useContext } from 'react'
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {

  const { comision, cart, setCart } = useContext(CartContext)

  // console.log(comision)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.item}>
        <p>{comision}</p>
      </div>
    </div>
  );
};

export default CartWidget;
