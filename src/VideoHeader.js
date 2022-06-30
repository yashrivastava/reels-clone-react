import './VideoHeader.css';
import { ArrowBackIos, Camera } from '@material-ui/icons';
import { CameraAltOutlined } from '@material-ui/icons';


import React from 'react'

function VideoHeader() {
  return (
    <div className='videoHeader'>
        <ArrowBackIos />
        <h3>REELS</h3>
        <CameraAltOutlined />
    </div>
  )
}

export default VideoHeader