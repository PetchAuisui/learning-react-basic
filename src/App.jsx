import { useState } from 'react';

function App() {
  const name = 'admin';
  const [age,setAge] = useState(30)

  return (
  <section>
    <h1>Learning React</h1>
    <h2>Welcome, {name}!</h2>
    <p>You are {age} years old.</p>
    <button onClick={()=>setAge(age + 1)}>add-age</button>
    <button onClick={()=>setAge(age - 1)}>subtract-age</button>
    <button onClick={()=>setAge(30)}>reset</button>
  </section>
  )

}

export default App;
