import React from 'react'
import video from '../../static/1.mp4'
import { Video } from 'remotion'


function VideoComponent() {
    return (
        <div>
            <Video
                src={video}
                startFrom={0} // if video is 30fps, then it will start at 2s
                endAt={120} // if video is 30fps, then it will end at 4s
                style={{width: '100%'}}
                disableRemotePlayback
            />
        </div>
    )
}

export default VideoComponent
