// import myVideo from './Assests/deskinprogress.mp4'
import React, { useEffect }  from 'react';

export const Video = ( { videoFilename }) => {
    useEffect ( () => {
        try{
            let video = document.getElementById('myVideo');
            let source = document.createElement('source');
            source.setAttribute('src', require(`../Assests/${videoFilename}`));
            video.setAttribute('src', require(`../Assests/${videoFilename}`));
            source.setAttribute('type', 'video/mp4');
            video.appendChild(source);            
            video.pause();
            video.load();
            video.play();            
        } catch (error) {
            console.warn(error)
        }
    }, [videoFilename])    
    return(
        <div>            
            <video id="myVideo" width="320" height="240" controls></video>
        </div>
    )
}

