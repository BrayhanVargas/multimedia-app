import React  from 'react';
import { OutButtons } from "../Atoms/OutButtons";

export const CardButtons = ( { enableDataVideo, enableDataAudio, enableDataImg } ) => {
    const handleDataVideo = (e) => {
        enableDataVideo(e);
    }
    const handleDataAudio = (e) => {
        enableDataAudio(e);
    }
    const handleDataImg = (e) => {
        enableDataImg(e);
    }
    return(
        <div className="d-flex justify-content-center col align-items-center">
            <OutButtons handleDataVideo={handleDataVideo} handleDataAudio={handleDataAudio} handleDataImg={handleDataImg}/>
        </div>
    )
}