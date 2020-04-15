import React from 'react';
import { connect } from 'react-redux';
import { tick } from './redux/actions/timer';

class Timer extends React.Component {
    static ONE_SECOND = 1000;

    componentDidMount() {
        this.interval = setInterval(() => this.props.tick(), Timer.ONE_SECOND);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>00:{this.props.seconds.toString().padStart(2, "0")}</div>
        );
    }
}

const mapStateToProps = (state) => ({
    seconds: state.timer.seconds,
});

const mapDispatchToProps = (dispatch) => ({
    tick: () => dispatch(tick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);