import React from 'react';
import Board from './components/Board/Board';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board />
    </div>
  );
}

export default App;