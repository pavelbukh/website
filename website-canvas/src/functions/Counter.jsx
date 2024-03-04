import { useState } from "react"
import Button from '@mui/material/Button'

function Counter() {
  const [counter, setCounter] = useState(0)
  const increment = () =>{
    setCounter(prevCounter => prevCounter +1)
  }
  return(
    <div>
      Counter: {counter} 
      <br />
      <Button variant="contained" onClick={increment}>Click me</Button>
    </div>
  )
}

export default Counter