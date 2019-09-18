import React from "react";
import {increment,decrement,reset} from "../actions"
import {connect} from "react-redux";

const mapStateToProps = (state) => {
 console.log(state);
  return {
    counter : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment : () => dispatch(increment()),
    decrement : () => dispatch(decrement()),
    reset : () => dispatch(reset()),
  }
}

class Counter extends React.Component {
  constructor(props){
    super(props);
  }
  render()
  {
    return (
      <div>
        <div>
        {this.props.counter}
        </div>
        <div>
        <button onClick={this.props.increment}>increment by 1</button>
        <button onClick={this.props.decrement}>decrement by 1</button>
        <button onClick={this.props.reset}>reset</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

