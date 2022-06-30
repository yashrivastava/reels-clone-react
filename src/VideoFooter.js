import React from 'react'
import './VideoFooter.css'
import { Button, Avatar } from '@material-ui/core'
import { Favorite, ModeComment, MoreHoriz, MusicNote, Send } from '@material-ui/icons'
import Ticker from 'react-ticker'

function VideoFooter({url, likes, shares, channel, avatarSrc, song}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <Avatar src = { avatarSrc } />
            <h3>
                {channel} • <Button>Follow</Button>
            </h3>
        </div>
        <div className='videoFooter__ticker'>
            <MusicNote className='videoFooter_Icon'/>
            <p>{song}</p>
        </div>
        <div className='videoFooter__actions'>
            <div className='videoFooter__actionsLeft'>
                <Favorite />
                <ModeComment />
                <Send />
                <MoreHoriz />
            </div>

            <div className='videoFooter__actionsLeft'>
                <div className='videoFooter__stat'>
                    <Favorite />
                    <p>{likes}</p>
                </div>
                    <ModeComment />
                    <p>{shares}</p>
                <div className='videoFooter__stat'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoFooter