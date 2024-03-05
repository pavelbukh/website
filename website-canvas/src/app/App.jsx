import Counter from "../components/functions/counter/Counter"
import Form from "../components/functions/shipTask/form/ShipForm"
import { Container } from "@mui/material"
import Typography from "@mui/material/Typography"
import ShipList from "../components/functions/shipTask/shipList/ShipList"
import Goals from "../components/functions/goals/GoalsTracker"




function App() {
  

  return (
    <Container maxWidth='lg'>
   
        <Typography variant='h4' component='h1' sx={{mb:2}}>
          <Counter />
        </Typography>
        <Typography variant='h4' component='h1' sx={{mb:2}}>
          <Form />
          <ShipList />
        </Typography>
        <Typography variant="h3" component='h2' sx={{mb:2}}>
          <Goals />
        </Typography>
  
    </Container>
  )
}

export default App
