import React from 'react';
import Nav, { NavItemData } from '../Nav';

const links: NavItemData[] = [{ text: 'Trending' }, { text: 'Recent' }, { text: 'Albums' }];

interface RegPanelProps {
  className?: string;
}

const RegisteredLandingNavPanel: React.FC<RegPanelProps> = ({ className }) => (
  <Nav className={className} navItems={links} />
);

export default RegisteredLandingNavPanel;
