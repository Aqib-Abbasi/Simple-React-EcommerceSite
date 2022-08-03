import React from "react";
import Home from "./Component/Home";
import Product from "./Component/Product";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Detailproduct from "./Component/Detailpro";

import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Detailproduct />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
