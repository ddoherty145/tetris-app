import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {},
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
    moveleft,
    moveRight,
    moveDown,
    rotate,
    pause,
    resume,
    gameOver,
    restart,
} = gameSlice.actions;

export default gameSlice.reducer;