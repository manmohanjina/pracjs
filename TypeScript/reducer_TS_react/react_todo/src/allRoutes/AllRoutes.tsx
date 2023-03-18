import { Routes, Route } from "react-router-dom";
import User from "../page/user";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<>home page</>}></Route>
      <Route path="/contact" element={<>Contact Page</>}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  );
}
