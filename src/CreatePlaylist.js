import React, { useState } from 'react';
import {
    FormControl,
    InputGroup,
    Button
} from 'react-bootstrap';

export default function CreatePlaylist(props) {
    const [name, setName] = useState("");

    function sendName() {
        props.onCreate(name, 0);
        setName("");
    }

    return (
        <InputGroup>
            <FormControl
                placeholder="New playlist"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <InputGroup.Append>
                <Button onClick={() => sendName()}>Add</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}
