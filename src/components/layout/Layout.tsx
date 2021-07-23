import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css';
import { ConsentForm } from '../Form';
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
    <div>
      {!consent && <ConsentForm onClick={giveConsent} />}
      <div className={!consent ? 'h-screen overflow-hidden filter blur-sm brightness-75' : ''}>
        <Header />
        <main className={className}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
