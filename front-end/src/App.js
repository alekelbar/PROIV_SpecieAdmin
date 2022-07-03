import { useState } from 'react'
import { useEffect } from 'react'

import { Header } from './components/Header';
import Species from './components/Species';
import { AddSpecieForm } from './components/AddSpecieForm';

import './App.css';

function App() {

  const [species, setSpecies] = useState([]);
  const [selected, setSelected] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/species')
      .then(data => data.json())
      .then(data => {
        setSpecies([...data[0]])
      });
  }, [])


  return (
    <div className="App">
      <Header />
      <main className="App-header w-full h-96">
        <div className='w-4/6 h-1/5'>
          {/* 70% */}
          <Species species={species} setSpecies={setSpecies} />
        </div>
        <div className='w-2/6 bg-gray-500 h-1/5'>
          {/* 30% */}
          <AddSpecieForm />
          <br />
        </div>
      </main>
    </div>
  );
}

export default App;
