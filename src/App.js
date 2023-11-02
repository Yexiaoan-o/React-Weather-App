import React from "react";
import Home from "./components/Home";
import Weather from "./components/Weather";

function App() {
  return (
    <>
    <Home />
    <div className="weather-container">
    <Weather />
    <Weather />
    <Weather />
    <Weather />
    </div>
    </>
    

  );
}

export default App;