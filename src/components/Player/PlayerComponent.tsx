import React, {Fragment, useEffect, useRef, useState} from 'react'
import { Player, PlayerRef} from '@remotion/player'
import VideoComponent from '../Components/VideoComponent'
import AnimatedImage from "../Components/AnimatedImage";



const MyComposition = (props: {play: boolean}) => {
    return (
        <Fragment>
            <VideoComponent playVideo={props.play} />
            {/*<AnimatedImage playVideo={props.play} />*/}
        </Fragment>
    )
}

function PlayerComponent() {

    const playerRef = useRef<PlayerRef>(null);
    const [play, setPlay] = useState(false)
    
    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.addEventListener('play', () => {
                setPlay(true)
              })

            playerRef.current.addEventListener('pause', () => {
                setPlay(false)
              })
        }
      }, [])

    return (
        <Player
            ref={playerRef}
            durationInFrames={30 * 10}
            compositionWidth={600}
            compositionHeight={300}
            fps={30}
            component={() => MyComposition({play})}
            controls={true}
            showVolumeControls={true}
            allowFullscreen={true}
            clickToPlay={true}
            spaceKeyToPlayOrPause={true}
            style={{border: '1px solid #333', marginLeft: '30%', marginTop: '5%'}}
            // Many other optional props are available.
        />
    )
}

export default PlayerComponent
