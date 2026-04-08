import { useState } from 'react';

function App() {
  const name = 'admin';
  const [age,setAge] = useState(30)
  const [data, setData] = useState([
  { id: 1, name: 'John Doe', gender:"male", age: 30 },
  { id: 2, name: 'Jane Smith', gender:"female", age: 25 },
  { id: 3, name: 'Bob Johnson', gender:"male", age: 40 },
  ]);

  console.table(data)
  return (
  <section>
    <h1>Learning React</h1>
    <h2>Welcome, {name}!</h2>
    <p>You are {age} years old.</p>
    <button onClick={()=>setAge(age + 1)}>add-age</button>
    <button onClick={()=>setAge(age - 1)}>subtract-age</button>
    <button onClick={()=>setAge(30)}>reset</button>
    <h3>จำนวนผู้ใช้งาน: {data.length} คน </h3>
    <u>
      {data.map((item) => (
      <li key ={item.id}>{item.name}</li>
      ))}
    </u>
  </section>
  )

}

export default App;
