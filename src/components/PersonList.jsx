import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", gender: "male", age: 30 },
    { id: 2, name: "Jane Smith", gender: "female", age: 25 },
    { id: 3, name: "Bob Johnson", gender: "male", age: 40 },
  ]);
  const [show, setShow] = useState(true);
  return (
    <>
      <h3>จำนวนผู้ใช้งาน: {data.length} คน </h3>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.gender == "male" ? boy : girl} width={50} height={50}/>
              {item.id} | {item.name} | {item.gender} | {item.age}
            </li>
          ))}
      </ul>
    </>
  );
}

export default PersonList;
