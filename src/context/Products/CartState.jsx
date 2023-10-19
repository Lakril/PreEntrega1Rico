import PropTypes from 'prop-types';
import { useReducer, useState } from 'react';
import axios from 'axios';

import CartContext from './CartContext';
import CartReducer from './CartReducer';

import { GET_PRODUCT, GET_DETAILS_PRODUCT, ADD_PRODUCT } from '../types';

const CartState = (props) => {
  const initialState = {
    // returns an array of products: [{x: 1, y: 2, z: 3}, {x: 1, y: 2, z: 3},{...}]
    products: [],
    // retunr a single value of product: selectProduct.x, selectProduct.y, selectProduct.z
    selectProduct: null,
    addProductToCart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      // console.log(res.data)
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getDetails = async (id) => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products/' + id);
      console.log(res.data);
      dispatch({
        type: GET_DETAILS_PRODUCT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  
  //TODO: ---------------------------------- add to cart
  const addToCart = (product, count) => {
    console.log(product, count);
    dispatch({
      type: ADD_PRODUCT,
      payload: { product, count },
    });
  };

  // const addProduct = (item,newQuantity) => {
  //   const newCart = cart.filter(p => p.id !== item.id)
  //   newCart.push({...item, quantity: newQuantity})
  //   setCart(newCart)
  // }

  const addProduct = (item, newQuantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((cartElement) => {
          return cartElement.id === item.id
            ? { ...cartElement, quantity: cartElement.quantity + newQuantity }
            : cartElement;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity: newQuantity }]);
    }
  };

  console.log('cart: ', cart);

  const clearCart = () => setCart([]);

  const isInCart = (id) => (cart.some((item) => item.id === id) ? true : false);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const totalProducts = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  //TODO: ---------------------------------- add to cart

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        selectProduct: state.selectProduct,
        addProductToCart: state.addProductToCart,
        getProducts,
        getDetails,
        addToCart,
        clearCart,
        isInCart,
        removeItem,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

CartState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartState;
