// Weather.js

import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://wttr.in/?format=j1');
        const result = await response.json();

        console.log("Weather Data:", result);

        setWeatherData(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Weather Page</h2>
      <WeatherCard weatherData={weatherData} />
      {/* Render other components or data as needed */}
    </div>
  );
};

export default Weather;
