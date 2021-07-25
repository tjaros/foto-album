import React from 'react';
import logo from '../../images/logo--light.svg';

interface LogoProps {
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** Display company logo. */
const Logo: React.FC<LogoProps> = ({ alt = 'ModAg logo', className = '', style }) => (
  <img src={logo} alt={alt} className={className} style={style} />
);

export default Logo;
