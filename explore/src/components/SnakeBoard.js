// SnakeBoard.jsx
import React from 'react';

const SnakeBoard = ({ snake, food, size }) => {
  const board = [];
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let cellClass = 'cell';
      
      const isSnake = snake.some(segment => segment.x === x && segment.y === y);
      if (isSnake) cellClass += ' snake';
      
      if (x === food.x && y === food.y) cellClass += ' food';
      
      board.push(<div key={`${x}-${y}`} className={cellClass}></div>);
    }
  }

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${size}, 20px)` }}>
      {board}
    </div>
  );
};

export default SnakeBoard;