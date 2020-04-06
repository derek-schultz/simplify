import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Clicky extends React.Component {
    render() {
        return (
            <div>
                <Button onClick={() => alert("Yay!")}>Click me!</Button>
            </div>
        );
    }
}
