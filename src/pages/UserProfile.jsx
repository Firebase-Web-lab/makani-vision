import React from 'react';
import { motion } from 'framer-motion';
import { Clock, History, CreditCard, ChevronLeft, Menu, LogOut, Settings, Bell, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ParkingMap.css'; // For shared header

export default function UserProfile() {
    const navigate = useNavigate();
    const history = [
        { id: '1', date: 'تاريخ اليوم', time: '10:30 صباحاً', seat: 'B08', duration: 'ساعتين', amount: '30 ر.س', status: 'مكتمل' },
        { id: '2', date: 'الأمس', time: '4:15 مساءً', seat: 'A02', duration: 'ساعة', amount: '15 ر.س', status: 'مكتمل' },
        { id: '3', date: '18 Nov, 2026', time: '9:00 صباحاً', seat: 'C12', duration: '3 ساعات', amount: '45 ر.س', status: 'مكتمل' },
        { id: '4', date: '10 Nov, 2026', time: '1:00 مساءً', seat: 'F04', duration: 'ساعة', amount: '15 ر.س', status: 'مكتمل' },
        { id: '5', date: '01 Nov, 2026', time: '8:45 مساءً', seat: 'E11', duration: '4 ساعات', amount: '60 ر.س', status: 'مكتمل' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            {/* Shared Header */}
            <header className="kiosk-header">
                <div className="header-left">
                    <button className="icon-btn" onClick={() => navigate(-1)}><ArrowRight size={18} /></button>
                    <div className="badge-btn" style={{ marginLeft: '12px' }}>Profile Settings</div>
                </div>
                <div className="header-center">
                    <h2>User Dashboard</h2>
                </div>
                <div className="header-right">
                    <button className="icon-btn"><Bell size={18} /></button>
                    <button className="icon-btn"><Settings size={18} /></button>
                    <div className="user-profile-btn" style={{ background: '#00bfff' }}>
                        <div className="avatar-img" style={{ border: '2px solid #fff' }}></div>
                    </div>
                </div>
            </header>

            <div className="kiosk-body">
                {/* Left Panel - User Information */}
                <div className="kiosk-left" style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ background: '#181d2a', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <div className="avatar-img" style={{ width: '100px', height: '100px', marginBottom: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}></div>
                        <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '4px' }}>أحمد محمد</h2>
                        <p style={{ color: '#79839c', marginBottom: '24px' }}>ahmed.m@example.com <span style={{ background: 'rgba(0,191,255,0.1)', color: '#00bfff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', marginLeft: '8px' }}>VIP</span></p>

                        <button className="buy-btn" style={{ width: '100%', padding: '12px', fontSize: '1rem' }} onClick={() => navigate('/map')}>
                            حجز جديد
                        </button>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div style={{ background: '#181d2a', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Clock size={32} color="#00bfff" style={{ marginBottom: '12px' }} />
                            <strong style={{ fontSize: '1.5rem', color: '#fff' }}>24h</strong>
                            <span style={{ color: '#79839c', fontSize: '0.8rem' }}>إجمالي الوقوف</span>
                        </div>
                        <div style={{ background: '#181d2a', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <History size={32} color="#00bfff" style={{ marginBottom: '12px' }} />
                            <strong style={{ fontSize: '1.5rem', color: '#fff' }}>12</strong>
                            <span style={{ color: '#79839c', fontSize: '0.8rem' }}>حجز هذا الشهر</span>
                        </div>
                    </div>

                    <button style={{ background: 'transparent', border: '1px solid rgba(255, 59, 48, 0.2)', color: '#ff3b30', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px', borderRadius: '16px', marginTop: 'auto', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
                        <LogOut size={20} /> تسجيل الخروج
                    </button>
                </div>

                <div className="center-divider"></div>

                {/* Right Panel - History */}
                <div className="kiosk-right" style={{ flex: '1', display: 'flex', flexDirection: 'column', padding: '0 24px', overflowY: 'auto' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff' }}>سجل الحجوزات السابقة</h2>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#79839c' }}>
                        <History size={64} style={{ marginBottom: '16px', opacity: 0.2 }} />
                        <h3>لا توجد حجوزات سابقة</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}
