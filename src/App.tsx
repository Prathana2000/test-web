import React from "react";
import "./App.css";
import Change from "./Change";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Change />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
