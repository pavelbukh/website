import { createReducer } from "@reduxjs/toolkit";
import {addGoal, removeGoal} from '../actions/goalsAction'

const initialState = []
const goalsReducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(addGoal, (state, action) => {
      return [...state, action.payload]
    })
    .addCase(removeGoal, (state, action)=> {
      return state.filter((goal)=> goal.id!==action.payload.id)
    })
})


export default goalsReducer