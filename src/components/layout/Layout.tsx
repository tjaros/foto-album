import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css';

interface LayoutProps {
  className?:string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => (
  <>
    <Header />
    <main className={`${className}`}>{children}</main>
    <Footer />
  </>
);

export default Layout;
