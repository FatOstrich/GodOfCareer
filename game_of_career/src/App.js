import logo from './logo.svg';
import './App.css';
import Game_events from './Game_events';
import Player_profiles from './Player_profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          A bored Game
        </p>

      </header>
      <div class="row">
        <div class='column'>
          <Player_profiles />
        </div>
        <div class="column">
          <Game_events />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <p>
            this is the profiles window
          </p>
        </div>
        <div class="column">
          <p>
            this is the profiles window
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
