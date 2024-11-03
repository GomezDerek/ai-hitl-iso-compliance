'use client'
import React from 'react';

interface SelectedRow {
    "iso": string,
    "compliance": string,
    "reasoning": string,
}

interface Props {
    complianceDetails: SelectedRow,
    onClickProp: ()=>void
}

// eslint-disable-next-line
export default function ReasoningModal({ complianceDetails, onClickProp }: Props) {

    return (
        <>
            <div className="opacity-screen" onClick={onClickProp}></div>
            <div className="pop-up-modal" id="reasoning-modal">
                <button className="x-button" onClick={onClickProp}>x</button>
                <h2>{`${complianceDetails.iso} Compliance Details`}</h2>
                <div className="reasoning-container">
                    <p className="p2">{complianceDetails.reasoning}</p>
                </div>
            </div>
        </>
    )
}