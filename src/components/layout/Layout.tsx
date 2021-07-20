import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css';

interface LayoutProps {
  className?: string;
  showSearchbar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '', showSearchbar }) => (
  <div className="flex flex-col min-h-screen">
    <Header showSearchbar={showSearchbar} />
    <main className={`flex-grow ${className}`}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
