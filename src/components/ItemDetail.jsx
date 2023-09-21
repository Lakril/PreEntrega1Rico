
import styles from './ItemList.module.css'
import { Card, Stack, CardBody, CardFooter, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';


const ItemDetail = () => {
    const { id, products } = useParams();

    const filteredProducts = products.filter((products) => products.id == id)

    return (
        <div className={styles.container}>
            {
                filteredProducts.map((p) => {
                    return (
                        <Card maxW='sm' key={p.id}>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{p.title}</Heading>
                                    <Text fontSize='small' >
                                        {p.description}
                                    </Text>
                                    <Text fontSize='small' >
                                        {p.category}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        Agregar al carrito
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                            <Divider />
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default ItemDetail