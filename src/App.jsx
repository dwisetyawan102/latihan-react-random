import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import DocumentationPage from "./pages/DocumentationPage";
import CardPage from "./pages/CardPage";

export default function App() {
    return (
        <div>
            <Navigation />
            
            <Routes>
                <Route path="/" element={<DocumentationPage />}/>
                <Route path="/card" element={<CardPage />} />
            </Routes>
        </div>
    );
}