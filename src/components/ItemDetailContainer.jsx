import styles from './ItemListContainer.module.css'
import ItemDetail from './ItemDetail';


// eslint-disable-next-line react/prop-types
const ItemDetailContainer = () => {

  const products = async () => {
    const response = await fetch("https://fakestoreapi.com/products/")
    console.log(response)
    const data = await response.json()

    return data
  }

  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProducts
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error)
    })

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