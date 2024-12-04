import { Container, CssBaseline } from "@mui/material"
import Navbar from "./components/Navbar"
import NewsPage from "./pages/NewsPage"


function App() {
  

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <NewsPage />
      </Container>
    </>
  )
}

export default App
