import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setCount] = useState(0)

    const addValue = () => {

        setCount((prevCounter) => { return prevCounter + 1 });
        setCount((prevCounter) =>  prevCounter + 1 );
        // setCount(counter+1);
        // setCount(counter+1);
        // setCount(counter+1);
        // setCount(counter+1);
    }

    const removeValue = () => {
        if(counter < 0) {
            counter = 0;
        }
        setCount(counter--);
    }

  return (
      <>
          <h1>Counter APP</h1>
          <h3>Counter Value: {counter}</h3>
          <button className='btn' onClick={addValue}>Add</button>
          <button className='btn' onClick={removeValue}>Remove</button>
      </>
  )
}

export default App
