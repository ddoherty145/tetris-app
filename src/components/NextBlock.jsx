import React from 'react';
import GridSquare from './GridSquare';

export default function NextBlock() {
    const block = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    const grid = block.map((rowArray, row) =>
        rowArray.map((square, col) => (
            <GridSquare key={`${row}${col}`} color={square} />
        ))
    );

    return <div className="next-block">{grid}</div>

}