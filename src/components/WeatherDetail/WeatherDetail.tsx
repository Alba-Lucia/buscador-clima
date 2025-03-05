import { Weather } from "../../types";
import { formatTemperature } from "../../utils";
import styles from "./WeatherDetail.module.css";

type WeatherDatailProps = {
  weather: Weather;
};

export const WeatherDetail = ({ weather }: WeatherDatailProps) => {
  return (
    <div className={styles.container}>
      <h2>Clima de: {weather.name}</h2>
      <p className={styles.current}>
        {formatTemperature(weather.main.temp)}&deg;C
      </p>
      <div className={styles.temperatures}>
        <p>
          Min: <span>{formatTemperature(weather.main.temp_min)}&deg;</span>
        </p>
        <p>
          Max: <span>{formatTemperature(weather.main.temp_max)}&deg;</span>
        </p>
      </div>
    </div>
  );
};
