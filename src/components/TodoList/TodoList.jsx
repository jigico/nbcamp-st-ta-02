import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
  const data = useSelector((state) => state.todos);
  console.log(data);
  return (
    <ul>
      {data.map((el) => (
        <TodoItem key={el.id} data={el} />
      ))}
    </ul>
  );
}
