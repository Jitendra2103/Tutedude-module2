import { Component } from "react";

class ClassCounter extends Component {

    state = {
        count: 0
    }

    render() {
        return (
            <>
                <div className="custom-center">
                    <h3>Made through Class Component : Current Count : {this.state.count} </h3>
                    <button className="counter-button" onClick={() => this.setState({ count: this.state.count + 1 })}>Increase Count</button>
                </div>
            </>
        )
    }
}

export default ClassCounter