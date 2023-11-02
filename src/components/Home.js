import React from "react";
import icon01d from "../images/01d.svg";
import icon01n from "../images/01n.svg";
import icon02d from "../images/02d.svg";
import icon02n from "../images/02n.svg";
import icon03d from "../images/03d.svg";
import icon03n from "../images/03n.svg";
import icon04d from "../images/04d.svg";
import icon04n from "../images/04n.svg";
import icon09d from "../images/09d.svg";
import icon09n from "../images/09n.svg";
import icon10d from "../images/10d.svg";
import icon10n from "../images/10n.svg";
import icon11d from "../images/11d.svg";
import icon11n from "../images/11n.svg";
import icon13d from "../images/13d.svg";
import icon13n from "../images/13n.svg";
import icon50d from "../images/50d.svg";
import icon50n from "../images/50n.svg";

export default function Home() {
  return (
    <div className="banner-container">
      {/* <img src={icon01d}></img>
        <img src={icon01n}></img> 
         <img src={icon02n}></img>
        <img src={icon03d}></img>
        <img src={icon03n}></img>
        <img src={icon04d}></img>
        <img src={icon04n}></img>
        <img src={icon09d}></img>
        <img src={icon09n}></img>
        <img src={icon10d}></img>
        <img src={icon10n}></img>
        <img src={icon11d}></img>
        <img src={icon11n}></img>
        <img src={icon13d}></img>
        <img src={icon13n}></img>
        <img src={icon50d}></img>
        <img src={icon50n}></img>  */}
      <dic className="banner-head">
        <img className="banner-icon" src={icon02d}></img>
        <h1 id="title">Weather Forecast</h1>
      </dic>
      <input type="text" id="city-input" placeholder="Enter a city name..."></input>
    </div>
  );
}
