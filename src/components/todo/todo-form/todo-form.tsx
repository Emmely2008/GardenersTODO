import { useEffect, useRef, useState } from "react";
import { Weather } from "../../weather-overview/weather-overview";
import TodoListItem, {
  WeatherType
} from "../todo-list/todo-list-item/todo-list-item";

interface TodoFormProps {
  addItem: (
    value: TodoListItem["value"],
    condition: TodoListItem["condition"]
  ) => void;
}

const TodoForm = (props: TodoFormProps) => {
  const { addItem } = props;

  const [selectedWeatherTypes, setSelectedWeatherTypes] = useState<
    TodoListItem["condition"]
  >([]);

  const formRef = useRef<HTMLFormElement>();
  const itemNameRef = useRef<HTMLInputElement>();

  const onSubmit = (event) => {
    event.preventDefault();
    const newItemValue = itemNameRef.current.value;

    if (newItemValue) {
      addItem(newItemValue, selectedWeatherTypes);
      formRef.current.reset();
      setSelectedWeatherTypes([]);
    }
  };
  const handleCheckboxChanged = (event) => {
    if (event.target.checked) {
      const newValue = event.target.value;
      if (!selectedWeatherTypes.includes(newValue)) {
        const newWeatherTypes = [newValue, ...selectedWeatherTypes];
        setSelectedWeatherTypes(newWeatherTypes);
      }
    } else {
      const newWeatherTypes = [
        ...selectedWeatherTypes.filter((day) => day !== event.target.value)
      ];
      setSelectedWeatherTypes(newWeatherTypes);
    }
  };
  return (
    <form ref={formRef} onSubmit={onSubmit} className="">
      <div className="p-2 w-full flex justify-center">
        <input
          type="text"
          ref={itemNameRef}
          className="shadow flex-grow appearance-none border rounded  py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add a new todo..."
        />
        <button
          type="submit"
          className="flex-no-shrink p-2 border-2 rounded text-black border-black hover:text-white hover:bg-black"
        >
          Add new
        </button>
      </div>
      <div className="px-2 py-2 mb-6 flex flex-wrap">
        {Object.values(WeatherType).map((item, idx) => {
          return (
            <label key={idx} className="inline-flex items-center mr-4 ml-2">
              <input
                type="checkbox"
                className="form-checkbox"
                value={item}
                checked={selectedWeatherTypes.includes(item)}
                onChange={handleCheckboxChanged}
              />
              <span className="ml-2 text-gray-700">{item}</span>
            </label>
          );
        })}
      </div>
    </form>
  );
};
export default TodoForm;
