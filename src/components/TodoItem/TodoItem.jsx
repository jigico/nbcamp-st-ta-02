import React from "react";
import { ItemBox } from "./TodoItemStyle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { switchTodo } from "../../redux/modules/todos";

export default function TodoItem({ data }) {
  const dispatch = useDispatch();
  const toggleState = () => {
    dispatch(switchTodo(data.id));
  };

  return (
    <ItemBox>
      <Link to={`/${data.id}`}>
        {data.title}
        <p>{data.body}</p>
        {String(data.isDone)}
      </Link>
      <div>
        {data.isDone === true ? (
          <>
            <button>취소</button>
          </>
        ) : (
          <>
            <button onClick={toggleState}>완료</button>
          </>
        )}
        <button>삭제</button>
        <button>상세보기</button>
      </div>
    </ItemBox>
  );
}
