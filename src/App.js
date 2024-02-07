import logo from './logo.svg';
import './App.css';
import {increment, decrement} from "./redux/action"
import {useSelector,useDispatch} from "react-redux"
import Data from "./components/Data" 
function App() {
  // const num = 0;

  // const count = useSelector(state => state.count)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <button  onClick={()=>{
        dispatch(increment())
      }}>+</button>
      <Data />
      <button onClick={()=>{
        dispatch(decrement())
      }}>-</button>
    </div>
  );
}

export default App;
