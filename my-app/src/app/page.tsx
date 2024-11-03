// import Image from "next/image";
import './page.css'

export default function Home() {
  return (
    // <div className={styles.page}>
    <div className="page">
      
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
          <ul className="file-list">
            <li>ISO_file_1.pdf</li>
            <li>ISO_file_2.pdf</li>
          </ul>

          <div className="file-section-header">
            <p>Corpus files</p>
            <button className="primary">+</button>
          </div>
          <ul className="file-list">
            <li>
              Corpus_file_1.pdf 
              {/* <input type="checkbox"></input>
              <span className="checkmark"></span> */}
            </li>
            <li>Corpus_file_2.pdf</li>
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
