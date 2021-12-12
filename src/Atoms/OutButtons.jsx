import React  from 'react';
import { Button } from 'react-bootstrap';

export const OutButtons = ({handleDataVideo, handleDataAudio, handleDataImg}) => {
    const handleClickDataVideo = (e) => {
        handleDataVideo(e);
    }
    const handleClickDataAudio= (e) => {
        handleDataAudio(e);
    }
    const handleClickDataImg= (e) => {
        handleDataImg(e);
    }
    return(
        <div Style={"width:250px;"}>
            <style type="text/css">
                {`
                .btn-flat {
                background-color: var(--color-btn);
                color: white;
                }
                `}
            </style>
            <Button variant="flat" onClick={(e) => handleClickDataImg(e)} type="button" className="col rounded-pill mb-4">Visualizar imagenes</Button>
            <Button variant="flat" onClick={(e) => handleClickDataVideo(e)} type="button" className="col rounded-pill mb-4" >Especificaciones del video</Button>
            <Button variant="flat" onClick={(e) => handleClickDataAudio(e)} type="button" className="col rounded-pill mb-4">Especificaciones del Audio</Button>
        </div>
    )
}