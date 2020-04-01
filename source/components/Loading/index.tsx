// Core
import React from 'react';

export const Loading = (props: any) => {
    const { error, timedOut, pastDelay, retry } = props;

    if (error) {
        return (
            <div>
                Error! <button onClick = { retry }>Retry</button>
            </div>
        );
    } else if (timedOut) {
        return (
            <div>
                Taking a long time...
                <button onClick = { retry }>Retry</button>
            </div>
        );
    } else if (pastDelay) {
        return <div>Loading...</div>;
    }

    return null;
};
