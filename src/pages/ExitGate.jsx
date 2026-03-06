import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Smartphone, CheckCircle, ArrowRight, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ParkingMap.css'; // For shared header

export default function ExitGate() {
    const navigate = useNavigate();
    const [isPaid, setIsPaid] = useState(false);
    const [seatId, setSeatId] = useState('');
    const [receiptData, setReceiptData] = useState(null);

    const handleKeypad = (num) => {
        if (seatId.length < 3) {
            setSeatId(prev => prev + num);
        }
    };

    const handleDelete = () => {
        setSeatId(prev => prev.slice(0, -1));
    };

    const handleSearch = () => {
        if (!seatId.trim()) return;

        // Simulate calculation (1 to 8 hours)
        const simHours = Math.floor(Math.random() * 8) + 1;
        const totalCost = simHours * 3; // 3 SAR per hour

        setReceiptData({
            seatId: seatId,
            timeIn: '10:30 ص',
            hours: simHours,
            totalCost: totalCost
        });
    };

    const handlePay = () => {
        setIsPaid(true);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            {/* Shared Header */}
            <header className="kiosk-header">
                <div className="header-left">
                    <button className="icon-btn" onClick={() => navigate(-1)}><ArrowRight size={18} /></button>
                    <div className="badge-btn" style={{ marginLeft: '12px' }}>Exit Terminal</div>
                </div>
                <div className="header-center">
                    <h2>Makani Payment</h2>
                </div>
                <div className="header-right">
                </div>
            </header>

            <div className="kiosk-body" style={{ alignItems: 'center', justifyContent: 'center' }}>

                <div className="kiosk-left" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingRight: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ maxWidth: '400px' }}
                    >
                        <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>بوابة الخروج <br /><span style={{ color: '#00bfff' }}>الرئيسية</span></h1>
                        <p style={{ color: '#79839c', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '32px' }}>يرجى إدخال رقم الموقف الخاص بك لحساب رسوم الإقامة بدقة (٣ ريال للساعة).</p>

                        {!receiptData ? (
                            <div style={{ background: '#181d2a', borderRadius: '24px', padding: '32px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <label style={{ color: '#79839c', fontSize: '1rem' }}>رقم الموقف</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        value={seatId}
                                        readOnly
                                        placeholder="مثال: 12"
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            fontSize: '1.8rem',
                                            padding: '16px 24px',
                                            borderRadius: '16px',
                                            outline: 'none',
                                            textAlign: 'center',
                                            width: '100%',
                                            boxSizing: 'border-box',
                                            letterSpacing: '4px'
                                        }}
                                    />
                                </div>

                                {/* On-screen Numeric Keypad for Kiosk */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '8px' }}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                                        <button
                                            key={num}
                                            onClick={() => handleKeypad(num.toString())}
                                            style={{ background: '#1e2436', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', fontSize: '1.5rem', color: '#fff', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                    <button
                                        onClick={handleDelete}
                                        style={{ background: 'rgba(255, 59, 48, 0.1)', border: '1px solid rgba(255, 59, 48, 0.2)', borderRadius: '12px', padding: '20px', fontSize: '1.2rem', color: '#ff3b30', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        مسح
                                    </button>
                                    <button
                                        onClick={() => handleKeypad('0')}
                                        style={{ background: '#1e2436', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', fontSize: '1.5rem', color: '#fff', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        0
                                    </button>
                                    <button
                                        onClick={handleSearch}
                                        disabled={!seatId}
                                        style={{
                                            background: seatId ? '#00bfff' : 'rgba(255,255,255,0.1)',
                                            color: seatId ? '#000' : 'rgba(255,255,255,0.3)',
                                            border: 'none',
                                            borderRadius: '12px',
                                            padding: '20px',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                            cursor: seatId ? 'pointer' : 'default',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        تأكيد
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ background: '#181d2a', borderRadius: '24px', padding: '32px', border: '1px solid #00bfff', boxShadow: '0 10px 30px rgba(0, 191, 255, 0.1)' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                    <span style={{ color: '#79839c' }}>رقم الموقف</span>
                                    <span style={{ color: '#fff', background: 'rgba(0,191,255,0.1)', padding: '4px 12px', borderRadius: '8px', letterSpacing: '2px', fontWeight: 800 }}>{receiptData.seatId}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                    <span style={{ color: '#79839c' }}>وقت الدخول</span>
                                    <span style={{ color: '#fff' }}>{receiptData.timeIn}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                    <span style={{ color: '#79839c' }}>مدة الإقامة</span>
                                    <span style={{ color: '#fff' }}>{receiptData.hours} ساعات</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                    <span style={{ color: '#79839c' }}>سعر الساعة</span>
                                    <span style={{ color: '#fff' }}>٣ ريال</span>
                                </div>
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '24px' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>الإجمالي</span>
                                    <span style={{ color: '#00bfff', fontSize: '2.5rem', fontWeight: 800 }}>{receiptData.totalCost} SAR</span>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                <div className="center-divider"></div>

                <div className="kiosk-right" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '40px' }}>

                    {receiptData && (
                        <AnimatePresence mode="wait">
                            {!isPaid ? (
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    style={{ width: '100%', maxWidth: '400px' }}
                                >
                                    <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '24px', textAlign: 'center' }}>اختر طريقة الدفع</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                        <button
                                            onClick={handlePay}
                                            style={{ background: '#181d2a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', color: '#fff', cursor: 'pointer', transition: 'all 0.2s' }}
                                            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#00bfff'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                        >
                                            <Smartphone size={32} color="#00bfff" />
                                            <span style={{ fontWeight: 700 }}>دفع إلكتروني</span>
                                        </button>
                                        <button
                                            onClick={handlePay}
                                            style={{ background: '#181d2a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', color: '#fff', cursor: 'pointer', transition: 'all 0.2s' }}
                                            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#00bfff'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                        >
                                            <CreditCard size={32} color="#00bfff" />
                                            <span style={{ fontWeight: 700 }}>دفع نقدي (كاش)</span>
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: 'spring', damping: 15 }}
                                    style={{ width: '100%', maxWidth: '450px', background: 'rgba(76, 175, 80, 0.1)', border: '1px solid rgba(76, 175, 80, 0.2)', borderRadius: '32px', padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                                >
                                    <motion.div
                                        initial={{ rotate: -90, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        transition={{ delay: 0.2, type: 'spring' }}
                                    >
                                        <CheckCircle size={80} color="#4caf50" style={{ filter: 'drop-shadow(0 0 20px rgba(76, 175, 80, 0.4))', marginBottom: '24px' }} />
                                    </motion.div>
                                    <h2 style={{ fontSize: '2rem', color: '#4caf50', marginBottom: '16px' }}>تم الدفع بنجاح</h2>
                                    <p style={{ color: '#79839c', fontSize: '1.1rem', marginBottom: '32px' }}>تم فتح البوابة. نتمنى لك رحلة آمنة!</p>

                                    <div style={{ width: '100%', height: '80px', borderBottom: '2px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                                        <div style={{
                                            width: '120px',
                                            height: '8px',
                                            background: '#00bfff',
                                            position: 'absolute',
                                            bottom: '-1px',
                                            left: '50%',
                                            transformOrigin: 'left center',
                                            borderRadius: '4px',
                                            boxShadow: '0 0 15px rgba(0, 191, 255, 0.6)',
                                            transform: 'rotate(-90deg) translateX(40px) translateY(-10px)',
                                            transition: 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                        }}></div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}

                </div>
            </div>
        </div>
    );
}
