import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('http://127.0.0.1:5000')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPerson(data);
      })
      .catch(err => console.log('Error', { cause: err }));
  }, []);

  const [person, setPerson] = useState({});

  return (
    <div>
      {person && (
        <>
          <h1>{person.name}</h1>
          <div>{person.isStudent ? 'student' : 'teacher'}</div>
        </>
      )}
    </div>
  );
}

export default App;
