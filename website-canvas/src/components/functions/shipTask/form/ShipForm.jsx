import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addShip } from "../../../../redux/actions/shipAction";
import { InputLabel, TextField, Button, Select, MenuItem, FormGroup } from "@mui/material";

const Form = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [type, setType] = useState('Container')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    dispatch(
      addShip({
        id: Date.now(),
        name: name,
        type: type
      })
    )
    resetForm()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value)
        break
      case "type":
        setType(value)
        break
      default:
        return
    }
  };

  const resetForm = () => {
    setName('')
    setType('Container')
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <FormGroup fullWidth>
          <InputLabel htmlFor='name'>Ship Name</InputLabel>
          <TextField
            id="outlined-basic"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Ship Name"
          />
        </FormGroup>

        <FormGroup >
          <InputLabel id="type-label">Ship Type</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            name="type"
            // native
            value={type}
            onChange={handleChange}
          >
            <MenuItem value='Container'>Container</MenuItem>
            <MenuItem value='Bulk'>Bulk</MenuItem>
            <MenuItem value='Tanker'>Tanker</MenuItem>
          </Select>
        </FormGroup>
        <Button type="submit" variant="contained" color="primary">Add Ship</Button>
      </form>
    </div>
  );
}

export default Form;
