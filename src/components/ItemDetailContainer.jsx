import styles from './ItemListContainer.module.css'
import ItemDetail from './ItemDetail';
import data from '../data/fakestoreapi_com.json'
import { useParams } from 'react-router-dom';

import {useEffect, useState} from 'react'

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = () => {

    // Item lis comtainer
  const { id } = useParams()
  const [products, setProducts] = useState([])

  // const products = data
  
  useEffect(()=>{
    const products = data
    console.log("Noooo ", id)
    return () => {
      products
    }
}, [id])

  const getProducts = new Promise((resolve, reject)=>{
    if (products.length > 0) {
      setTimeout(()=>{
        resolve(products)
      }, 2000)
    } else {
      reject(new Error("There are not data"))
    }
  })

  getProducts
  .then((res)=>{
    setProducts(res)
  })
  .catch((error)=>{
    console.log(error);
  }, [id])


  // const filterId = products.filter((products)=>products.id == id)
  //console.log(category)

  return (
    <>
      <div className={styles.container} >
        <div className={styles.item} >
          {<ItemDetail products={products} />}

        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer;