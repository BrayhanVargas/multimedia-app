import React, { useState }  from 'react';
import { ButtonLoadFile } from "../Atoms/ButtonLoadFile";
import { Video } from '../Atoms/Video';
import { Audio } from '../Atoms/Audio';

export const CardFile = ({ handleName, handleSize, handleType }) => {
    const [videoFilename, setVideoFilename] = useState('');
    const [audioFilename, setAudioFilename] = useState('');
    const handleFile = (file) => {
        console.log(file)
    };
    const handleFileName = (fileName, fileType) => {
        handleName(fileName, fileType);
        if(fileType === 'video/mp4'){
            setVideoFilename(fileName)
        }
        if(fileType === 'audio/mpeg'){
            setAudioFilename(fileName)
        }
    };
    const handleFileSize = (fileSize, fileType) => {
        handleSize(fileSize, fileType);  
    };
    const handleFileType = (fileType) => {
        handleType(fileType);
    };
    return(
        <div className="mt-2">
            <div className="d-flex justify-content-center">
                <Video videoFilename={videoFilename} />
            </div>
            <div className="d-flex justify-content-center">
                <Audio audioFilename={audioFilename} />
            </div>
            <div className="d-flex justify-content-center">
                <ButtonLoadFile handleFile={handleFile} handleFileName={handleFileName} handleFileSize={handleFileSize} handleFileType={handleFileType}/> 
            </div>
        </div>
    )
}