import React from 'react';
import { connect } from 'react-redux';
import { tick } from './redux/actions/timer';
import Duration from './Duration';

export default class Timer extends React.Component {
    static ONE_SECOND = 1000;

    constructor(props) {
        super(props);
        this.state = {
            seconds: {
                duration: 0
            },
            minutes: {
                duration: 0
            },
        };
    }

    tick() {
        this.setState((state) => {
            let minutes = state.minutes.duration;
            let seconds = state.seconds.duration + 1;
            if (seconds > 59) {
                minutes++;
                seconds = 0;
            }
            return {
                seconds: {
                    duration: seconds
                },
                minutes: {
                    duration: minutes
                }
            }
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), Timer.ONE_SECOND);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div><Duration time={this.state.minutes} />:<Duration time={this.state.seconds} /></div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     seconds: state.timer.seconds,
//     minutes: state.timer.minutes,
// });

// const mapDispatchToProps = (dispatch) => ({
//     tick: () => dispatch(tick())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Timer);