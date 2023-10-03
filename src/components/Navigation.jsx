import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <Link to="/">
                Documentation
            </Link>
            <Link to="/card">
                Card
            </Link>
        </nav>
    );
}