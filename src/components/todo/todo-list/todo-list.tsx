import React, { useEffect, useState } from "react";
import TodoListItem from "./todo-list-item/todo-list-item";
interface TodoListProps{
  items:TodoListItem[];
  removeItem : (index:number) => void;
  markTodoDone : (index:number) => void;
}
const TodoList = (props:TodoListProps) => {

  const {items, removeItem, markTodoDone} = props;


      return (
        <ul className="list-group"> { items.map((item, index) => {
          return (
           <TodoListItem key={index} item={item} itemIndex={index} removeItem={removeItem} markTodoDone={markTodoDone} />
         );
        })} </ul>)
   
  }
  export default TodoList