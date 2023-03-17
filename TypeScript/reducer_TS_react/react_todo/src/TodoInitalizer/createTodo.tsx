import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todo } from "../redux-arch/action";
import { actionType, todoType } from "../redux-arch/constant";
export default function CreateTodo() {
  const [text, setText] = useState<string>("");

  const handelChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setText(value);
  };

  const dispatch = useDispatch();
  const data = useSelector((store: todoType) => {
    return store.todos;
  });

  const handelPost = () => {
    dispatch(todo(text));
    
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter todo"
        name="set"
        onChange={handelChange}
      />
      <button onClick={handelPost}>Add todo</button>


{
    data.map((elm,i)=>{
        return <div key={i}  >{elm}</div>
    })
}


    </>
  );
}
