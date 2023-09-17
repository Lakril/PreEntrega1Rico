import ItemCount from './ItemCount';
import styles from './ItemListContainer.module.css'
import Promises from './Promises';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting, products}) => {

  // Item lis comtainer
  const {category} = useParams()
  // const filterCategory = products.filter((products)=>products.category == cat)
  console.log(category)

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