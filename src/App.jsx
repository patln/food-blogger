// import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';


class App extends React.Component {
  constructor(props){
    super(props);
    
    const date = new Date().toString();
    console.log(date);
    this.state = {
      count: 0,
      time: date
    }
  }

  incrementCount(){
    const {count, time} = this.state;
    this.setState({count: count+1});
  }

  render(){
    const {count, time} = this.state;
  
    return (

      <React.Fragment>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <Header title={time} clicker={() => this.incrementCount()}/>
          <button onClick={() => this.setState({time: new Date().toString()})}></button>
          <div className="card">
            <button onClick={() => this.incrementCount()}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Testing about deployment changes without a master push
          </p>
      </React.Fragment>
      )
    }
    
}

export default App;
