import styles from './ItemList.module.css';
import { Card, Stack, CardBody, CardFooter, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react';
import ItemCount from './ItemCount.jsx';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import CartContext from '../context/Products/CartContext';

const ItemDetail = () => {
  const { products } = useContext(CartContext);

  const { id } = useParams();

  // Filter array products by id
  const filterProducts = products.filter((product) => product.id === Number(id));

  return (
    <div className={styles.container}>
      {filterProducts.map((p) => (
        <Card maxW="sm" key={p.id}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{p.title}</Heading>
              <Text fontSize="small">{p.description}</Text>
              <Text fontSize="small">{p.rating.count}</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="2">
              <ItemCount initial={1} stock={p.rating.count} productId={p} />
            </ButtonGroup>
          </CardFooter>
          <Divider />
        </Card>
      ))}
    </div>
  );
};

ItemDetail.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        count: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default ItemDetail;
