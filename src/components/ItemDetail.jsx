/* eslint-disable react/prop-types */
import styles from './ItemList.module.css';
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from '@chakra-ui/react';
// import ItemCount from './ItemCount';
import ItemCount from './ItemCount.jsx';
import { useParams } from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const ItemDetail = ({ products }) => {
  const { id } = useParams();
  // console.log(id)

  const filterProducts = products.filter(
    (product) => product.id === Number(id)
  );
  // console.log(filterProducts)
  // console.log(products)

  return (
    <div className={styles.container}>
      {filterProducts.map((p) => {
        return (
          <Card maxW='sm' key={p.id}>
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{p.title}</Heading>
                <Text fontSize='small'>{p.description}</Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing='2'>
                <ItemCount />
              </ButtonGroup>
            </CardFooter>
            <Divider />
          </Card>
        );
      })}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ItemDetail);
