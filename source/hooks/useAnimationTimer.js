import { useState, useEffect } from 'react';

export const useAnimationTimer = (duration = 1000, delay = 0) => {
    const [ elapsed, setTime ] = useState(0);

    useEffect(
        () => {
            let animationFrame = 0;
            let timerStop = null;
            let start = Date.now();

            const onFrame = () => {
                setTime(Date.now() - start);
                loop();
            };

            const loop = () => {
                animationFrame = requestAnimationFrame(onFrame);
            };

            const onStart = () => {
                timerStop = setTimeout(() => {
                    cancelAnimationFrame(animationFrame);
                    setTime(Date.now() - start);
                }, duration);

                start = Date.now();
                loop();
            };

            const timerDelay = setTimeout(onStart, delay);

            return () => {
                clearTimeout(timerStop);
                clearTimeout(timerDelay);
                cancelAnimationFrame(animationFrame);
            };
        },
        [ duration, delay ],
    );

    return elapsed;
};
