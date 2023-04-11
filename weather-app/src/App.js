import React from "react";
// import CurrentLocation from "./components/currentLocation";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Weather from "./components/weather";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
