import React from 'react';
import { connect } from 'react-redux';
import { tick } from './redux/actions/timer';
import Duration from './Duration';

class Timer extends React.PureComponent {
    static ONE_SECOND = 1000;

    componentDidMount() {
        console.log("did mount!");
        // this.interval = setInterval(() => this.props.tick(), Timer.ONE_SECOND);
    }

    componentDidUpdate() {
        console.log("updated!");
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        console.log("re-render!");
        return (
            <div>{/*<Duration value={this.props.minutes} />:<Duration value={this.props.seconds} />*/}</div>
        );
    }
}

const mapStateToProps = (state) => ({
    minutes: state.timer.minutes,
    seconds: state.timer.seconds,
});

const mapDispatchToProps = (dispatch) => ({
    // tick: () => dispatch(tick())
});

export default Timer; //connect(mapStateToProps, mapDispatchToProps)(Timer);