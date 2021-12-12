import React, { useState} from "react";
import { CardFile } from "../Molecules/CardFile";
import { CardButtons } from "../Molecules/CardButtons";
import { CardDataFile } from "../Molecules/CardDataFile";
import '../Organism/CardMultimedia.css' 

export const CardMultimedia = () => {
    const [videoFilename, setVideoFilename] = useState('');
    const [audioFilename, setAudioFilename] = useState('');
    const [videoFilesize, setVideoFilesize] = useState(0);
    const [audioFilesize, setAudioFilesize] = useState(0);
    const [videoFiletype, setVideoFiletype] = useState('NA');
    const [audioFiletype, setAudioFiletype] = useState('NA');
    const [showDataVideo, setShowDataVideo] = useState(false);
    const [showDataAudio, setShowDataAudio] = useState(false);
    const [showDataImg, setShowDataImg] = useState(false);
    const handleName = (fileName, fileType) => {
        if(fileType === 'video/mp4'){
            setVideoFilename(fileName)
        }
        if(fileType === 'audio/mpeg'){
            setAudioFilename(fileName)
        }
        setShowDataVideo(false);
        setShowDataAudio(false)
    };
    const handleSize = (fileSize, fileType) => {
        if(fileType === 'video/mp4'){
            setVideoFilesize(fileSize)
        }
        if(fileType === 'audio/mpeg'){
            setAudioFilesize(fileSize)
        }
    };
    const handleType = (fileType) => {
        if(fileType === 'video/mp4'){
            setVideoFiletype(fileType)
        }
        if(fileType === 'audio/mpeg'){
            setAudioFiletype(fileType)
        }
    };
    const enableDataVideo = (e) => {
        !!e ? setShowDataVideo(true) : setShowDataVideo(false);
    }
    const enableDataAudio = (e) => {
        !!e ? setShowDataAudio(true) : setShowDataAudio(false);
    }
    const enableDataImg = (e) => {
        !!e ? setShowDataImg(true) : setShowDataImg(false);
    }
    return (
        <div>
            <div className="cards">
                <div className="border card__file mt-2" Style={"border-radius: 5px;"}>
                    <CardFile 
                    handleName={handleName} 
                    handleSize={handleSize} 
                    handleType={handleType}
                    />
                </div>
                <div  className="border card__buttons mt-2" Style={"border-radius: 5px;"}>
                    <CardButtons enableDataVideo={enableDataVideo} enableDataAudio={enableDataAudio} enableDataImg={enableDataImg}/> 
                </div>
            </div>
            <div className=" mt-2" Style={"border-radius: 10px;"}>
                <CardDataFile 
                videoFilename={videoFilename} 
                videoFiletype={videoFiletype} 
                videoFilesize={videoFilesize} 
                showDataVideo={showDataVideo}
                audioFilename={audioFilename} 
                audioFiletype={audioFiletype} 
                audioFilesize={audioFilesize} 
                showDataAudio={showDataAudio}
                showDataImg={showDataImg}/>
            </div>
        </div>
    )
}