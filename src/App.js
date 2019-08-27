import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CustomInput from './components/CustomInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomInput />
        <CustomInput />
        <CustomInput />
      </div>
    );
  }
}

export default App;
