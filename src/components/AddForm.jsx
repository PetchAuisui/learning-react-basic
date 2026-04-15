import "./AddForm.css";
import { useState } from "react";

export default function Addform() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("ชาย");
    return (
        <section className="container">
            <form>
                <label>ชื่อประชากร</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option>ชาย</option>
                    <option>หญิง</option>
                </select>
                <button type="submit" className="btn-save">Submit</button>
            </form>
        </section>
    );
}