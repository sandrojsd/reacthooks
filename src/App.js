import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techs, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTech(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <fieldset>
        <legend>Tecnologias</legend>
        <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
        <button type="button" onClick={handleAdd}>
          {' '}
          Adicionar
        </button>
        <ul>
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <stron>Você tem {techSize} tecnologias</stron>
      </fieldset>
    </>
  );
}

export default App;
