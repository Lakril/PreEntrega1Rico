import styles from "./CartWodget.module.css"

const CartWidget = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src="src/img/216477_shopping_cart_icon.png" alt="" />
      </div>
      <div className={styles.item}>
        <p>5</p>
      </div>
    </div>
  )
}

export default CartWidget