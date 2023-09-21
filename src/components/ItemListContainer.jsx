
import styles from './ItemListContainer.module.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {

  const { category } = useParams()

  const [showPosts, setShowPost] = useState()
  // let displayD
  const products = async () => {
    const response = await fetch("https://fakestoreapi.com/products/")
    const data = await response.json()
    console.log(data)
    // displayD = data.map(function(todo){
    //   return(
    //     <p key={todo.id}>{todo.title}</p>
    //   )
    // })
    // console.log(data)

    // setShowPost(displayD)
    return data
  }

 

  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products)
      }, 2000);
    } else {
      reject(new Error("There are not data"))
    }
  })

  getProducts
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    });



    useEffect(()=>{
      products()
    })

  // // filter by category
  const filterProducts = products.filter((products) => products.category == category)
  this.showPosts()

  return (
    <>
      <div className={styles.container} >
        <div className={styles.item} >
          <ItemList products={filterProducts} />
        <p>
          
          {showPosts}
          </p>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer;