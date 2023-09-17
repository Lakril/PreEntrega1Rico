import ItemCount from './ItemCount';
import styles from './ItemListContainer.module.css'
import Promises from './Promises';
import ItemList from './ItemList';


// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting, products}) => {
  


  return (
    <>
      <div className={styles.container} >
        <div className={styles.item} >
          <h2>{greeting}</h2>
          <ItemList products={products} />
          <ItemCount />
          <Promises />
        </div>
      </div>
    </>
  )
}

export default ItemListContainer;