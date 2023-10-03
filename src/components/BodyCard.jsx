import React from "react";

export default function BodyCard({content}) {
    return (
        <div className="body-card">
            <p>
                {content}
            </p>
            <button>Click me!</button>
        </div>
    );
}