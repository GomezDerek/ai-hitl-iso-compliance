// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>ComPro</h1>
        {/* <h2>built for the AI Tinkerer&apos;s Human-in-the-Loop Hackathon</h2> */}
        <h2>built for the AI Tinkerer's Human-in-the-Loop Hackathon</h2>
        <p>by Sahil, Jeff, & Derek</p>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
