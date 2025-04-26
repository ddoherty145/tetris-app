import React from 'react';
import GridSquare from './GridSquare';
import { useSelector } from 'react-redux';
import { shapes } from '../utils';

export default function NextBlock() {
  const nextShape = useSelector((state) => state.game.nextShape);
  const shapeArray = shapes[nextShape] ? shapes[nextShape][0] : shapes[0][0];

  const grid = [];

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const isFilled = shapeArray[row] && shapeArray[row][col];
      const color = isFilled ? nextShape : 0;
      grid.push(<GridSquare key={`${row}${col}`} color={color} />);
    }
  }

  return <div className="next-block">{grid}</div>;
}