// import './App.css'

//components
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"


import { Box } from "@mui/material";
import { DataProvider } from "./context/DataProvider.jsx";

import {BrowserRouter, Routes, Route} from 'react-router-dom';  //Enables to perform routing in our application
import DetailView from "./components/details/DetailView.jsx";
import Cart from "./components/cart/Cart.jsx";

function App() {


  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        
        <Box style={{marginTop: 54}}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:idxx" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes> 

        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
