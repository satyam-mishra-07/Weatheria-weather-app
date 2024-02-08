import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [location, setLocation] = useState("Delhi");
  async function getData(location) {
    try {
      const apikey = "eb33959a011fdb0cb397e794784fd3e7";
      let x = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apikey}`
      );
      let data = await x.json();
      // console.log(data)
      return data;
    } catch (error) {
      console.log(`${error}: Error Occured`);
    }
  }

  return (
    <>
      <Weather
        getData={getData}
        setLocation={setLocation}
        location={location}
      />
    </>
  );
}

export default App;
