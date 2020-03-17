// Core
import React from 'react';

// Styles
import Styles from './styles.css';

export const Loading = (props) => {
    const { error, timedOut, pastDelay, retry } = props;

    if (error) {
        return (
            <div className = { Styles.loading }>
                Error! <button onClick = { retry }>Retry</button>
            </div>
        );
    } else if (timedOut) {
        return (
            <div className = { Styles.loading }>
                Taking a long time...
                <button onClick = { retry }>Retry</button>
            </div>
        );
    } else if (pastDelay) {
        return <div className = { Styles.loading }>Loading...</div>;
    }

    return null;
};
