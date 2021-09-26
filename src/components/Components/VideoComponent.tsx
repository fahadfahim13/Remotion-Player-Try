import React from 'react'
import video from '../../static/1.mp4'
import { Video } from 'remotion'
import { AnimateKeyframes } from 'react-simple-animate'
import Rive from 'rive-react';
import { useRive, useStateMachineInput } from 'rive-react';
// import {Animated} from "react-animated-css";
// import basketball from '../../static/basketball.riv'



function VideoComponent(props: {playVideo: boolean}) {

    const { playVideo } = props
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
        <AnimateKeyframes
            play={playVideo}
            pause={!playVideo}
            iterationCount="infinite"
            // direction="alternate-reverse"
            direction="alternate"
            duration={0.3}
            keyframes={[
                'transform: rotateX(0) rotateY(-90deg) rotateZ(0)',
                'transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
            ]}
        >
        {/* <Animated animationIn="flipInY" animationOut="flipOutY" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
            <Video
                src={video}
                startFrom={0} // if video is 30fps, then it will start at 2s
                endAt={30 * 2} // if video is 30fps, then it will end at 4s
                style={{width: '100%'}}
                // style={{...style, width: '100%'}}
                disableRemotePlayback
            />
            <RiveComponent onClick={() => onClickInput?.fire()} />

         {/* </Animated> */}
        </AnimateKeyframes>
    )
}

export default VideoComponent
