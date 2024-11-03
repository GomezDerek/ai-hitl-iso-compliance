'use client'
import React from 'react';

// eslint-disable-next-line
interface Props {
    reasoning: string,
    onClick: ()=>void
}

// eslint-disable-next-line
export default function ReasoningModal(props: Props) {

    return (
        <>
            <p>{props.reasoning}</p>
        </>
    )
}