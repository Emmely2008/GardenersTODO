import Head from "next/head";
import React, { useState } from "react";
import { Weather } from "../weather-overview/weather-overview";
import TodoForm from "./todo-form/todo-form";
import TodoList from "./todo-list/todo-list";
import TodoListItem, {
  WeatherType
} from "./todo-list/todo-list-item/todo-list-item";
interface TodoProps {
  initItems: TodoListItem[];
  currentWeather: WeatherType;
}

const Todo = (props: TodoProps) => {
  const { initItems, currentWeather } = props;
  const [todoItems, setTodoItems] = useState<TodoListItem[]>(initItems);
  // const currentWeather = WeatherType.CLEAR;

  const addItem = (
    value: TodoListItem["value"],
    condition: TodoListItem["condition"]
  ) => {
    const newItem: TodoListItem = {
      index: todoItems.length + 1,
      value: value,
      done: false,
      created: Date.now(),
      condition: condition
    };

    const newTodos = [newItem, ...todoItems];
    setTodoItems(newTodos);
  };
  const removeItem = (index) => {
    const newTodos = [...todoItems];
    newTodos.splice(index, 1);
    setTodoItems(newTodos);
  };
  const markTodoDone = (index) => {
    const newTodos = [...todoItems];
    newTodos[index].done = !newTodos[index].done;
    setTodoItems(newTodos);
  };

  const compareFn = (item1: TodoListItem, item2: TodoListItem) => {
    const hasConditionItem1 = item1.condition.includes(currentWeather);
    const hasConditionItem2 = item2.condition.includes(currentWeather);
    if (item1.done && item2.done) {
      return 0;
    }
    if (!item1.done && item2.done) {
      return -1;
    }
    if (item1.done && !item2.done) {
      return 1;
    }
    if (hasConditionItem1 && hasConditionItem2) {
      return item1.condition.length - item2.condition.length;
    }
    if (hasConditionItem1 && !hasConditionItem2) {
      return -1;
    }
    if (!hasConditionItem1 && hasConditionItem2) {
      return 1;
    }

    return item1.condition.length - item2.condition.length;
  };

  return (
    <>
      <TodoForm addItem={addItem} />
      <TodoList
        items={todoItems.sort(compareFn)}
        removeItem={removeItem}
        markTodoDone={markTodoDone}
      />
    </>
  );
};
export default Todo;
