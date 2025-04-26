import React from 'react';

export default function ScoreBoard() {
    return (
        <div className ="score-board">
            <div>Score: 0</div>
            <div>Levels: 1</div>
            <button className="score-board-button" onClick={() => {
                //...
            }}>Play</button>
            <button className="score-board-button" onClick={() => {
                //...
            }}>Restart</button>
        </div>
    );
}