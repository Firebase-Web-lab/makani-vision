import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, X, Calendar as CalendarIcon, Map, CreditCard, ChevronLeft, ChevronRight, Menu, Search, Heart, User } from 'lucide-react';
import clsx from 'clsx';
import './ParkingMap.css';

const ROWS = 7;
const COLS = 16;

// Mock data generation (1 to N)
const initialMap = Array.from({ length: ROWS }).map((_, rIndex) => {
    return Array.from({ length: COLS }).map((_, cIndex) => {
        const id = (rIndex * COLS) + cIndex + 1;
        let status = 'available';
        const rand = Math.random();
        if (rand > 0.7 && rand <= 0.9) status = 'booked';
        else if (rand > 0.9) status = 'waiting';

        return { id: id.toString(), status };
    });
});

const DATES = [
    { day: 'Mon', date: '18', active: true },
    { day: 'Tue', date: '19' },
    { day: 'Wed', date: '20' },
    { day: 'Thu', date: '21' },
    { day: 'Fri', date: '22' },
    { day: 'Sat', date: '23' },
    { day: 'Sun', date: '24' },
];

const TIMES = [
    { label: '11:45', ampm: 'AM', active: true },
    { label: '1:20', ampm: 'PM' },
    { label: '4:45', ampm: 'PM' },
    { label: '10:20', ampm: 'PM' },
];

export default function ParkingMap() {
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
        if (seat.status === 'booked' || seat.status === 'waiting') return;

        if (selectedSeats.find(s => s.id === seat.id)) {
            setSelectedSeats(prev => prev.filter(s => s.id !== seat.id));
        } else {
            setSelectedSeats(prev => [...prev, seat]);
        }
    };

    const removeSeat = (id) => {
        setSelectedSeats(prev => prev.filter(s => s.id !== id));
    };

    const handleAISuggest = () => {
        // Find best available spot (closest to lower numbers/aisles)
        const available = initialMap.flat().filter(s => s.status === 'available');
        if (available.length > 0) {
            // Pick a "good" spot for demo purposes (e.g. first available)
            const bestSpot = available.find(s => parseInt(s.id) % 16 === 1 || parseInt(s.id) % 16 === 16) || available[0];
            setSelectedSeats([bestSpot]);
        }
    };

    const handleBuy = () => {
        if (selectedSeats.length > 0) {
            navigate('/ticket', { state: { seatId: selectedSeats.map(s => s.id).join(', '), level: 'VIP' } });
        }
    };

    return (
        <div className="kiosk-wrapper">
            <div className="kiosk-container">

                {/* Top Navbar matched from image */}
                <header className="kiosk-header">
                    <div className="header-left">
                        <button className="icon-btn"><Menu size={18} /></button>

                    </div>
                    <div className="header-center">
                        <h2>Makani</h2>
                    </div>
                    <div className="header-right">
                        <button className="icon-btn"><Map size={18} /></button>
                        <button className="icon-btn"><Search size={18} /></button>
                        <button className="icon-btn"><Heart size={18} /></button>
                    </div>
                </header>



                <div className="kiosk-body">
                    {/* Left Panel */}
                    <div className="kiosk-left">





                        <div className="tickets-section">
                            <div className="section-label"><CreditCard size={14} /> Selected Tickets</div>
                            <div className="tickets-list">
                                <AnimatePresence>
                                    {selectedSeats.map(seat => (
                                        <motion.div
                                            key={seat.id}
                                            className="ticket-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                        >
                                            <div className="ticket-item-info">
                                                <strong>{seat.id}</strong> <span>موقف رقم</span>
                                            </div>
                                            <div className="ticket-item-price">
                                                <button onClick={() => removeSeat(seat.id)}><X size={14} /></button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="kiosk-footer" style={{ flexWrap: 'wrap', gap: '8px' }}>
                            <button
                                className="icon-btn"
                                style={{ width: '100%', marginBottom: '16px', background: 'rgba(156, 39, 176, 0.1)', color: '#e040fb', border: '1px solid rgba(156, 39, 176, 0.3)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}
                                onClick={handleAISuggest}
                            >
                                <span style={{ fontSize: '1.5rem' }}>✨</span> اختيار ذكي بالذكاء الاصطناعي (AI)
                            </button>
                            <button
                                className="buy-btn"
                                style={{ width: '100%' }}
                                disabled={selectedSeats.length === 0}
                                onClick={handleBuy}
                            >
                                تأكيد الحجز
                            </button>
                        </div>

                    </div>

                    <div className="center-divider"></div>

                    {/* Right Panel - Screen Grid */}
                    <div className="kiosk-right">
                        <div className="screen-curve-container">
                            <div className="screen-curve"></div>
                            <div className="screen-label">G A T E</div>
                        </div>

                        <div className="seats-grid">
                            {initialMap.map((rowArr, rIdx) => (
                                <div key={rIdx} className="seat-row-wrapper">
                                    <span className="row-letter">{rIdx + 1}</span>
                                    <div className="seat-row-actual">
                                        {rowArr.map((seat, cIdx) => {
                                            const isSelected = selectedSeats.some(s => s.id === seat.id);
                                            return (
                                                <div
                                                    key={seat.id}
                                                    className={clsx(
                                                        'cinema-seat',
                                                        seat.status,
                                                        isSelected && 'selected',
                                                        (cIdx === 3 || cIdx === 11) && 'gap-right' // Add small aisles
                                                    )}
                                                    onClick={() => handleSeatClick(seat)}
                                                >
                                                    {seat.col}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <span className="row-letter">{rowArr[0].row}</span>
                                </div>
                            ))}
                        </div>

                        <div className="seat-legend">
                            <div className="legend-item"><div className="legend-box selected"></div> Selected</div>
                            <div className="legend-item"><div className="legend-box available"></div> Available</div>
                            <div className="legend-item"><div className="legend-box booked"></div> Booked</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
