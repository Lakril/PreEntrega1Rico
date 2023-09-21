import React from 'react'
import Item from './Item'
import styles from './ItemList.module.css'
<<<<<<< HEAD


// eslint-disable-next-line react/prop-types, no-unused-vars, react-refresh/only-export-components
const ItemList = ({products}) => {

=======

// import { Container } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types, no-unused-vars
const ItemList = ({products}) => {

    
>>>>>>> 2e6de0e (feat: corrections categories)


    return (
        <div className={styles.container}>
            {/* eslint-disable-next-line no-undef, react/prop-types */}
            {products.map((p) => {
                return (
                    <Item
                        key={p.id}
<<<<<<< HEAD
                        id={p.id}
=======
>>>>>>> 2e6de0e (feat: corrections categories)
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

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ItemList)