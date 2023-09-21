import { useEffect, useState } from 'react'
import styles from './ItemCount.module.css'

// Hook
const ItemCount = () => {

  
  const [count, setCount] = useState(0)


  useEffect(() => {
 
  }, [count])

  const onAdd=()=>{
    alert(`Agregrado al carrito ${count}`)
  }


  return (
    <div>
      <h2>Counter</h2>
      <ul className={styles.buttonWrapper}>
        <li><button onClick={() => setCount(count + 1)}>+</button></li>
        <p>{count}</p>
        <li><button onClick={() => setCount(count - 1)}>-</button></li>
        <li><button onClick={onAdd}>Agregar al carrito</button></li>
      </ul>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p></p>
      <button onClick={onAdd}>Agregar al carrito</button> */}
    </div>
  )
}

export default ItemCount