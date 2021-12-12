import React, { useState }  from 'react';
import { Button, Form } from 'react-bootstrap';

export const ButtonLoadFile = ({ handleFile, handleFileName, handleFileSize, handleFileType }) => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose');
    const [fileSize, setFileSize] = useState(0);
    const [fileType, setFileType] = useState('');
    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setFileSize(e.target.files[0].size);
        setFileType(e.target.files[0].type)
    };
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        handleFile(file);
        handleFileName(fileName, fileType);
        handleFileSize(fileSize, fileType);
        handleFileType(fileType);
        };
    return(
        <div>  
            <style type="text/css">
                {`
                .btn-flat {
                background-color: var(--color-btn);
                color: white;
                }
                `}
            </style>
            <Form onSubmit={onSubmit} >
                <Form.Group className="mb-2 " controlId="formFileSm" >
                    <Form.File 
                        id="custom-file"
                        onChange={onChange}
                        Style={"background-color: white; border-radius: 30px;"}
                    />
                </Form.Group>
                <Button variant="flat" type="submit" className="mb-2 rounded-pill">
                    Submit
                </Button>
            </Form>           
        </div>
    )
}


