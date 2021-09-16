import React from 'react'
import video from '../../static/1.mp4'
import { Video } from 'remotion'
import { AnimateKeyframes } from 'react-simple-animate'
import {Animated} from "react-animated-css";


function VideoComponent(props: {playVideo: boolean}) {

    const { playVideo } = props

    return (
        <AnimateKeyframes
            play={playVideo}
            pause={!playVideo}
            iterationCount="infinite"
            direction="alternate-reverse"
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
                endAt={30 * 10} // if video is 30fps, then it will end at 4s
                style={{width: '100%'}}
                // style={{...style, width: '100%'}}
                disableRemotePlayback
            />
         {/* </Animated> */}
        </AnimateKeyframes>
    )
}

export default VideoComponent
