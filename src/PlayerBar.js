import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDocumentTitle } from './hooks';

export default function PlayerBar(props) {
    const playing = useSelector((state) => state.playing);
    useDocumentTitle(`Playing ${playing ? playing.name : 'nothing'}`);

    function renderPlaying() {
        return (
            <div>
                <strong>{playing.name}</strong>
                <br/>
                {playing.artists.map(a => a.name).join(', ')}
            </div>
        );
    }

    return (
        <div className="PlayerBar">
            {playing ? renderPlaying() : "Nothing playing"}
        </div>
    );
}