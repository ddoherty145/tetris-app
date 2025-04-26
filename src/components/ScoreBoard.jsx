import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pause, resume, restart} from '../features/gameSlice';

export default function ScoreBoard() {
    const dispatch = useDispatch();
    const { score, isRunning, gameOver } = useSelector((state) => state.game);
    return (
        <div className ="score-board">
            <div>Score: {score}</div>
            <button className="score-board-button" onClick={() => {
                if (gameOver) return;
                if (isRunning) {
                    dispatch(pause());
                } else {
                    dispatch(resume());
                }
            }}
            > 
                {isRunning ? 'Pause' : 'Resume'}
            </button>
            <button className="score-board-button" onClick={() => dispatch(restart())}>Restart</button>
        </div>
    );
}