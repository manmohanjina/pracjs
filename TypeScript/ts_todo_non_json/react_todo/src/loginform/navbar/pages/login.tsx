import { useState } from "react";
import { login } from "../constant/types";

export default function Login() {
  const [text, setText] = useState<login>({
    email: "",
    password: "",
    token: "",
  });
  const handelChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setText({ ...text, [name]: value });
  };

  const hadnelLogin = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: "eve.holt@reqres.in", password: "123" }),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("helo");

    let key = JSON.parse(localStorage.getItem("key") || "");

    if (key == text.token && text.email && text.password) {
      hadnelLogin();
      alert("login success");
    } else {
      alert("para missing");
    }
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div>
          <input
            type="text"
            onChange={handelChange}
            name="email"
            value={text.email}
            placeholder="Enter Email"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            value={text.password}
            onChange={handelChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="token"
            placeholder="enter Token at time of registration"
            value={text.token}
            onChange={handelChange}
            maxLength={2}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}
