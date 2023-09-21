import Item from './Item'
import styles from './ItemList.module.css'

// import { Container } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types, no-unused-vars
const ItemList = ({products}) => {

    


    return (
        <div className={styles.container}>
            {/* eslint-disable-next-line no-undef, react/prop-types */}
            {products.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
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