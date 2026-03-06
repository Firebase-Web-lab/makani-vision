import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="kiosk-wrapper">
            <div className="kiosk-container">
                <main className="content" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
