import styles from './ItemListContainer.module.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { data } from '../data/fakestoreapi_com.js';

// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {
  // Item lis comtainer
  const { category } = useParams();

  const products = data;

  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject(new Error('There are not data'));
    }
  });

  getProducts
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  const filterCategory = products.filter(
    (product) => product.category == category
  );
  //console.log(category)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          {/* <h2>{greeting}</h2> */}
          <ItemList products={filterCategory} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
