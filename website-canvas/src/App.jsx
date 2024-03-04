import Counter from "./functions/Counter"
import { Container } from "@mui/material"
import Typography from "@mui/material/Typography"
// import Box from "@mui/material/Box"
import ProTip from "./styles/ProTip"




function App() {
  

  return (
    <Container maxWidth='sm'>
   
        <Typography variant='h4' component='h1' sx={{mb:2}}>
          <Counter />
        </Typography>
        {/* <ProTip /> */}
  
    </Container>
  )
}

export default App
