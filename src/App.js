import { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase'

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  
  
  }, [])
  

  return (
    <div className="app">

      <div className="app__top">
        <img className="logo__image" src="https://cdn-icons-png.flaticon.com/512/214/214337.png"/>
        <h3>REELS</h3>
      </div>

      <div className="app__videos">
        {/*scrollable vid container*/}     

        {/*video*/}
        {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
          <VideoCard 
            channel = {channel}
            avatarSrc = {avatarSrc}
            song = {song}
            url = {url}
            likes = {likes}
            shares = {shares}
        />
        ))}
      </div>

    </div>
  );
}

export default App;
