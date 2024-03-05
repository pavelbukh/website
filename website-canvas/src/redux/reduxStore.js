import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import shipReducer from './reducers/shipReducer'
import goalsReducer from './reducers/goalsReducer'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    ships: shipReducer,
    goals: goalsReducer
  },
})

export default store

