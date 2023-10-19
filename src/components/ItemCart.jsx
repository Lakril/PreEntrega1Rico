import { useContext } from 'react';
import CartContext from '../context/Products/CartContext';
import PropTypes from 'prop-types';
import './ItemCart.css';

const ItemCart = ({ product }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="itemCart">
      <img src={product.image} alt={product.title} />
      <div>
        <p>Title: {product.title}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Price: {product.price}</p>
        <p>Total: {product.price * product.quantity}</p>
        <button onClick={() => removeItem(product.id)}>Remove</button>
      </div>
    </div>
  );
};

ItemCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemCart;
