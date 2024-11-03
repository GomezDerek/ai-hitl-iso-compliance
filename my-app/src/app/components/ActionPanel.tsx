'use client'
import React, {useState} from 'react';

interface ActionPanelProps {
  appStage: number;
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
  const[panelJSX, setPanelJSX] = useState<number>(0);
  
  switch(props.appStage) {
    case 0:
      setPanelJSX(0);
    case 1:
      setPanelJSX(1);
    case 2:
      setPanelJSX(2);
    default:
      setPanelJSX(0);
  }

  return(
        panelJSX
    )
}