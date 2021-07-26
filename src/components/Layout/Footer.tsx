import React from 'react';
import SocialMedia, { SocialMediaType as SMType } from '../SocialMedia';

const footerLinks = [
  { url: '', description: 'Contact Us' },
  { url: '', description: 'Advertising' },
  { url: '', description: 'Privacy Policy' },
  { url: '', description: 'Terms Of Use' }
];

const socialMedia = [
  { url: 'www.instagram.com', type: SMType.INSTAGRAM },
  { url: 'www.facebook.com', type: SMType.FACEBOOK },
  { url: 'youtube.com', type: SMType.YOUTUBE }
];

const Footer: React.FC = () => (
  <footer className="flex flex-col items-center mt-auto text-white bg-black">
    <nav className="flex flex-col items-center py-4 md:py-7 lg:py-9 md:flex-row justify-evenly md:pb-0">
      {footerLinks.map(({ url, description }) => (
        <a
          href={url}
          className="py-2 text-lg text-white no-underline lg:text-2xl md:py-0 md:px-4"
          key={description}>
          {description}
        </a>
      ))}
    </nav>
    <SocialMedia links={socialMedia} linkClassName="p-2 mx-2 my-6 text-white hover:text-gray-200" />
    <p className="w-full px-4 py-6 text-center break-words bg-black md:pt-8">
      All content Copyright © 2000-2021 ModAg, Inc. made with big pepee by us.
    </p>
  </footer>
);

export default Footer;
