import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/Products/CartContext';
// import styles from './ItemCount.module.css'

// Hook
// eslint-disable-next-line react/prop-types
const ItemCount = ({ stock, initial, productId }) => {
  const { addProduct } = useContext(CartContext);

  const [count, setCount] = useState(initial);
  const [ocultar, setOcultar] = useState(false);
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (count) => {
    alert(`Agregrado al carrito ${count}`);
    setOcultar(true);
    addProduct(productId, count);
  };

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  return (
    <>
      {!ocultar && (
        <>
          <ButtonGroup size="md" isTruncated variant="outline">
            <IconButton
              onClick={() => setCount(count + 1)}
              icon={<AddIcon />}
              disabled={count <= 1}
              colorScheme="blue"
              variant="solid"
            />
            <Button colorScheme="blue" variant="solid" size="md">
              {count}
            </Button>
            <IconButton
              onClick={() => {
                if (count >= 1) {
                  setCount(count - 1);
                }
              }}
              disabled={count >= stock}
              icon={<MinusIcon />}
              colorScheme="blue"
              variant="solid"
            />
          </ButtonGroup>
          <Button onClick={() => onAdd(count)} colorScheme="blue" variant="solid" size="md" disabled={stock <= 0}>
            Agregar al carrito
          </Button>
        </>
      )}
      {/* muestra el boton terminar compra */}
      {ocultar && (
        <>
          {!goToCart && (
            <Link to="/cart">
              <Button onClick={() => setGoToCart(true)} colorScheme="blue" variant="solid" size="md">
                Terminar mi compra
              </Button>
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default ItemCount;
