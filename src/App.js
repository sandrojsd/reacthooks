import React, { useState } from 'react';

function App() {
  const [techs, setTech] = useState(['ReactJs', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

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
      </fieldset>
    </>
  );
}

export default App;
