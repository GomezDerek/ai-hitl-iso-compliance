'use client'
import React, {useState, useEffect} from 'react';

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

const stage1 = (<></>);
const stage2 = (<></>);

export default function ActionPanel(props: ActionPanelProps)  {    
  const[panelJSX, setPanelJSX] = useState(stage0);
  
  useEffect(()=>{
    switch(props.appStage) {
      case 0:
        setPanelJSX(stage0);
      case 1:
        setPanelJSX(stage1);
      case 2:
        setPanelJSX(stage2);
      default:
        setPanelJSX(stage0);
    }
  }, []);

  return(
        panelJSX
    )
}