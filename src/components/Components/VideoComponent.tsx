import React, {CSSProperties} from 'react'
import video from '../../static/1.mp4'
import { Video } from 'remotion'
import { AnimateKeyframes } from 'react-simple-animate'
import {animated, useSpring} from "react-spring";
import FlowImage from '../../static/flow 1.png'


function VideoComponent(props: { playVideo: boolean }) {

    const { playVideo } = props

    const videoStyle = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        zIndex: -1,
        width: '100%'
    } as CSSProperties

    const boxStyle = useSpring({
        loop: playVideo,
        // loop: false,
        from: { rotateY: 0 },
        to: { rotateY: 180 },
    })

    const ctaStyle = useSpring({
        // loop: { reverse: playVideo },
        from: {x: -600 },
        to: { x: 0},
        config: { duration: 500, delay: 2000 },
    })

    return (
        <AnimateKeyframes
            play={playVideo}
            pause={!playVideo}
            iterationCount="infinite"
            // direction="alternate-reverse"
            direction="alternate"
            // duration={30 * 5}
            keyframes={[]}
        >
            <Video
                src={video}
                startFrom={0} // if video is 30fps, then it will start at 2s
                endAt={30 * 10} // if video is 30fps, then it will end at 4s
                style={videoStyle}
                // style={{...style, width: '100%'}}
                disableRemotePlayback
            />
            <animated.div
                style={{
                    ...boxStyle,
                }}
            >
                <img src={FlowImage} style={{width: 200, height: 200, left: 0, top: 0}} alt="flowcode" />
            </animated.div>

            <animated.div
                style={{
                    width: 600,
                    height: 50,
                    backgroundColor: '#46e891',
                    borderRadius: 0,
                    ...ctaStyle,
                }}
            />

        </AnimateKeyframes>
    )
}

export default VideoComponent
