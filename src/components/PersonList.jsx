import { useState } from "react";

import "./PersonList.css";
import User from "./User.jsx";

function PersonList({ data , deleteUser }) {

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
            <User key={item.id} item={item} deleteUser={deleteUser} />
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
