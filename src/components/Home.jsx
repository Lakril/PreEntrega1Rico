
import products from '../data/fakestoreapi_com.json'
import ItemList from './ItemList';

const Home = () => {


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

  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default Home