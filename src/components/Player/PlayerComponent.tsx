import React, {useEffect, useRef} from 'react'
import { Player, PlayerRef} from '@remotion/player'
import VideoComponent from '../Components/VideoComponent'



const MyComposition = () => {
    return (
        <VideoComponent />
    )
}

function PlayerComponent() {

    const playerRef = useRef<PlayerRef>(null);
    
    useEffect(() => {
        if (playerRef.current) {
          console.log(playerRef.current.getCurrentFrame())
        }
      }, [])

    return (
        <Player
            ref={playerRef}
            durationInFrames={30 * 10}
            compositionWidth={600}
            compositionHeight={300}
            fps={30}
            component={MyComposition}
            controls={true}
            showVolumeControls={true}
            allowFullscreen={true}
            clickToPlay={true}
            spaceKeyToPlayOrPause={true}
            style={{border: '1px solid #333'}}
            // Many other optional props are available.
        />
    )
}

export default PlayerComponent
