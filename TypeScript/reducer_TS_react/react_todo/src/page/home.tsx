import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login_FN, logout_FN } from "../redux-arch/app_reducer/actions";
import { storeRes } from "../redux-arch/app_reducer/const";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogin = () => {
    dispatch(login_FN());
    navigate("/user");
  };

  const islogin = useSelector((store: storeRes) => store.appreducer.islogin);

  const handelLogout = () => {
    dispatch(logout_FN());
  };

  return (
    <>
      {islogin ? <h1></h1> : <h1>please login to continue</h1>}

      <button onClick={islogin ? handelLogout : handelLogin}>
        {islogin ? "LogOut" : "Login"}
      </button>
    </>
  );
}
