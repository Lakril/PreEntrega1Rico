import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"
import { useEffect, useState } from 'react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
// import styles from './ItemCount.module.css'

// Hook
const ItemCount = () => {


  const [count, setCount] = useState(0)
  const [ocultar, setOcultar] = useState(false)


  useEffect(() => {

  }, [count])

  const onAdd = () => {
    alert(`Agregrado al carrito ${count}`)
    setOcultar(true)
  }

  // Button variant='solid' colorScheme='blue' px={30} py={10} textAlign={'center'}

  return (
    <>
      {!ocultar && (
        <>
          <ButtonGroup size="md" isTruncated variant="outline" >
            <IconButton onClick={() => setCount(count + 1)} icon={<AddIcon />} colorScheme='blue' variant='solid' />
            <Button colorScheme='blue' variant='solid'>{count}</Button>
            <IconButton onClick={() => {
              if (count >= 1) {
                setCount(count - 1);
              }
            }} icon={<MinusIcon />} colorScheme='blue' variant='solid' />
          </ButtonGroup>
          <Button onClick={onAdd}>Agregar al carrito</Button>
        </>
      )
      }
    </>
  )
}

export default ItemCount