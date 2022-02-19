import { useState } from "react";

const Home =() => {
  const [todos, setTodos] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { todo: e.target.todo.value, backgroundColor: "white" }]);
    e.target.todo.value = "";
  };

  const onDeleteHandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const onColorChangeHandler = (index, e) => {
    const newTodos = [...todos];
    newTodos[index].backgroundColor = e.target.value;
    setTodos(newTodos);
  }

  const delBtn = (index) => <button key={index} onClick={() => onDeleteHandler(index)}>Delete</button>;

  const todosList = todos.map(({todo, backgroundColor}, index) => <>
    <li
      key={index}
      style={{ backgroundColor }}
    >
      <h2>{todo}</h2>
      {delBtn(index)}
      <input type="color" onInput={(e) => onColorChangeHandler(index, e)} />
    </li>
  </>)

  return <>
    <h1>Todo List</h1>
    <form onSubmit={onSubmitHandler}>
      <input type="text" name="todo" />
      <button type="submit">Add</button>
    </form>

    <ul>
      {todosList}
    </ul>
  </>;
}

export default Home;
