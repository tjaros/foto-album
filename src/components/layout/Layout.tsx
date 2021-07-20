import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className={`flex-grow ${className}`}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
