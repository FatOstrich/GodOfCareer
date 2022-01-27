import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='row'>
        <div className='column'>
          <p>Here will be player's profile</p>
        </div>
        <div className='column'>
          <p>Here will be the events log</p>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <p>Here will be the operation buttons and inputs</p>
        </div>
        <div className='column'>
          <p>Here will be events' detail</p>
        </div>
      </div>
    </div>
  );
}

export default App;
