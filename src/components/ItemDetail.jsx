
import { useState, useEffect } from 'react';
import styles from './ItemList.module.css'
import { Card, Stack, CardBody, CardFooter, Heading, Text, Divider, Button, ButtonGroup} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
// import { Container } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const ItemDetail = () => {

    const {id} = useParams()
    console.log(id)

    const [products, setProduct] = useState([])

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products/")
        // console.log(response)
        const data = await response.json()

        return data
    }

    useEffect(() => {
        getProducts().then((products) => setProduct(products))
    }, [])

    //getProducts()


    return (
        <div className={styles.container}>
            {
                products.map((p) => {
                    return (
                        <Card maxW='sm' key={p.id}>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md' title={p.title} ></Heading>
                                    <Text fontSize='small' description={p.description}>
                                        description
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