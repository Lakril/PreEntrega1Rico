import { Card, Stack, CardBody, CardFooter, Heading, Text, Divider, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Item = ({ title, price, category, image, description , id}) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={image}
                    alt={title}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text fontSize='small'>
                        {description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $ {price}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {category}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        <Link to={`/item/${id}`}>
                            Details
                        </Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
            <Divider />
        </Card>
    )
}

export default Item