import { useState, useEffect } from 'react';

export const useInterval = <T>(handler: T, interval: number) => {
    const [ intervalId, setIntervalId ] = useState<number>();
    useEffect(() => {
        const id = setInterval(handler, interval);
        setIntervalId(id);

        return () => clearInterval(id);
    }, []);

    return () => clearInterval(intervalId);
};
