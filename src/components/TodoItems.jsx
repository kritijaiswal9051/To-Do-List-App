import tick from "../assets/tick.png";
import nottick from "../assets/not_tick.png";
import delet from "../assets/delete.png";

function TodoItems({ text, id, isComplete, deleteTodo, toggle }) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center  cursor-pointer"
      >
        <img src={isComplete ? tick : nottick} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delet}
        alt="delet"
        className="w-4 cursor-pointer"
      />
    </div>
  );
}

export default TodoItems;
