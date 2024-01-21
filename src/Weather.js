import './App.css';
import React, { useEffect, useState } from "react";

function Weather() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      console.log("Latitude is:", lat);
      console.log("Longitude is:", long);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
      const result = await response.json();

      setData(result);
      console.log(result);
    };

    fetchData();
  }, [lat, long]);

  return (
    <div>
      <h2> Weather Page </h2>
      {/* Render your weather data here */}
    </div>
  );
}


export default Weather;
