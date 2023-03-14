import React, { useState } from "react";
import { login, register } from "../constant/types";
import "../form.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userregister, setUserRegister] = useState<register>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    token: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handelChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserRegister({ ...userregister, [name]: value });
  };

  const navigate = useNavigate();

  const handelSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    let token = Math.floor(Math.random() * 100);
    if (userregister.email == "" || userregister.name == "") return;
    setLoading(true);
    alert(`please note down token= ${token}`);
    localStorage.setItem("key", JSON.stringify(token));
    setTimeout(() => {
      setUserRegister({ ...userregister, token: token });

      setLoading(false);
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <div>
        {userregister.token ? `your token is ${userregister.token}` : null}{" "}
      </div>
      <form
        onSubmit={handelSubmit}
        style={{
          border: "1px solid red",
          padding: "10px",
          width: "20%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "10px",
          }}
          className="formdiv"
        >
          <div>
            <input
              type="text"
              name="name"
              onChange={handelChange}
              value={userregister.name}
              placeholder="Enter Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={userregister.email}
              onChange={handelChange}
              placeholder={"Enter Email"}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={userregister.password}
              onChange={handelChange}
              placeholder="Enter Password"
            />
          </div>
          <div>
            <input
              type="text"
              name="confirmPassword"
              value={userregister.confirmPassword}
              onChange={handelChange}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button type="submit">
              {loading ? "...processing" : "register"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
