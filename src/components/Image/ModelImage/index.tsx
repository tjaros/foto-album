import React from 'react';
import ModelInfo from './ModelInfo';
import OverlayNsfw from './OverlayNsfw';

interface ModelImageProps {
  avatarSrc?: string;
  src: string;
  name: string;
  nsfw?: boolean;
  className?: string;
  onNsfwShow?: () => void;
}

/**
 * Rectangular image of model with either their name and avatar
 * on hover, or nsfw button to allow nsfw content, based on
 * @property nsfw.
 */
const ModelImage: React.FC<ModelImageProps> = ({
  avatarSrc,
  src,
  name,
  nsfw = false,
  className = '',
  onNsfwShow
}) => (
  <div className={`relative ${className}`}>
    {nsfw ? (
      <OverlayNsfw onClick={onNsfwShow} />
    ) : (
      <ModelInfo modelName={name} imageUrl={avatarSrc ?? src} />
    )}

    <img className="object-cover w-full" src={src} alt={name} />
  </div>
);

export default ModelImage;
