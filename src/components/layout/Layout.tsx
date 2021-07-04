import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main className="max-w-5xl px-4 m-auto lg:px-8">{children}</main>
    <Footer />
  </>
);

export default Layout;
