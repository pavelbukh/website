import  React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../../redux/actions/goalsAction";
import { InputLabel, TextField, Button, Select, MenuItem, FormGroup } from "@mui/material";


const Goals = () =>{
  const dispatch = useDispatch()
  const [goal, setGoal] = useState('')

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    dispatch(
      addGoal({
        id: Date.now(),
        nameGoal: goal
      })
    )
    resetForm()
  }

  const handleChange = (e) =>{
    const {value} = e.currentTarget
    setGoal(value)
  }
  const resetForm = () =>{
    setGoal('')
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <FormGroup fullWidth>
          <InputLabel htmlFor='goal'>Set a Goal</InputLabel>
          <TextField
            id="outlined-basic"
            name="goal"
            value={goal}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Set a Goal"
          />  
        </FormGroup>
        <Button type="submit" variant="contained" color="primary">Set a Goal</Button>
      </form>
    </div>
  )
}

export default Goals