import styles from './ItemListContainer.module.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { data } from '../data/fakestoreapi_com.js'
=======
import data from '../data/fakestoreapi_com.json'
>>>>>>> 2e6de0e (feat: corrections categories)


// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {

  // Item lis comtainer
  const { category } = useParams()

  const products = data

<<<<<<< HEAD
  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
=======
  const getProducts = new Promise((resolve, reject)=>{
    if (products.length > 0) {
      setTimeout(()=>{
>>>>>>> 2e6de0e (feat: corrections categories)
        resolve(products)
      }, 2000)
    } else {
      reject(new Error("There are not data"))
    }
  })

  getProducts
<<<<<<< HEAD
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })

  const filterCategory = products.filter((product) => product.category == category)
=======
  .then((res)=>{
    console.log(res);
  })
  .catch((error)=>{
    console.log(error);
  })

  const filterCategory = products.filter((products)=>products.category == category)
>>>>>>> 2e6de0e (feat: corrections categories)
  //console.log(category)

  return (
    <>
      <div className={styles.container} >
        <div className={styles.item} >
          {/* <h2>{greeting}</h2> */}
          <ItemList products={filterCategory} />
        </div>
      </div>
    </>
  )
}

export default ItemListContainer;