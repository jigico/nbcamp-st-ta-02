import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

export default function TodoForm() {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;

    if (!title.trim()) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!content.trim()) {
      alert("내용을 입력해주세요");
      return;
    }
    dispatch(addTodo({ title, content }));
    console.log("실행");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">제목</label>
        <input id="title" name="title" type="text" />
        <label htmlFor="content">내용</label>
        <input id="content" name="content" type="text" />
        <button>등록</button>
      </form>
    </div>
  );
}
