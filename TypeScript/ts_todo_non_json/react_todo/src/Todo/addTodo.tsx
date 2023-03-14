import { upload } from "@testing-library/user-event/dist/upload";
import { log } from "console";
import React, { useState } from "react";
import TodoCard, { dataprops } from "./todoCard";

export type todo = {
  id?: number;
  titel: string;
  status: string;
};

export default function PostTodo() {
  const [todo, setTodo] = useState<todo>({
    titel: "",
    status: "",
  });

  const [singleTodo, setSingleTodo] = useState<todo[]>([
    { id: 1, titel: "hello world", status: "pending" },
  ]);

  const handelChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    let id = new Date().getTime();

    setTodo({ ...todo, [name]: value, id: id });
  };
  const handelPost = () => {
    setSingleTodo([...singleTodo, todo]);
    //console.log(singleTodo, "single todo postfn");
    //setTodo({ id: 0, titel: "", status: "" });
  };

  const handelToggle = (el: dataprops) => {
    let update = singleTodo.filter((elm) => elm.id !== el.id);

    let single = singleTodo.filter((elm) => elm.id === el.id);

    let status = el.status === "completed" ? "pending" : "completed";

    let up = { ...single[0], status: status };

    setSingleTodo([...update, up]);
  };



  const handelDel=(id:number|undefined)=>{
     
    const filter=singleTodo.filter((elm)=>elm.id!==id)
    
    

     setSingleTodo(filter)
  }


  return (
    <>
      <div>
        <input
          type="text"
          name="titel"
          value={todo.titel}
          onChange={handelChange}
        />
      </div>
      <div>
        <select
          name="status"
          onChange={(e) => handelChange(e)}
          value={todo.status}
        >
          <option>--select status--</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div>
        <button onClick={handelPost}>postTodo</button>
      </div>

      {singleTodo.map((elm, i) => {
        return <TodoCard key={i} elm={elm} fn={handelToggle} del={handelDel} />;
      })}
    </>
  );
}
