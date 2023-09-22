import { useEffect, useState } from 'react'
// import styles from './ItemCount.module.css'

// Hook
const ItemCount = () => {


  const [count, setCount] = useState(0)


  useEffect(() => {

  }, [count])

  const onAdd = () => {
    alert(`Agregrado al carrito ${count}`)
  }


  return (
    <>
      <div>
      </div>
      <button onClick={() => setCount(count + 1)}> +  </button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}> - </button>
      <div>
        <button onClick={onAdd}>Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemCount