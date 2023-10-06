import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { useState, useEffect } from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
// import styles from './ItemCount.module.css'

// Hook
const ItemCount = () => {
  // const {cart, setCart} = useContext(CartContext)
  const [count, setCount] = useState(0);
  const [ocultar, setOcultar] = useState(false);

  const onAdd = () => {
    alert(`Agregrado al carrito ${count}`);
    setOcultar(true);
  };

  useEffect(() => {
    console.log('useEffect');
  }, [count]);

  return (
    <>
      {!ocultar && (
        <>
          <ButtonGroup size="md" isTruncated variant="outline">
            <IconButton onClick={() => setCount(count + 1)} icon={<AddIcon />} colorScheme="blue" variant="solid" />
            <Button colorScheme="blue" variant="solid" size="md">
              {count}
            </Button>
            <IconButton
              onClick={() => {
                if (count >= 1) {
                  setCount(count - 1);
                }
              }}
              icon={<MinusIcon />}
              colorScheme="blue"
              variant="solid"
            />
          </ButtonGroup>
          <Button colorScheme="blue" variant="solid" size="md" onClick={onAdd}>
            Agregar al carrito
          </Button>
        </>
      )}
    </>
  );
};

export default ItemCount;
