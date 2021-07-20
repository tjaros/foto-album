import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css';
import ConsentForm from '../ConsentForm';
import { getData, storeData, Tokens } from '../../auth/cookies';

interface LayoutProps {
  className?: string;
  showSearchbar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const [consent, setConsent] = useState(!!getData(Tokens.NSFW));
  const giveConsent = () => {
    storeData(Tokens.NSFW, 'true');
    setConsent(true);
  };

  return (
    <div className={!consent ? 'h-screen overflow-hidden' : ''}>
      <Header />
      {!consent && <ConsentForm onClick={giveConsent} />}
      <main className={`${className} ${consent ? '' : 'filter blur-sm brightness-75'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
