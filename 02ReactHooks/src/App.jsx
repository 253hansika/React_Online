import { useState } from 'react';

function App() {
  const [count, setCount] = useState(15);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }

    console.log(count + 'add');
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }

    console.log(count + 'remove');
  };

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={addValue}>Add value : {count}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value : {count}</button>
    </>
  );
}

export default App;
