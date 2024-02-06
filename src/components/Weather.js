import React, { useState } from "react";
import { useEffect } from "react";
import "./Weather.css";
import "../images/search_icon.png";

export default function Weather(props) {
  const [Temp, setTemp] = useState("");
  const [Temp_Min, setTemp_Min] = useState("");
  const [Temp_Max, setTemp_Max] = useState("");
  const [Humidity, setHumidity] = useState("");
  const [locName, setlocName] = useState("");
  const [conName, setconName] = useState("");
  const [Speed, setSpeed] = useState("");
  const [Clouds, setClouds] = useState("");
  const [Desc, setDesc] = useState("");
  const [Pressure, setPressure] = useState("");
  const [Icon, setIcon] = useState("");

  async function handleSearch() {
    try {
      props.setLocation(document.getElementsByClassName("search").value);
      let Wdata = await props.getData(props.location);
      console.log(Wdata);


      setTemp(Wdata.main.temp);
      setlocName(Wdata.name);
      setconName(Wdata.sys.country);
      setTemp_Min(Wdata.main.temp_min);
      setTemp_Max(Wdata.main.temp_max);
      setHumidity(Wdata.main.humidity);
      setSpeed(Wdata.wind.speed);
      setClouds(Wdata.clouds.all);
      setDesc(Wdata.weather[0].main);
      setPressure(Wdata.main.pressure);
      setIcon(Wdata.weather[0].icon);
    } catch (error) {
      console.log(`${error} Error `);
    }
  }

  useEffect(() => {
    // This function will run when the component is first loaded
    handleSearch();
  }, []);

  function handleOnChange(event) {
    props.setLocation(event.target.value);
  }

  return (
    <>
      <div className="main">
        <form action="#">
          <input
            type="text"
            id="location"
            className="search"
            placeholder="Location"
            value={props.location}
            onChange={handleOnChange}
          />
          <button onClick={handleSearch} className="btn">
            <img src={require("../images/search_icon.png")} alt="search" />
          </button>
        </form>
        <div className="display">
          <span className="wethData" id="iconDiv">
            <img src={`https://openweathermap.org/img/wn/${Icon}@2x.png`} id="icon"/>
          </span>
          <h1 className="wethData" id="temp">
            {parseFloat(Temp - 273.15).toFixed(2)}&#176;C
          </h1>
          <span className="wethData" id="name">
            {locName},{conName}
          </span>
          <span className="wethData" id="desc">
            {Desc}
          </span>
          <span className="wethData" id="min">
            {parseFloat(Temp_Min - 273.15).toFixed(2)}&#176;C
          </span>
          <span className="wethData" id="max">
            {parseFloat(Temp_Max - 273.15).toFixed(2)}&#176;C
          </span>
          <span className="wethData" id="humidity">
            Humidity: {Humidity}
          </span>
          <span className="wethData" id="speed">
            Wind Speed: {Speed}km/h
          </span>
          <span className="wethData" id="clouds">
            Clouds: {Clouds}
          </span>
          <span className="wethData" id="pressure">
            Pressure: {Pressure}hpa
          </span>
        </div>
      </div>
    </>
  );
}
