// App.js
import React from 'react';
import Board from './Board';

function App() {
  return (
    <div className="App bg-gray-600 h-[100vh]">
      <h1 className='text-[4rem] max-sm:text-[3rem] text-center pt-5 mb-[5rem] font-bold'>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}

export default App;
