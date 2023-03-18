import { Routes, Route } from "react-router-dom";
import Home from "../page/home";
import User from "../page/user";
import Private from "../private/Private";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<>Contact Page</>}></Route>
      <Route path="/user" element={
      <Private><User />
      </Private>
      }></Route>
    </Routes>
  );
}
