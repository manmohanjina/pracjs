import { upload } from "@testing-library/user-event/dist/upload";
import { log } from "console";
import React, { useState } from "react";
import TodoCard from "./todoCard";

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
    { id: 1, titel: "hello world", status: "false" },
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

  const handelToggle = (ids: number | undefined) => {

    let update=singleTodo.filter((elm)=>elm.id==ids)

    let newdata=update[0].status=="complete"?"pending":"complete"

    let res=singleTodo.filter((elm)=>elm.id!==ids)

 setSingleTodo([...singleTodo,...res])

  };

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
        return <TodoCard key={i} elm={elm} fn={handelToggle} />;
      })}
    </>
  );
}
