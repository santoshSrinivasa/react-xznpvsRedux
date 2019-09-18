import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Counter from "./component/counter";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/counterReducer";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
}

const store = createStore(reducer);

render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
