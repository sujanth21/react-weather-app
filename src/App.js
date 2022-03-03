import { useState, useEffect } from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard";
import WeatherInput from "./components/WeatherInput";

const App = () => {
  const [zipCode, setZipCode] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const getWeatherData = () => {
    const api_key = "f2a8b0759060050df07f4f734eaddc46";
    const api_base_url = "https://api.openweathermap.org/data/2.5/weather";
    const country_code = "au";

    fetch(
      `${api_base_url}?zip=${zipCode},${country_code}&appid=${api_key}&units=metric`
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        // console.log(weatherData);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const curr_city = weatherData.name;

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className='App'>
      <WeatherInput
        zipCode={zipCode}
        getWeatherData={getWeatherData}
        setZipCode={setZipCode}
      />
      {curr_city && <WeatherCard weatherData={weatherData} zipCode={zipCode} />}
    </div>
  );
};

export default App;
