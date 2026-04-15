import "./AddForm.css";
import { useState } from "react";

export default function Addform(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState("");

    const { data, setData } = props;

    function saveData(e) {
        e.preventDefault()
        const person = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            gender: gender,
            age: age
        }
        console.log(person);
        setData([...data, person])
        setName("");
        setGender("male");
        setAge("");
    }

    return (
        <section className="container">
            <form onSubmit={saveData}>
                <label>ชื่อประชากร</label>
                <input className="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>อายุ</label>
                <input className="age-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                </select>
                <button type="submit" className="btn-save" disabled={name.trim()===""}>Submit</button>
            </form>
        </section>
    );
}