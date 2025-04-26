import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from '../utils';

console.log(defaultState, 'defaultState');

export const gameSlice = createSlice({
    name: 'game',
    initialState: defaultState(),
    reducers: {
        pause: () => {},
        resume: () => {},
        moveleft: () => {},
        moveRight: () => {},
        moveDown: () => {},
        rotate: () => {},
        gameOver: () => {},
        restart: () => {},
    },
});

// Action creators
export const {
    moveLeft,
    moveRight,
    moveDown,
    rotate,
    pause,
    resume,
    gameOver,
    restart,
} = gameSlice.actions;

export default gameSlice.reducer;