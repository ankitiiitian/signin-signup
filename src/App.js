import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
function App() {
  
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route exact path="/" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
