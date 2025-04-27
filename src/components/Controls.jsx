import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveLeft, moveRight, moveDown, rotate } from "../features/gameSlice";

export default function Controls(){
    const dispatch = useDispatch();
    const { isRunning, speed } = useSelector((state) => state.game);

    const requestRef = useRef();
    const lastUpdateTimeRef = useRef(0);
    const progressTimeRef = useRef(0);

    const update = (time) => {
        requestRef.current = requestAnimationFrame(update);

        if (!isRunning) return;
        if (lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time;
        }
        const deltaTime = time - lastUpdateTimeRef.current;
        progressTimeRef.current += deltaTime;

        if (progressTimeRef.current > speed) {
            dispatch(moveDown());
            progressTimeRef.current = 0;
        }
        lastUpdateTimeRef.current = time;
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isRunning]);
    
    return (
        <div className="controls">
            {/* Left */}
            <button
                disabled={!isRunning}
                className="control-button"
                onClick={() => dispatch(moveLeft())}
        >
                Left
            </button>

            {/* Right */}
            <button
                disabled={!isRunning}
                className="control-button"
                onClick={() => dispatch(moveRight())}
            >
                Right
            </button>

            {/* Rotate */}
            <button
                disabled={!isRunning}
                className="control-button"
                onClick={() => dispatch(rotate())}
            >
                Rotate
            </button>

            {/* Down */}
            <button
                disabled={!isRunning}
                className="control-button"
                onClick={() => dispatch(moveDown())}
            >
                Down
            </button>
            </div>
    );
}