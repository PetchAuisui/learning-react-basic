import Header from './components/Header.jsx';
import PersonList from './components/PersonList.jsx';
import Addform from './components/AddForm.jsx';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([
    // { id: 1, name: "John Doe", gender: "male", age: 30 },
    // { id: 2, name: "Jane Smith", gender: "female", age: 25 },
    // { id: 3, name: "Bob Johnson", gender: "male", age: 40 },
    // { id: 4, name: "Alice Williams", gender: "female", age: 35 },
    // { id: 5, name: "Emily Davis", gender: "female", age: 22 }
  ]);

  function deleteUser(id) {
    const result = data.filter(item => item.id !== id);
    setData(result)
  }

  return (
    <div className="App">
      <Header title="Learning React Basic" />
      <main>
        <Addform data={data} setData={setData} />
        <PersonList data={data} deleteUser={deleteUser} />
      </main>
    </div>
  )

}

export default App;
