import React, { useState, useEffect } from 'react';
import '../App.css';


export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const countDownDate = new Date("Oct 26, 2025 09:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                setTimeLeft('EXPIRED');
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        };

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval); // Cleanup do intervalo
    }, []);

    return (
        <div className="countdown-card">
            <h2 className="countdown-title">Contagem Regressiva</h2>
            <div className="countdown-details">
                <p className="countdown-time">{timeLeft}</p>
            </div>
        </div>
    );
}