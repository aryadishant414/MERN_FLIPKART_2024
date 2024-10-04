// import './App.css'

//components
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"


import { Box } from "@mui/material";
import { DataProvider } from "./context/DataProvider.jsx";



function App() {


  return (
    <DataProvider>
      <Header />
      
      <Box style={{marginTop: 54}}>
        <Home />
      </Box>
    </DataProvider>
  )
}

export default App
