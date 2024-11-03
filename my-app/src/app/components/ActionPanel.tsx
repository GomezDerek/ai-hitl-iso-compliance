'use client'
import React from 'react';

export default function ActionPanel() {
    return(
        <section className="right-panel">
          <h2>Is your business ISO compliant?</h2>
          <h4>Ensure your corpus files are in compliance with ISO's!</h4>
          <p>Get started by uploading your corpus files and copies of the ISO regulations you need to comply with</p>
          <button className="primary" onClick={()=>alert("Summon the AI agents")}>Check Compliance</button>
        </section>
    )
}