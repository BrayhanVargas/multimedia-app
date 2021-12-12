import React from "react";
import { CarouselImg } from "../Atoms/CarouselImg";

export const CardDataFile = ( {videoFilename, videoFiletype , videoFilesize, showDataVideo, 
    audioFilename, audioFiletype , audioFilesize, showDataAudio, showDataImg} ) => {
    return(
        <div className="mt-2">
        {!!showDataVideo ?
        <div className="text-center text-light">
            <div>
            {videoFilename} 
            </div>
            <div>
            {videoFiletype}
            </div>
            <div>
            {videoFilesize}
            </div>
        </div> : null}
        {!!showDataAudio ?
        <div className="text-center text-light">
            <div>
            {audioFilename} 
            </div>
            <div>
            {audioFiletype}
            </div>
            <div>
            {audioFilesize}
            </div>
        </div> : null}
        {!!showDataImg ?
        <div>
            <CarouselImg />
            </div> : null}
        
        </div>
        
    )
}