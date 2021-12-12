import React, { useEffect }  from 'react';

export const Audio = ( { audioFilename }) => {
    useEffect ( () => {
        try{
            let audio = document.getElementById('myAudio');
            let source = document.createElement('source');
            source.setAttribute('src', require(`../Assests/${audioFilename}`));
            source.setAttribute('type', 'audio/mpeg');
            audio.appendChild(source);            
            audio.pause();
            audio.load();
            audio.play();            
        } catch (error) {
            console.warn(error)
        }
    }, [audioFilename])    
    return(
        <div>
            <audio id='myAudio' controls >
            </audio>
        </div>
    )
}

