import styles from "./CartWodget.module.css";
import logo from "../assets/216477_shopping_cart_icon.png"

const CartWidget = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.item}>
        <p>5</p>
      </div>
    </div>
  );
};

export default CartWidget;
