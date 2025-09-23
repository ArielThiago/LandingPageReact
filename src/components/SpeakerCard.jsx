import React, { useState } from 'react';
import '../App.css';

export default function SpeakerCard({ name, title, imageUrl, detail }) {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    return (
        <div className="speaker-card">
            <img src={imageUrl} alt={`${name}'s picture`} className="speaker-image" />
            <h2 className="speaker-name">{name}</h2>
            <p className="speaker-title">{title}</p>
            <button className="ver-detalhes" onClick={() => setIsDetailsVisible(!isDetailsVisible)}>
                {isDetailsVisible ? 'Ocultar Detalhes' : 'Ver Detalhes'}
            </button>
            {isDetailsVisible && (
                <div className="speaker-details">
                    <p>{detail}</p>
                </div>
            )}
        </div>
    );
}

