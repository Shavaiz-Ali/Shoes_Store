// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Header from './Components/Home/Header/Header'
import Navbar from './Components/Home/Navbar/Navbar'
import Home from "./Components/Home/Home"
function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
