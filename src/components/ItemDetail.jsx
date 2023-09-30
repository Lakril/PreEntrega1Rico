
import styles from './ItemList.module.css'
import { Card, Stack, CardBody, CardFooter, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
// import ItemCount from './ItemCount';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';



// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ItemDetail = ({ products }) => {


    const { id } = useParams()
    // const { id } = useParams();

    //const products = data


    // eslint-disable-next-line react/prop-types
    const filterProducts = products.filter((product) => product.id === Number(id))
    // console.log(filterProducts)
    // console.log(products)

    return (
        <div className={styles.container}>
            {/* eslint-disable-next-line react/prop-types */}
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
                                <Button variant='solid' colorScheme='blue' px={30} py={10} textAlign={'center'}>
                                    Count
                                    <ItemCount />
                                </Button>
                                {/* <Link to={`/item/${p.id}`}>
                                    <Button variant='solid' colorScheme='blue'>
                                        test id
                                        test id
                                    </Button>
                                </Link> */}
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

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ItemDetail)