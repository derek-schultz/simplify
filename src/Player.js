import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
    renderPlaying() {
        return (
            <div>
                <strong>{this.props.playing.name}</strong>
                <br/>
                {this.props.playing.artists.map(a => a.name).join(', ')}
            </div>
        );
    }

    render() {
        return (
            <div className="Player">
                {this.props.playing ? this.renderPlaying() : "Nothing playing"}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    playing: state.playing,
});

export default connect(mapStateToProps)(Player);