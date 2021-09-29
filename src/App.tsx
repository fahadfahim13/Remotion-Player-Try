import React from 'react';
import './App.css';
import PlayerComponent from './components/Player/PlayerComponent';
import 'antd/dist/antd.css';
import FfmpegConnect from "./components/ffmpeg/ffmpeg_connect";

function App() {

  return (
    <div className="App">
      <PlayerComponent />
        <FfmpegConnect />
    </div>
  );
}

export default App;
