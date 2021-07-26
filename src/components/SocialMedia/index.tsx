import React from 'react';
import {
  FaFacebook, FaInstagram, FaGlobe, FaPhone, FaYoutube
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export enum SocialMediaType {
  FACEBOOK,
  INSTAGRAM,
  WEBSITE,
  PHONE,
  YOUTUBE
}

const socialsIcon: Record<SocialMediaType, IconType> = {
  [SocialMediaType.FACEBOOK]: FaFacebook,
  [SocialMediaType.INSTAGRAM]: FaInstagram,
  [SocialMediaType.WEBSITE]: FaGlobe,
  [SocialMediaType.PHONE]: FaPhone,
  [SocialMediaType.YOUTUBE]: FaYoutube
};

export interface SocialMediaLink {
  url: string;
  type: SocialMediaType;
}

export enum Orientation {
  VERTICAL,
  HORIZONTAL
}

interface SocialsProps {
  links: SocialMediaLink[];
  linkClassName?: string;
  className?: string;
  orientation?: Orientation;
}

const SocialMedia: React.FC<SocialsProps> = ({
  links,
  linkClassName = 'px-4 pt-4 text-black hover:text-gray-700',
  className = '',
  orientation = Orientation.HORIZONTAL
}) => (
  <div
    className={`flex flex-row justify-center md:justify-items-start ${className} ${
      orientation === Orientation.VERTICAL ? 'md:flex-col' : ''
    }`}>
    {links.map((link) => {
      const Icon = socialsIcon[link.type] || FaGlobe;
      return (
        <a key={`${link.url}-${link.type}`} href={link.url} className={`no-underline transition-all ${linkClassName}`}>
          <Icon size="3rem" />
        </a>
      );
    })}
  </div>
);

export default SocialMedia;
