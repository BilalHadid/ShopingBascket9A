import React from "react";
import "./App.css";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import CardPayment from "./component/CardPayment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardPayment />} />
      </Routes>
    </div>
  );
}

export default App;
