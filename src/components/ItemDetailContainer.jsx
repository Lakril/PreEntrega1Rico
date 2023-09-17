import styles from './ItemListContainer.module.css'
import ItemDetail from './ItemDetail';


// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ({ products}) => {

  return (
    <>
      <div className={styles.container} >
        <div className={styles.item} >
          <ItemDetail products={products} />
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer;