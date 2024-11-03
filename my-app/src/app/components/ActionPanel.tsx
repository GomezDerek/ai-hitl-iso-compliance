'use client'
import React, {useState} from 'react';

interface ActionPanelProps {
  appStageProp: number;
}

const stage0 = (
  <section className="right-panel">
    <h2>Is your business ISO compliant?</h2>
    <h4>Ensure your corpus files are in compliance with ISO's!</h4>
    <p>Get started by uploading your corpus files and copies of the ISO regulations you need to comply with</p>
    <button className="primary" onClick={()=>alert("Summon the AI agents")}>Check Compliance</button>
  </section>
);

export default function ActionPanel(props: ActionPanelProps)  {    
  const[panelJSX, setPanelJSX] = useState(stage0);

  return(
        panelJSX
    )
}