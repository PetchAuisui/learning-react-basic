import "./AddForm.css";

export default function Addform() {
    return (
        <section className="container">
            <form>
                <label>ชื่อประชากร</label>
                <input type="text" name="name" />
                <select name="gender">
                    <option>ชาย</option>
                    <option>หญิง</option>
                </select>
                <button type="submit" className="btn-save">Submit</button>
            </form>
        </section>
    );
}