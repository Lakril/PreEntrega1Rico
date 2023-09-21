import styles from './ItemListContainer.module.css'
import ItemDetail from './ItemDetail';
import { data } from '../data/fakestoreapi_com.js'




// eslint-disable-next-line react/prop-types
const ItemDetailContainer = () => {


  // Item lis comtainer
  const products = data

  // Promise---------------------
  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    } else {
      reject(new Error("There are not data"))
    }
  })

  getProducts
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  // Promise-------------------------

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