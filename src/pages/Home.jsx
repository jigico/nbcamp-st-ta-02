import React from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";

const Home = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Home;
