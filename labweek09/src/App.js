import logo from './logo.svg';
import './App.css';
import MyInfo from './MyInfo'
import {Fragment} from "react";
import Hello from "./Hello";

function App() {
  return (

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

            <Fragment>
                <Hello/>
                <MyInfo/>
            </Fragment>


      </header>

  );
}

export default App;
