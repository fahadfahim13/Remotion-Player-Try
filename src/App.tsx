import React from 'react';
import './App.css';
import PlayerComponent from './components/Player/PlayerComponent';
import 'antd/dist/antd.css';
import VideoInput from './components/Components/VideoInput'

function App() {
  return (
    <div className="App">
      <PlayerComponent />
      <br />
      <VideoInput />
    </div>
  );
}

export default App;
