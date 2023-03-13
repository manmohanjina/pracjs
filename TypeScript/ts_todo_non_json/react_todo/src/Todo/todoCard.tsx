type dataprops = {
  id?: number;
  titel: string;
  status: string;
};
type props = {
  elm: dataprops;
  fn: (id: number|undefined ) => void;
};

export default function TodoCard({ elm, fn }: props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          border: "1px solid red",
          width: "20%",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <div>
          <h3>{elm.titel}</h3>
        </div>
        <div>
          <h4>{elm.status}</h4>
          <button onClick={() => fn(elm?.id)}>Toggle</button>
        </div>
      </div>
    </>
  );
}
