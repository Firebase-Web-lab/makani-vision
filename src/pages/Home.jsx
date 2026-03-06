import React from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Zap, ShieldCheck, ChevronLeft, Menu, Search, Heart, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './ParkingMap.css'; // Import for header CSS shared styles

export default function Home() {
    const navigate = useNavigate();



    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            {/* Shared Header */}
            <header className="kiosk-header">
                <div className="header-left">
                    <button className="icon-btn" onClick={() => navigate('/admin')}><Menu size={18} /></button>
                </div>
                <div className="header-center">
                    <h2>Makani System</h2>
                </div>
                <div className="header-right">
                    <button className="icon-btn" onClick={() => navigate('/map')}><Map size={18} /></button>
                </div>
            </header>

            <div className="kiosk-body" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div className="kiosk-left" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div className="brand-badge" style={{ display: 'inline-block', marginBottom: '16px' }}>الجيل الجديد من المواقف</div>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                            نظام <span style={{ color: '#00bfff', textShadow: '0 0 20px rgba(0, 191, 255, 0.4)' }}>مكاني</span> الذكي
                        </h1>
                        <p style={{ color: '#79839c', fontSize: '1.4rem', lineHeight: 1.6, marginBottom: '48px', maxWidth: '600px' }}>
                            تجربة ركن سيارات خالية من الإجهاد في مجمعاتنا الفاخرة. احجز، اركن، وانطلق بكل سهولة وراحة تامة.
                        </p>

                        <button className="buy-btn" onClick={() => navigate('/map')} style={{ padding: '24px 64px', fontSize: '1.5rem', borderRadius: '40px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 10px 30px rgba(0, 191, 255, 0.3)' }}>
                            احجز موقفك الآن <ChevronLeft size={28} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
