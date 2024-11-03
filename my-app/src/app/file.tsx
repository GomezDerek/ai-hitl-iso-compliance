// import React, { useState, useEffect } from "react";
import React from "react";
// import "./file.css"
import "./page.css"


type Props = {
    name: string,
    url?: string 
}

export default function File(props: Props) {
    return (
        <li>
            {props.name}
            {/* <label>
                <input type="checkbox"></input>
                <span className="checkmark"></span>
            </label> */}
        </li>
    )
}