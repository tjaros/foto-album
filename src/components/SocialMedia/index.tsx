import React from 'react';
import {
  FaFacebook, FaInstagram, FaGlobe, FaPhone
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export enum SocialMediaType {
  FACEBOOK,
  INSTAGRAM,
  WEBSITE,
  PHONE
}

const socialsIcon: Record<SocialMediaType, IconType> = {
  [SocialMediaType.FACEBOOK]: FaFacebook,
  [SocialMediaType.INSTAGRAM]: FaInstagram,
  [SocialMediaType.WEBSITE]: FaGlobe,
  [SocialMediaType.PHONE]: FaPhone
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
  className?: string;
  orientation?: Orientation;
}

const SocialMedia: React.FC<SocialsProps> = ({
  links,
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
        <a key={link.url} href={link.url} className="px-4 pt-4 text-black no-underline">
          <Icon size="3rem" />
        </a>
      );
    })}
  </div>
);

export default SocialMedia;
