import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./PersonList.css";

function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", gender: "male", age: 30 },
    { id: 2, name: "Jane Smith", gender: "female", age: 25 },
    { id: 3, name: "Bob Johnson", gender: "male", age: 40 },
  ]);
  const [show, setShow] = useState(true);
  const myStyle = {
    color: "green",
    fontSize: "20px",
  };

  return (
    <div className="container">
      <div className="header">
      <h3 style={myStyle}>จำนวนผู้ใช้งาน: {data.length} คน </h3>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </div>

      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.gender == "male" ? boy : girl} width={50} height={50}/>
              <p> ชื่อ: {item.name} อายุ: {item.age} เพศ: {item.gender}</p>
              <div className="control">
                <button style={{background:"red"}}>Delete</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
