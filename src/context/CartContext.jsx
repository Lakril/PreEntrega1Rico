import { createContext, useState } from 'react';

export const CartContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item, count) => {
    if (isInCart(item.id)) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.quantity++;
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
      return;
    } else {
      setCartItems([...cartItems, { ...item, quantity: +count }]);
    }
  };

  const isInCart = (id) => {
    return cartItems.some((cartItem) => cartItem.id === id);
  };

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
