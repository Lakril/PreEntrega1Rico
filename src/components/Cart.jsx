import { useContext } from 'react';
import CartContext from '../context/Products/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <p>There are not elements in the cart</p>
        <Link to="/">Go to home</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: {totalPrice()}</p>
    </>
  );
};

export default Cart;
