import React from "react";
import { ItemBox } from "./TodoItemStyle";
import { Link } from "react-router-dom";

export default function TodoItem({ data }) {
  const toggleState = () => {};

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
