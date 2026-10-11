import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, numberIncrement } from './features/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  const inputRef = useRef();

  
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Click</button>
      {count}
      <button onClick={() => dispatch(decrement())}>Remove</button>

      <input type="text" ref={inputRef}/>

      <button onClick={(e) => dispatch(numberIncrement(inputRef.current.value))}>Add</button>
    </div>
  );
}

export default App
