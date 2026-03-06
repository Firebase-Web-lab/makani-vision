import React from 'react';
import { motion } from 'framer-motion';
import { Bell, TrendingUp, Users, CarFront, Menu, Search, Activity, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ParkingMap.css'; // For shared header

export default function AdminDashboard() {
    const navigate = useNavigate();
    const alerts = [
        { id: 1, message: 'موقف A01 تجاوز الوقت المسموح بـ 15 دقيقة', type: 'warning', time: 'الآن', location: 'Section A - VIP' },
        { id: 2, message: 'دخول سيارة بتصريح VIP', type: 'info', time: 'قبل 5 دقائق', location: 'Gate 2' },
        { id: 3, message: 'دفع ناجح للبوابة الشمالية #892', type: 'success', time: 'قبل 12 دقيقة', location: 'North Gate' },
        { id: 4, message: 'شاحن EV رقم 3 يحتاج صيانة', type: 'warning', time: 'قبل ساعة', location: 'Section E' },
    ];

    const weekData = [40, 65, 80, 45, 90, 100, 30];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            {/* Shared Header */}
            <header className="kiosk-header">
                <div className="header-left">
                    <button className="icon-btn" onClick={() => navigate('/')}><Menu size={18} /></button>
                    <div className="badge-btn" style={{ marginLeft: '12px' }}>Operations View</div>
                </div>
                <div className="header-center">
                    <h2>Command Center</h2>
                </div>
                <div className="header-right">
                    <button className="icon-btn" style={{ background: '#001a33', borderColor: '#0088ff' }}><Activity size={18} color="#0088ff" /></button>
                    <button className="icon-btn"><Search size={18} /></button>
                    <button className="icon-btn" style={{ position: 'relative' }}>
                        <Bell size={18} />
                        <span style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, background: '#ff3b30', borderRadius: '50%' }}></span>
                    </button>
                </div>
            </header>

            <div className="kiosk-body">
                {/* Left Panel - KPIs and Alerts */}
                <div className="kiosk-left" style={{ flex: '1', display: 'flex', flexDirection: 'column', paddingRight: '24px' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                        <motion.div
                            style={{ background: '#181d2a', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '20px' }}
                            whileHover={{ y: -5, background: '#1e2436' }}
                        >
                            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(0,191,255,0.1)', color: '#00bfff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CarFront size={28} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2rem', color: '#fff', margin: 0, lineHeight: 1 }}>%85</h3>
                                <span style={{ color: '#79839c', fontSize: '0.9rem' }}>نسبة الإشغال</span>
                            </div>
                        </motion.div>

                        <div style={{ background: '#181d2a', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TrendingUp size={28} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.6rem', color: '#fff', margin: 0, lineHeight: 1.2 }}>4,250 <span style={{ fontSize: '1rem', color: '#79839c' }}>SAR</span></h3>
                                <span style={{ color: '#79839c', fontSize: '0.9rem' }}>إيرادات اليوم</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '1.2rem', color: '#fff' }}>Live System Alerts</h2>
                        <span style={{ color: '#00bfff', fontSize: '0.9rem', cursor: 'pointer' }}>View Details</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
                        {alerts.map((alert, idx) => (
                            <motion.div
                                key={alert.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    background: '#181d2a',
                                    borderRadius: '16px',
                                    padding: '16px 20px',
                                    borderLeft: `4px solid ${alert.type === 'warning' ? '#ff9800' : alert.type === 'success' ? '#4caf50' : '#00bfff'}`,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <div>
                                    <strong style={{ color: '#fff', fontSize: '1rem', display: 'block', marginBottom: '4px' }}>{alert.message}</strong>
                                    <span style={{ color: '#79839c', fontSize: '0.8rem' }}>{alert.location}</span>
                                </div>
                                <span style={{ color: '#79839c', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{alert.time}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ marginTop: '24px', background: 'rgba(156, 39, 176, 0.05)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(156, 39, 176, 0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <span style={{ fontSize: '1.5rem' }}>✨</span>
                            <h3 style={{ color: '#e040fb', fontSize: '1.2rem', margin: 0 }}>AI الازدحام وتحليل الذروة</h3>
                        </div>
                        <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                            بناءً على البيانات الحالية، يتوقع النظام <strong style={{ color: '#ff9800' }}>وصول الإشغال إلى ٩٥٪</strong> خلال الساعتين القادمتين (٨:٠٠ م - ١٠:٠٠ م).
                        </p>
                        <ul style={{ color: '#79839c', fontSize: '0.9rem', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li>• يُنصح بتفعيل المواقف الاحتياطية (Zone C).</li>
                            <li>• تحويل العملاء القادمين عبر البوابة الشمالية لتخفيف التكدس.</li>
                        </ul>
                    </div>

                </div>

                <div className="center-divider"></div>

                {/* Right Panel - Analytics */}
                <div className="kiosk-right" style={{ flex: '1', display: 'flex', flexDirection: 'column', paddingLeft: '24px' }}>

                    <div style={{ background: '#181d2a', borderRadius: '24px', padding: '32px', border: '1px solid rgba(255,255,255,0.05)', flex: 1, display: 'flex', flexDirection: 'column' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '4px' }}>Weekly Utilization</h2>
                                <span style={{ color: '#79839c', fontSize: '0.9rem' }}>Space occupancy rates over the last 7 days</span>
                            </div>
                            <button className="icon-btn filters-btn" style={{ background: 'transparent' }}>
                                Last 7 Days <ChevronLeft size={16} />
                            </button>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            {weekData.map((val, idx) => (
                                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '40px' }}>
                                    {/* The Bar */}
                                    <div style={{ height: '300px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${val}%` }}
                                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                                            style={{
                                                width: '100%',
                                                borderRadius: '8px',
                                                background: val > 80 ? '#00bfff' : val < 40 ? '#ff9800' : 'rgba(0,191,255,0.4)',
                                                boxShadow: val > 80 ? '0 0 20px rgba(0,191,255,0.5)' : 'none'
                                            }}
                                        />
                                    </div>
                                    <span style={{ color: '#79839c', fontSize: '0.8rem', fontWeight: 600 }}>{days[idx]}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: 12, height: 12, borderRadius: 4, background: '#00bfff' }}></div>
                                <span style={{ color: '#79839c', fontSize: '0.9rem' }}>Peak Traffic High</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: 12, height: 12, borderRadius: 4, background: 'rgba(0,191,255,0.4)' }}></div>
                                <span style={{ color: '#79839c', fontSize: '0.9rem' }}>Normal Volume</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: 12, height: 12, borderRadius: 4, background: '#ff9800' }}></div>
                                <span style={{ color: '#79839c', fontSize: '0.9rem' }}>Low Demand</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
