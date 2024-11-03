'use client'
import React from 'react';

interface UploadModalProps {
    onClickProp: () => void;
    fileType: string;
}

export default function UploadModal({ onClickProp, fileType }: UploadModalProps) {
    return (
        <>
            <div className="opacity-screen" onClick={onClickProp}></div>
            <div id="upload-modal" className="pop-up-modal">
                <button className="x-button" onClick={onClickProp}>x</button>
                <h2>{`Upload your ${fileType} files`}</h2>
                <div id="upload-box" onClick={()=>alert("Trigger file explorer")}>
                    <img src="upload-icon.svg" alt="bouncing upload icon" width="50px" height="50px"></img>
                    <p className="p2">.pdf, .docx</p>
                </div>
            </div>
        </>
    )
}