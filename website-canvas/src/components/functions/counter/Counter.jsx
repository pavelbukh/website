import Button from '@mui/material/Button'
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../../../redux/actions/counterAction"

function Counter() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch()
  const handleIncrement = () =>{
    dispatch(increment())
  }
  const handleDecrement = () =>{
    dispatch(decrement())
  }
  return(
    <div>
      Counter: {counter} 
      <br />
      <Button variant="contained" onClick={handleIncrement}>Click me to increment</Button>
      <Button variant="contained" onClick={handleDecrement}>Click me to decrement</Button>
    </div>
  )
}

export default Counter