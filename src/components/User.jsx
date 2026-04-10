import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

export default function User({item , deleteUser }) {
    return (
        <>
          <li key={item.id} style={{borderStyle:"solid",borderColor:item.gender=="male" ? "blue" : "pink"}}>
              <img src={item.gender == "male" ? boy : girl} width={50} height={50}/>
              <p> ชื่อ: {item.name} อายุ: {item.age} เพศ: {item.gender}</p>
              <div className="control">
                <button style={{background:"red"}} onClick={() => deleteUser(item.id)}>Delete</button>
              </div>
            </li>
        </>
    );
}