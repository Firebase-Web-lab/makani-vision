import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CircularTimer from '../components/CircularTimer';
import { MapPin, Camera, CheckCircle, Share2, ChevronLeft, ArrowRight, Printer } from 'lucide-react';
import './BookingConfirmation.css';
import './ParkingMap.css'; // For shared header

export default function BookingConfirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    const { seatId = '12', level = 'VIP' } = location.state || {};

    const [isScanning, setIsScanning] = useState(false);
    const [isScanned, setIsScanned] = useState(false);

    const handleScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setIsScanned(true);
        }, 2500);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            {/* Shared Header */}
            <header className="kiosk-header">
                <div className="header-left">
                    <button className="icon-btn" onClick={() => navigate(-1)}><ArrowRight size={18} /></button>
                    <div className="badge-btn" style={{ marginLeft: '12px' }}>Checkout</div>
                </div>
                <div className="header-center">
                    <h2>Makani Ticket</h2>
                </div>
                <div className="header-right">
                </div>
            </header>

            <div className="kiosk-body">
                {/* Left Panel - Scanner/Actions */}
                <div className="kiosk-left" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 40px' }}>

                    <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px', alignSelf: 'flex-start' }}>تأكيد الحجز</h1>
                    <p style={{ color: '#79839c', fontSize: '1.1rem', marginBottom: '40px', alignSelf: 'flex-start' }}>
                        لقد تم حجز موقِفَك بنجاح. يرجى التوجه إلى الموقف ومسح الباركود لتأكيد الوصول وبدء فترة الوقوف.
                    </p>

                    <div style={{ background: '#181d2a', borderRadius: '24px', padding: '40px', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {!isScanned ? (
                            <>
                                <div style={{ marginBottom: '32px' }}><CircularTimer initialSeconds={600} /></div>
                                <p style={{ color: '#79839c', textAlign: 'center', marginBottom: '24px' }}>عند الوصول للموقف، قم بمسح الباركود المطبوع لتبدأ الإقامة</p>

                                <button
                                    className="buy-btn"
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '12px' }}
                                    onClick={handleScan}
                                    disabled={isScanning}
                                >
                                    {isScanning ? (
                                        <span className="scanning-text">جاري المسح الكاميرا...</span>
                                    ) : (
                                        <><Camera size={20} /> مسح باركود الموقف</>
                                    )}
                                </button>

                                {isScanning && (
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(17, 20, 32, 0.8)', zIndex: 100, borderRadius: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div className="scanner-line" style={{ width: '200px' }}></div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}
                            >
                                <CheckCircle size={80} color="#4caf50" style={{ filter: 'drop-shadow(0 0 20px rgba(76, 175, 80, 0.4))' }} />
                                <h3 style={{ fontSize: '1.8rem', color: '#4caf50' }}>تم تأكيد الوقوف!</h3>
                                <p style={{ color: '#79839c' }}>تم تحديث حالة الموقف بنجاح في النظام. نتمنى لك إقامة سعيدة.</p>
                                <button className="buy-btn" style={{ marginTop: '16px', padding: '12px 32px' }} onClick={() => navigate('/')}>الصفحة الرئيسية</button>
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className="center-divider"></div>

                {/* Right Panel - Ticket Receipt */}
                <div className="kiosk-right" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                    <motion.div
                        style={{ width: '100%', maxWidth: '400px', background: '#e6e6e6', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', position: 'relative' }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        {/* Top jagged edge simulated with CSS pattern */}
                        <div style={{ width: '100%', height: '10px', background: 'radial-gradient(circle at 50% 10px, transparent 10px, #e6e6e6 11px) repeat-x 0 -10px', backgroundSize: '20px 20px' }}></div>

                        <div style={{ padding: '32px 24px', borderBottom: '2px dashed #ccc' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                <h2 style={{ color: '#111420', fontSize: '2rem', fontWeight: 800, margin: 0 }}>Makani</h2>
                                <div style={{ background: '#111420', color: '#fff', padding: '4px 12px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem' }}>VIP TICKET</div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                                <div>
                                    <p style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>موقف</p>
                                    <p style={{ color: '#000', fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>{seatId}</p>
                                </div>
                                <div>
                                    <p style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>تاريخ</p>
                                    <p style={{ color: '#000', fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>18 Mon, 2026</p>
                                </div>
                            </div>

                            <div>
                                <p style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>مستوى الجودة</p>
                                <p style={{ color: '#000', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{level} Zone - Premium EV</p>
                            </div>
                        </div>

                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                            {/* Mock Barcode generated with CSS borders */}
                            <div style={{ display: 'flex', height: '60px', width: '100%', background: '#fff', border: '1px solid #ccc', padding: '8px', boxSizing: 'border-box', justifyContent: 'space-between' }}>
                                <div style={{ width: 4, background: '#000' }}></div>
                                <div style={{ width: 2, background: '#000' }}></div>
                                <div style={{ width: 8, background: '#000' }}></div>
                                <div style={{ width: 3, background: '#000' }}></div>
                                <div style={{ width: 6, background: '#000' }}></div>
                                <div style={{ width: 2, background: '#000' }}></div>
                                <div style={{ width: 10, background: '#000' }}></div>
                                <div style={{ width: 4, background: '#000' }}></div>
                                <div style={{ width: 2, background: '#000' }}></div>
                                <div style={{ width: 6, background: '#000' }}></div>
                                <div style={{ width: 5, background: '#000' }}></div>
                                <div style={{ width: 3, background: '#000' }}></div>
                                <div style={{ width: 8, background: '#000' }}></div>
                                <div style={{ width: 2, background: '#000' }}></div>
                                <div style={{ width: 4, background: '#000' }}></div>
                            </div>
                            <p style={{ color: '#666', fontSize: '0.9rem', margin: 0, fontFamily: 'monospace', letterSpacing: '4px' }}>{Math.floor(Math.random() * 90000000) + 10000000}</p>
                        </div>

                        {/* Bottom jagged edge */}
                        <div style={{ width: '100%', height: '10px', background: 'radial-gradient(circle at 50% 0, transparent 10px, #e6e6e6 11px) repeat-x', backgroundSize: '20px 20px', transform: 'rotate(180deg)' }}></div>
                    </motion.div>

                    <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                        <button className="icon-btn" style={{ width: 'auto', padding: '0 24px', borderRadius: '24px', background: 'transparent' }}>
                            <MapPin size={18} style={{ marginRight: '8px' }} /> التوجيه عبر الخريطة
                        </button>
                        <button className="icon-btn" style={{ width: 'auto', padding: '0 24px', borderRadius: '24px', background: 'transparent' }}>
                            <Printer size={18} style={{ marginRight: '8px' }} /> طباعة
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
