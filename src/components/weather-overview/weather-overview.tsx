import { capitalizeFirstLetter } from "../../utils/strings";
import Image from "next/image";

export type Weather = {
  main: string;
  description: string;
  icon: string;
};
interface WeatherOverviewProps {
  weather: Weather[];
  city: string;
}
const WeatherOverview = (props: WeatherOverviewProps) => {
  const { weather, city } = props;

  return (
    <div>
      <p className="text-base my-2 text-blue-600">{`Current weather condition in ${city} is: `}</p>
      <ul className="px-2 py-4">
        {weather.map((weatherItem, idx) => {
          return (
            <li key={idx} className="text-base my-2 text-blue-600">
              {`${capitalizeFirstLetter(
                weatherItem.main
              )}: ${capitalizeFirstLetter(weatherItem.description)}`}
              <Image
                alt={weatherItem.main}
                width="200"
                height="200"
                src={`http://openweathermap.org/img/wn/${weatherItem.icon}@4x.png`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeatherOverview;
