import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataerr_FN,
  datareq_FN,
  datasucc_FN,
} from "../redux-arch/app_reducer/actions";
import { datasucc } from "../redux-arch/app_reducer/actionType";
import { resDataType, storeRes } from "../redux-arch/app_reducer/const";
import UserCard from "./userCard";

export default function User() {
  const [p, setP] = useState<number>(1);
  const dispatch = useDispatch();

  const getData = async (p: number) => {
    return fetch(`https://reqres.in/api/users?page=${p}`).then((res) =>
      res.json()
    );
  };

  useEffect(() => {
    dispatch(datareq_FN());
    getData(p)
      .then((res: resDataType) => {
        dispatch(datasucc_FN(res));
      })
      .catch((error) => {
        dispatch(dataerr_FN());
      });
  }, [p]);

  const { data, loading, error } = useSelector((store: storeRes) => {
    return {
      data: store.appreducer.data?.data,
      loading: store.appreducer.isloading,
      error: store.appreducer.isError,
    };
  });

  if(loading){
    return <h1>...loading</h1>
  }
   

  return (
    <>
<UserCard data={data} />

      <button disabled={p == 1} onClick={() => setP((prev) => prev - 1)}>
        prev
      </button>
      <button>{p}</button>
      <button onClick={() => setP((prev) => prev + 1)}>next</button>
    </>
  );
}
