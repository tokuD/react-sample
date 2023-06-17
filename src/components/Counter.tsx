import React, { useState } from 'react'

const Counter = (props: { initialValue: number }) => {
  const [count, setCount] = useState(props.initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Minus</button>
    </div>
  )
}

export default Counter
