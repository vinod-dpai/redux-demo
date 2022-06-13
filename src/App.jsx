import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount, decrementByAmount } from './redux/counter';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  const handleNumberChange = (e) => {
    const { value } = e.target;
    setNumber(parseInt(value));
  };

  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <input type="number" value={number} onChange={handleNumberChange} />
      <button type="button" onClick={() => dispatch(incrementByAmount(number))}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrementByAmount(number))}>
        -
      </button>
    </div>
  );
}

export default App;
