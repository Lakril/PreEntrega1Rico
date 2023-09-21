import Item from './Item'
import styles from './ItemList.module.css'

// import { Container } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const ItemList = ({products}) => {

    

    //getProducts()


    return (
        <div className={styles.container}>
            {/* {
                // eslint-disable-next-line react/prop-types
                products.map((p) => {
                    return (
                        <Item 
                            key={p.id}
                            title={p.title}
                            price={p.price}
                            category={p.category}
                            image={p.image}
                            description={p.description}
                        />
                    )
                })
            } */}
        </div>
    )
}

export default ItemList