import { useEffect, useState } from 'react'

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
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p></p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount