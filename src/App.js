import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [location, setLocation] = useState("Raniganj");
  async function getData(location) {
    try {
      const apikey = "584f8e7cb9e7b6e0fb86d1b3b1f66411";
      let x = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apikey}`);
      let data = await x.json();
      // console.log(data)
      return data 
    } catch (error) {
      console.log(`${error}: Error Occured`)
    }
  }

  return (
    <>
    <Weather getData = {getData} setLocation = {setLocation} location = {location}/>
    </>
  );
}

export default App;
