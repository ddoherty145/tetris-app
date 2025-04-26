import { createSlice } from '@reduxjs/toolkit';
import { defaultState, nextRotation, canMoveTo } from '../utils';

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
        rotate: (state) => {
            const { shape, grid, x, y, rotation } = state;
            const newRotation = nextRotation(shape, rotation);

            if (canMoveTo(shape, grid, x, y, newRotation)) {
                state.rotation = newRotation;
            } 
            return state;
        },
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