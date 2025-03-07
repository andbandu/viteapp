import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Vite + React + Express</h1>
      <p>{message}</p>
    </div>
  );
}


export default App
