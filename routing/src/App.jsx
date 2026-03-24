import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

import React from 'react'
import { Routes ,Route } from "react-router-dom"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/about" element = {<About />}/>
            <Route path = "/contact" element = {<Contact />}/>
        </Route>
    </Routes>
    </>
  )
}

export default App