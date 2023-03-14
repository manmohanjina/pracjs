 export type dataprops = {
  id?: number;
  titel: string;
  status: string;
};
type props = {
  elm: dataprops;
  fn: (el:dataprops ) => void;
  del:(id:number|undefined)=>void
};

export default function TodoCard({ elm, fn,del }: props) {
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
          <button onClick={() => fn(elm)}>Toggle</button>
        </div>
        <div>
          <button onClick={()=>del(elm.id)} >del</button>
        </div>
      </div>
    </>
  );
}
