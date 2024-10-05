import {useState} from 'react';
import Tile from '../Tile/Tile';
import './Board.module.scss'; // Assuming you have some SCSS for styling

const Board: React.FC = () => {
  const [letter, setLetter] = useState('');
  const rows = 6;
  const columns = 5;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, rowIndex: number, colIndex: number) => {
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault();
      const nextTile = document.querySelector<HTMLInputElement>(`[data-row="${rowIndex}"][data-col="${colIndex + 1}"]`);
      if (nextTile) {
        nextTile.focus();
      }
    }
  };

  const createBoard = () => {
    const board = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(
          <Tile
            key={`${i}-${j}`}
            letter={letter}
          />
        );
      }
      board.push(<div key={i} className="board-row">{row}</div>);
    }
    return board;
  };

  return (
    <div className="board">
      {createBoard()}
    </div>
  );
};

export default Board;