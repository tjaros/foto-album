import React from 'react';
import SocialMedia, { SocialMediaType as SMType } from '../SocialMedia';

const footerLinks = [
  { url: '', description: 'Contact Us' },
  { url: '', description: 'Advertising' },
  { url: '', description: 'Privacy Policy' },
  { url: '', description: 'Terms Of Use' }
];

const socialMedia = [
  { url: '', type: SMType.INSTAGRAM },
  { url: '', type: SMType.FACEBOOK },
  { url: '', type: SMType.YOUTUBE }
];

const Footer: React.FC = () => (
  <footer className="flex flex-col items-center mt-auto text-white bg-black">
    <nav className="flex flex-col items-center py-12 md:flex-row justify-evenly md:pb-0">
      {footerLinks.map(({ url, description }) => (
        <a
          href={url}
          className="py-2 text-lg text-white no-underline lg:text-2xl md:py-0 md:px-4"
          key={description}>
          {description}
        </a>
      ))}
    </nav>
    <SocialMedia links={socialMedia} linkClassName="text-white hover:text-gray-200" />
    <p className="w-full px-4 py-12 text-center break-words bg-black md:pt-14">
      All content Copyright © 2000-2021 ModAg, Inc. made with big pepee by us.
    </p>
  </footer>
);

export default Footer;
