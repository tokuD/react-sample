import React, { useReducer } from 'react'

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'DECREMENT':
      return --currentCount
    case 'INCREMENT':
      return ++currentCount
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

const ReducerSample = (props: { initialCount: number }) => {
  const [count, dispatch] = useReducer(reducer, props.initialCount)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
      <button onClick={() => dispatch('INCREMENT')}>Increment</button>
      <button onClick={() => dispatch('DOUBLE')}>Double</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default ReducerSample
