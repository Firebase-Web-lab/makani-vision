import React from 'react';

// Generates a mock QR pattern using SVG
export default function QRCodeSVG({ size = 150 }) {
    const rects = [];
    const gridSize = 21; // 21x21 matrix for Version 1 QR

    const isPositionElement = (r, c) => {
        if (r <= 7 && c <= 7) return true; // Top-left
        if (r <= 7 && c >= 14) return true; // Top-right
        if (r >= 14 && c <= 7) return true; // Bottom-left
        return false;
    };

    // Generate pseudo-random pattern based on coordinates for stable rendering
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            if (isPositionElement(r, c)) continue;
            // deterministic pseudo-random
            if ((r * c + r + c) % 3 === 0 || (r + c * 2) % 5 === 0) {
                rects.push(<rect key={`${r}-${c}`} x={c * 10} y={r * 10} width="10" height="10" fill="currentColor" />);
            }
        }
    }

    return (
        <svg
            viewBox="0 0 210 210"
            width={size}
            height={size}
            style={{
                color: 'var(--bg-dark)',
                background: '#fff',
                padding: '12px',
                borderRadius: '16px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
            }}
        >
            {/* Position Blocks (Squares) */}
            <rect x="0" y="0" width="70" height="70" fill="transparent" stroke="currentColor" strokeWidth="10" />
            <rect x="20" y="20" width="30" height="30" fill="currentColor" />

            <rect x="140" y="0" width="70" height="70" fill="transparent" stroke="currentColor" strokeWidth="10" />
            <rect x="160" y="20" width="30" height="30" fill="currentColor" />

            <rect x="0" y="140" width="70" height="70" fill="transparent" stroke="currentColor" strokeWidth="10" />
            <rect x="20" y="160" width="30" height="30" fill="currentColor" />

            {/* Mock Data Modules */}
            {rects}
        </svg>
    );
}
