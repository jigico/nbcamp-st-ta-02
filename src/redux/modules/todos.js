// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};

const initialState = [
  // {
  //   id: shortid.generate(),
  //   title: "",
  //   body: "",
  //   isDone: false
  // }
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title, content } = action.payload;
      const newObj = {
        id: shortid.generate(),
        title,
        body: content,
        isDone: false
      };
      const newArr = state;
      newArr.push(newObj);
      return [...newArr];

    case "DELETE_TODO":
      return; //TODO: 여기 작성

    case "SWITCH_TODO":
      const { id } = action.payload;
      state.find((el) => {
        return el.id === id;
      });
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
