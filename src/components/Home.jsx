import ItemList from './ItemList';
import { useContext, useEffect } from 'react';
import CartContext from '../context/Products/CartContext';

const Home = () => {
  const { products, getProducts } = useContext(CartContext);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default Home;
