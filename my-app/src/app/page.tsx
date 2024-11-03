'use client'
import './page.css';
import File from './file';
import React, { useState } from 'react';
import UploadModal from './uploadModal';

export default function Home() {
  
  // eslint-disable-next-line
  const[isoFiles, setIsoFiles] = useState<string[]>(["ISO_file_1.pdf", "ISO_file_2.pdf", "ISO_file_3.pdf", "ISO_file_4.pdf"]);
  // eslint-disable-next-line
  const[corpusFiles, setCorpusFiles] = useState<string[]>(["Corpus_file_1.pdf", "Corpus_file_2.pdf"]);
  // eslint-disable-next-line
  const[selectedCorpus, setSelectedCorpus] = useState<string[]>([])
  const[isUploading, setIsUploading] = useState<boolean>(true);
  const[uploadFileType, setUploadFileType] = useState<string>("");

  function addFilesOnClick(fileType: string) {
    setIsUploading(true);
    setUploadFileType(fileType);
  }

  return (
    // <div className={styles.page}>
    <div id="page">

        { isUploading ? <UploadModal fileType={uploadFileType} onClickProp={()=>setIsUploading(false)}/> : null }
      
        <header>
          <h1 id="title">ComPro</h1>
          <h2 id="subtitle">built for AI Tinkerers' 2024 AI Human-in-the-Loop Hackathon</h2>
        </header>
 
      <main>
        
        <section id="left-panel">
          
          <div className="file-section-header">
            <p>ISO files</p>
            <button className="primary" onClick={()=>addFilesOnClick("ISO")}>+</button>
          </div>
          <ul className="file-list" id="iso-file-list">
            { isoFiles.map( (fileName, i) => <File name={fileName} key={i}/>) }
          </ul>

          <div className="file-section-header" id="corpus-files">
            <p>Corpus files</p>
            <button className="primary" onClick={()=>addFilesOnClick("Corpus")}>+</button>
          </div>
          <ul className="file-list">
          { corpusFiles.map( (fileName, i) => <File name={fileName} key={i}/>) }
          </ul>
        
        </section>

        <section id="right-panel">
          <h2>Is your business ISO compliant?</h2>
          <h4>Ensure your corpus files are in compliance with ISO's!</h4>
          <p>Get started by uploading your corpus files and copies of the ISO regulations you need to comply with</p>
          <button className="primary" onClick={()=>alert("Summon the AI agents")}>Check Compliance</button>
        </section>

      </main>

      <footer>
        <p className="p2">Made with ❤️ by Sahil, Jeff, Andres, and Derek</p>
      </footer>
    </div>
  );
}
