
import styles from './ItemList.module.css'
import { Card, Stack, CardBody, CardFooter, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';



// eslint-disable-next-line react/prop-types
const ItemDetail = ({ products }) => {

    

    const { id } = useParams();

    

    // console.log(products)






    // eslint-disable-next-line react/prop-types
    const filterProducts = products.filter((product) => product.id === Number(id))
    console.log(filterProducts)
    console.log(products)

    return (
        <div className={styles.container}>
            {filterProducts.map((p) => {
                return (
                    <Card maxW='sm' key={p.id}>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md' >{p.title}</Heading>
                                <Text fontSize='small'>
                                    {p.description}
                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    <ItemCount />
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