import React from 'react';

export default function Counter({number, onClickAddNumber}) {
    return (
        <>
            <div>
                <h2>{number || 0}</h2>
            </div>
            <div>
                <button onClick={onClickAddNumber}>Add</button>
            </div>
        </>
    );
}