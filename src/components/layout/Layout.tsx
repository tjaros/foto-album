import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main className="">{children}</main>
    <Footer />
  </>
);

export default Layout;
