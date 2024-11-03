'use client'
import './page.css';
import File from './file';
import React, { useState } from 'react';

export default function Home() {

  const[isoFiles, setIsoFiles] = useState<string[]>(["ISO_file_1.pdf", "ISO_file_2.pdf", "ISO_file_3.pdf", "ISO_file_4.pdf"]);
  const[corpusFiles, setCorpusFiles] = useState<string[]>(["Corpus_file_1.pdf", "Corpus_file_2.pdf"]);
  const[selectedCorpus, setSelectedCorpus] = useState<string[]>([])

  return (
    // <div className={styles.page}>
    <div id="page">
      
        <header>
          <h1 id="title">ComPro</h1>
          <h2>built for the AI Tinkerer's Human-in-the-Loop Hackathon</h2>
          <p>by Sahil, Jeff, Andres, Derek</p>
        </header>
 
      {/* <main className={styles.main}> */}
      <main>
        
        <section id="left-panel">
          
          <div className="file-section-header">
            <p>ISO files</p>
            <button className="primary">+</button>
          </div>
          <ul className="file-list" id="iso-file-list">
            { isoFiles.map( (fileName, i) => <File name={fileName}/>) }
          </ul>

          <div className="file-section-header" id="corpus-files">
            <p>Corpus files</p>
            <button className="primary">+</button>
          </div>
          <ul className="file-list">
          { corpusFiles.map( (fileName, i) => <File name={fileName}/>) }
          </ul>
        
        </section>

        <section id="right-panel">
          <h2>Is your business ISO compliant?</h2>
          <p>Ensure your selected corpus files are in compliance with the provided ISO's</p>
          <button className="primary">Check Compliance</button>
        </section>

      </main>

      {/* <footer className={styles.footer}> */}
      <footer>
      </footer>
    </div>
  );
}
