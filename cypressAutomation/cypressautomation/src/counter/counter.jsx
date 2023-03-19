import axios from "axios";
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/counter")
      .then((res) => {
        setcount(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handeladd = () => {
    let payload = {
      count: count + 1,
    };

    axios.post("http://localhost:3000/counter", payload).then((res) => {
      setcount(res.data.count);
    });
  };

  //data-testid is our coustom attribute ;
  //we have created the attribute to check weather our own coustom attribute and we have created it because to test weather the below div is pressent or not in the dom tree;

  return (
    <>
      <h1 data-testid="count-div">count:{count}</h1>
      <button data-testid="btncount" onClick={handeladd}>inc</button>
      <button>dec</button>
    </>
  );
}
