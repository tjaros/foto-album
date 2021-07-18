import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaPhone,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export enum SocialMediaType {
  FACEBOOK,
  INSTAGRAM,
  WEBSITE,
  PHONE,
}

const socialsIcon: Record<SocialMediaType, IconType> = {
  [SocialMediaType.FACEBOOK]: FaFacebook,
  [SocialMediaType.INSTAGRAM]: FaInstagram,
  [SocialMediaType.WEBSITE]: FaGlobe,
  [SocialMediaType.PHONE]: FaPhone,
};

export interface SocialMediaLink {
  url: string;
  type: SocialMediaType;
}

interface SocialsProps {
  links: SocialMediaLink[];
  className?: string;
}

const SocialMedia: React.FC<SocialsProps> = ({ links, className = '' }) => (
  <div className={`flex flex-row justify-center md:flex-col md:justify-items-start"} ${className}`}>
    {links.map((link) => {
      const Icon = socialsIcon[link.type] || FaGlobe;
      return (
        <a key={link.url} href={link.url} className="px-4 pt-4 text-black no-underline">
          <Icon size="3rem" />
        </a>
      );
    })}
  </div>
);

export default SocialMedia;
