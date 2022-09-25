import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [isPrediction, setPrediction] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9733fa3f55099259e7fd6cc679561910&units=metric`;
    axios
      .get(url)
      .then(showTemperature)
      .catch((err) => setError(err.message));
  }
  function showTemperature(response) {
    if (response) {
      setTemperature(response.data.main.temp);
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      const iconUrl = response.data.weather[0].icon;
      setImage(`http://openweathermap.org/img/wn/${iconUrl}@2x.png`);
      setPrediction(true);
    }
  }

  function updateCity(event) {
    if (error) {
      setError("");
    }
    setCity(event.target.value);
  }
  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
          class="entercity"
        />
        <input type="submit" value="Search" class="search" />
      </form>
      {isPrediction && (
        <ul>
          <li>Temperature: {Math.round(temperature)}°C </li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={image} alt="icon" />
          </li>
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
