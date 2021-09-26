import React from 'react';
import './App.css';
import PlayerComponent from './components/Player/PlayerComponent';
import 'antd/dist/antd.css';
import VideoInput from './components/Components/VideoInput'
import Rive, {useRive, useStateMachineInput} from "rive-react";

function App() {
    const STATE_MACHINE_NAME = 'button';
    const INPUT_NAME = 'onClick';

    const { RiveComponent, rive } = useRive({
        src: "../../static/basketball.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
    });
    const onClickInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME
    );

  return (
    <div className="App">
      <PlayerComponent />
      <br />
      <VideoInput />
        <br />
        <div style={{ height: '500px', width: '500px', border: '1px solid red' }}>
        <RiveComponent onMouseEnter={() => rive && rive.play()}
                       onMouseLeave={() => rive && rive.pause()}
                       onClick={() => onClickInput?.fire()} />
        </div>
    </div>
  );
}

export default App;
