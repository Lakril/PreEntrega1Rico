import styles from './ItemListContainer.module.css'

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className={styles.container} >
        <div className={styles.item} >
          <h2>{greeting}</h2>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer;