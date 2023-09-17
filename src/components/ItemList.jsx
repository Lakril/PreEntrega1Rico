import Item from './Item'
import { useState, useEffect } from 'react';
import styles from './ItemList.module.css'
// import { Container } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const ItemList = () => {

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
                        <Item xs={1} md={2}
                            key={p.id}
                            title={p.title}
                            price={p.price}
                            category={p.category}
                            image={p.image}
                            description={p.description}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList