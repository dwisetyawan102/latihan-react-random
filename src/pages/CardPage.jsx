import React from "react";
import HeadCard from "../components/HeadCard";
import BodyCard from "../components/BodyCard";

export default function CardPage() {
    const card = {
        title: 'Ini adalah Dujul',
        time: '20-09-2023',
        content: 'Ini berisi teks yang akan ditampilkan pada isi dari sebuah card yang telah dibuat menggunakan react',
    }

    return (
        <div className="card">
            <HeadCard 
                title={card.title} 
                time={card.time} 
            />
            <BodyCard content={card.content}/>
        </div>
    );
}


