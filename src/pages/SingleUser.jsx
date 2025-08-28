import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function SingleUser() {
  const val = useParams();
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  const getData = () => {
    return fetch(`https://reqres.in/api/users/${val.user_id}`, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => res.json());
  };

  const fetchandGetUser = async () => {
    try {
      setLoad(true);
      const data = await getData();
      setUser(data);
      setLoad(false);
    } catch (error) {
      setErr(true);
      setLoad(false);
    }
  };
  useEffect(() => {
    fetchandGetUser();
  }, []);

  if (load) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went Wrong...</h1>;
  }

  return (
    <div
      key={user?.data?.id}
      style={{ border: "1px solid red", margin: "20px", padding: "20px" }}
    >
      <img src={user?.data?.avatar} style={{ width: "250px" }} alt="" />
      <h3>
        {" "}
        Name:{user?.data?.first_name}
        {user?.data?.last_name}
      </h3>
      <h4>Id: {user?.data?.id}</h4>
      <h5>Email: {user?.data?.email}</h5>

      <hr />
      <img src="" alt="" />
      <h4>Body: {user?.support?.text}</h4>
      <p>
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur quod, in sed esse veniam eveniet eum recusandae quasi qui,
        vitae ab velit minima totam? Obcaecati, cumque fugit! Iure, labore
        magni?
      </p>
    </div>
  );
}
