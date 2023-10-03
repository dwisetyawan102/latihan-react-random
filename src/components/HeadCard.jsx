import React from "react";

export default function HeadCard({title, time}) {
    return (
        <div className="head-card">
            <h3>{title}</h3>
            <p>{time}</p>
        </div>
    );
}