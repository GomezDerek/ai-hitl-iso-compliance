'use client'
import './page.css';
import File from './components/file';
import React, { useState } from 'react';
import UploadModal from './components/uploadModal';
import ActionPanel from './components/ActionPanel';

export default function Home() {
  
  // eslint-disable-next-line
  const[isoFiles, setIsoFiles] = useState<string[]>(["ISO_file_1.pdf", "ISO_file_2.pdf", "ISO_file_3.pdf", "ISO_file_4.pdf"]);
  // eslint-disable-next-line
  const[corpusFiles, setCorpusFiles] = useState<string[]>(["Corpus_file_1.pdf", "Corpus_file_2.pdf"]);
  // eslint-disable-next-line
  const[selectedCorpus, setSelectedCorpus] = useState<string[]>([])
  const[isUploading, setIsUploading] = useState<boolean>(false);
  const[uploadFileType, setUploadFileType] = useState<string>("");
  // eslint-disable-next-line
  const[appStage, setAppStage] = useState<number>(0);

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

        <ActionPanel appStage={appStage}/>

      </main>

      <footer>
        <p className="p2">Made with ❤️ by Sahil, Jeff, Andres, and Derek</p>
      </footer>
    </div>
  );
}
