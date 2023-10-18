import { useEffect, useContext } from 'react';
import CartContext from '../context/Products/CartContext';

const ProductsList = () => {
  const { products, getProducts, getDetails } = useContext(CartContext);

  useEffect(() => {
    getProducts();
    // products.map((product) => {
    //     console.log(product)
    // })
    console.log(getProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        {products.map((product) => (
          <a key={product.id} href="#!" onClick={() => getDetails(product.id)}>
            <img src={product.image} alt={product.title} width={500} />
            <p>{product.title}</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
