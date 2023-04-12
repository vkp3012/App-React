import React from "react";
// import CurrentLocation from "./components/currentLocation";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Index from "./components/index";
import Todo from "./todo/todo";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
