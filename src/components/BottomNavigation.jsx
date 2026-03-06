import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Map, User, Settings, LogOut, Ticket } from 'lucide-react';
import { clsx } from 'clsx';
import './BottomNavigation.css';

const navItems = [
    { path: '/', icon: Home, label: 'الرئيسية' },
    { path: '/map', icon: Map, label: 'المواقف' },
    { path: '/ticket', icon: Ticket, label: 'تذكرتي' },
    { path: '/profile', icon: User, label: 'حسابي' },
    { path: '/admin', icon: Settings, label: 'الإدارة' },
    { path: '/exit', icon: LogOut, label: 'الخروج' },
];

export default function BottomNavigation() {
    return (
        <nav className="bottom-nav glass-panel">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => clsx('nav-item', isActive && 'active')}
                >
                    <item.icon className="nav-icon" size={24} />
                    <span className="nav-label">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
}
