
import './App.css';
import { useSelector,useDispatch } from 'react-redux'

import { increment,decrement } from './actions';


function App() {

  const counter = useSelector(state => state.counterReducer);
  console.log(counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>hello</h1>
      <h1> count : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

    </div>
  );
}

export default App;
