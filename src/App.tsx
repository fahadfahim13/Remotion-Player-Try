import React from 'react';
import './App.css';
import PlayerComponent from './components/Player/PlayerComponent';
import 'antd/dist/antd.css';
import Base from "./components/Konva/Base";

function App() {

  return (
    <div className="App" style={{backgroundColor: 'darkgray', width: '100%', height: '100%'}}>
      <PlayerComponent />
        {/*<Base />*/}
        {/*<FfmpegConnect />*/}
    </div>
  );
}

export default App;
