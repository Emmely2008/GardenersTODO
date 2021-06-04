import Image from "next/image";
import { getWeatherIcon } from "../../../../utils/get-weather";

export enum WeatherType {
  THUNDERSTORM = "Thunderstorm",
  DRIZZLE = "Drizzle",
  RAIN = "Rain",
  SNOW = "Snow",
  CLEAR = "Clear",
  CLOUDS = "Clouds",
  FOG = "Fog"
}

type TodoListItem = {
  done: boolean;
  value: string;
  condition: WeatherType[];
  created: number;
  index: number;
};

interface TodoListItemProps {
  item: TodoListItem;
  itemIndex: number;
  removeItem: (index: number) => void;
  markTodoDone: (index: number) => void;
}
const TodoListItem = (props: TodoListItemProps) => {
  const { item, itemIndex, removeItem, markTodoDone } = props;
  const onClickClose = () => {
    removeItem(itemIndex);
  };
  const onClickDone = () => {
    markTodoDone(itemIndex);
  };

  var todoClass = item.done ? "done" : "undone";
  return (
    <div
      className="border m-2 rounded-xl overflow-hidden bg-gray-100
      p-4"
      key={itemIndex}
    >
      <div className={"flex mb-4 items-center " + todoClass}>
        {!item.done && (
          <>
            <p className="flex-grow text-grey-darkest"> {item.value}</p>
            <div>
              {item.condition.map((type, idx) => {
                return (
                  <Image
                    key={idx}
                    alt={type}
                    title={type}
                    height="56"
                    width="56"
                    src={`http://openweathermap.org/img/wn/${getWeatherIcon(
                      type
                    )}@2x.png`}
                  />
                );
              })}
            </div>
            <button
              className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
              aria-hidden="true"
              onClick={onClickDone}
            >
              Done
            </button>
          </>
        )}
        {item.done && (
          <>
            <p className="flex-grow line-through text-green-600">
              {" "}
              {item.value}
            </p>
            <button
              className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400"
              aria-hidden="true"
              onClick={onClickDone}
            >
              Not done
            </button>
          </>
        )}
        <button
          type="button"
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
          onClick={onClickClose}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
