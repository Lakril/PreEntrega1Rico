import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Item = ({ title, price, category, image, id }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            $ {price}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {category}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={`/item/${id}`}>
            <Button variant="solid" colorScheme="blue">
              Details
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
      <Divider />
    </Card>
  );
};

export default Item;
