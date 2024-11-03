'use client'
import React from 'react';

interface UploadModalProps {
    onClickProp: () => void;
    fileType: string;
}

export default function UploadModal({ onClickProp, fileType }: UploadModalProps) {
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();

        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        const files = fileInput.files;
        if (!files) return;

        Array.from(files).forEach((file) => {
            formData.append('files', file);
        });

        try {
            const response = await fetch(`/api/files/${fileType}`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Upload failed');
            }

            const result = await response.json();
            console.log('Upload successful:', result);
            onClickProp(); // Close modal on success
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('Failed to upload files. Please try again.');
        }
    };

    return (
        <>
            <div className="opacity-screen" onClick={onClickProp}></div>
            <div id="upload-modal">
                <button className="x-button" onClick={onClickProp}>x</button>
                <h2>{`Upload your ${fileType} files`}</h2>
                {/* <p className="p2">We'll sort them for you</p> */}
                {/* <label>
                    ISO
                    <input type="radio"></input>
                    </label>
                    <label>
                    Corpus
                    <input type="radio"></input>
                    </label> */}
                <div id="upload-box">
                    <input type="file" accept=".pdf,.docx" multiple onChange={handleFileUpload}></input>
                    <img src="upload-icon.svg" alt="bouncing upload icon" width="50px" height="50px"></img>
                    <p className="p2">.pdf, .docx</p>
                    <button type="submit" onClick={handleSubmit}>Upload</button>
                </div>
            </div>
        </>
    )
}