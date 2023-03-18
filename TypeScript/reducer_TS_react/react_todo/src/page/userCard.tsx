import { resDataar } from "../redux-arch/app_reducer/const";

type props = {
  data: resDataar[];
};

export default function UserCard({ data }: props) {
  return (
    <>
      <div>
        {data?.map((elm) => {
          return (
            <div key={elm.id}>
              <div>
                <h1>
                  {" "}
                  {elm.first_name}
                  {elm.last_name}
                </h1>
              </div>
              <div>
                <img src={elm.avatar} alt="" />
              </div>
              <div>
                <h1>{elm.email}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
