import React, { useState, useEffect } from 'react';
import './CircularTimer.css';

export default function CircularTimer({ initialSeconds = 600 }) {
    const [timeLeft, setTimeLeft] = useState(initialSeconds);
    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        if (timeLeft <= 0) return;
        const intervalId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const offset = circumference - (timeLeft / initialSeconds) * circumference;
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');

    return (
        <div className="timer-wrapper">
            <svg className="timer-svg" width="140" height="140" viewBox="0 0 140 140">
                <circle
                    className="timer-bg"
                    cx="70" cy="70" r={radius}
                />
                <circle
                    className="timer-progress"
                    cx="70" cy="70" r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{
                        stroke: timeLeft < 60 ? 'var(--status-waiting)' : 'var(--neon-blue)',
                        transition: 'stroke-dashoffset 1s linear, stroke 0.3s ease'
                    }}
                />
            </svg>
            <div className="timer-text">
                <span className="timer-time" style={{ color: timeLeft < 60 ? 'var(--status-waiting)' : 'var(--text-primary)' }}>
                    {mins}:{secs}
                </span>
                <span className="timer-label">متبقية للوصول</span>
            </div>
        </div>
    );
}
