import React, { useState } from 'react';

export default function Hook(props) {
    const [numClickedA, setNumClickedA] = useState(0);
    const [numClickedB, setNumClickedB] = useState(0);

    return (
        <div>
            <button onClick={() => setNumClickedA(numClickedA + 1)}>Click A</button>
            <button onClick={() => setNumClickedB(numClickedB + 1)}>Click B</button>
            <div>Clicked A {numClickedA} times.</div>
            <div>Clicked B {numClickedB} times.</div>
        </div>
    );
}