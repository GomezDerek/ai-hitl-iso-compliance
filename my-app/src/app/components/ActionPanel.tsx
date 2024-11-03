'use client'
import React, {useState, useEffect} from 'react';
import ComplianceTable from './complianceTable';

interface ActionPanelProps {
  appStage: number;
  complianceJudgements: {}
  // stage0OnClick: ()=>void,
}

export default function ActionPanel(props: ActionPanelProps)  {    
  const[panelJSX, setPanelJSX] = useState((<></>));
  
  function stage0OnClick(): void {
    // alert("Summon the AI agents");
    setPanelJSX(stage1)
  }
  
  const stage0 = (
    <section className="right-panel">
      <h2>Is your business ISO compliant?</h2>
      <h4>Ensure your corpus files are in compliance with ISO's!</h4>
      <p>Get started by uploading your corpus files and copies of the ISO regulations you need to comply with</p>
      <button className="primary" onClick={stage0OnClick}>Check Compliance</button>
    </section>
  );
  
  const stage1 = (
    <section className="right-panel">
      <button onClick={()=>setPanelJSX(stage0)}>{`<- Stage 0`}</button>
      <button onClick={()=>setPanelJSX(stage2)}>{`Stage 2 ->`}</button>
      <ComplianceTable judgements={props.complianceJudgements}/>
    </section>
  );

  const stage2 = (
    <section className="right-panel">
      <h2>Document Rewriting Section</h2>
      <button onClick={()=>setPanelJSX(stage1)}>{`<- Stage 1`}</button>
    </section>
  );

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