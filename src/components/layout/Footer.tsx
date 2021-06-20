import React from 'react';
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

const footerLinks = [
  { url: '', description: 'Contact Us' },
  { url: '', description: 'Advertising' },
  { url: '', description: 'Privacy Policy' },
  { url: '', description: 'Terms Of Use' }
];

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  website: FaGlobe
};

const socialMedia = [
  { url: '', type: 'instagram' },
  { url: '', type: 'facebook' },
  { url: '', type: 'website' }
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center mt-auto text-white bg-black">
      <nav className="flex flex-col items-center py-12 md:flex-row justify-evenly md:pb-0">
        {footerLinks.map(({ url, description }) => (
          <a
            href={url}
            className="py-2 text-2xl text-white no-underline md:py-0 md:px-4"
            key={description}>
            {description}
          </a>
        ))}
      </nav>
      <nav className="flex flex-row justify-center w-full bg-black md:pt-8">
        {socialMedia.map(({ url, type }) => {
          const Icon = socialIcons[type] || FaGlobe;
          return (
            <a key={type} href={url} className="px-4 text-2xl text-white no-underline">
              <Icon size="3rem" />
            </a>
          );
        })}
      </nav>
      <p className="w-full px-4 py-12 text-center break-words bg-black md:pt-14">
        All content Copyright © 2000-2021 ??????.com, Inc. made with big pepee by us.
      </p>
    </footer>
  );
};

export default Footer;
