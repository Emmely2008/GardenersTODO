import { WeatherType } from "../components/todo/todo-list/todo-list-item/todo-list-item";

 
export const getWeatherIcon = (main:WeatherType )=>{
    switch(main) {
        case WeatherType.CLEAR:
 return "01d";
        case WeatherType.RAIN:
          return "10d"
        case WeatherType.THUNDERSTORM:
          return "11d"
        case WeatherType.DRIZZLE:
          return "09d"
        case WeatherType.SNOW:
          return "13d"
        case WeatherType.CLOUDS:
          return "03d"
        case WeatherType.FOG:
          return "50d"
          
        default: return "\u2601"
          
      }
}