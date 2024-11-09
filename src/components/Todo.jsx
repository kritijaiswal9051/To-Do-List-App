import { useEffect, useRef, useState } from "react";
import todo from "../assets/todo_icon.png";
import TodoItems from "../components/TodoItems";

function Todo() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (!inputText) return;
    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), text: inputText, isComplete: false },
    ]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) =>
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));

  const toggle = (id) =>
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todoList)),
    [todoList]
  );

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/*---------------------title------------------*/}
      <div className="flex items-center mt-7 gap-2">
        <img src={todo} alt="todo" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do-List</h1>
      </div>

      {/*---------------------input box------------------*/}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>
      {/*---------------------ToDo list------------------*/}
      <div>
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            {...item}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
