import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'; 
import VideoFooter from './VideoFooter';

function VideoCard({url, likes, shares, channel, avatarSrc, song}) {

  const [IsVideoPlaying, setIsVideoPlaying] = 
    useState(false);

  const videoRef = useRef(null);
  
  const onVideoPress = () => {
    if(IsVideoPlaying) {
        //pause
        videoRef.current.pause();
        setIsVideoPlaying(false);
    }

    else {
        //play
        videoRef.current.play();
        setIsVideoPlaying(true);
    }
        
  } 

  return (
    <div className='videoCard'>

        <VideoHeader/>

        <video
            ref={videoRef}
            onClick={onVideoPress}

            className='videoCard__player'
            src={url}
            alt='Reel Video'
            loop='true'
        />

        <VideoFooter 
            channel = {channel}
            avatarSrc = {avatarSrc}
            song = {song}
            url = {url}
            likes = {likes}
            shares = {shares}
        />
    </div>
  )
}

export default VideoCard