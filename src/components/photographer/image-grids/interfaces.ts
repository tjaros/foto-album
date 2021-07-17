export interface ImageGridsProps {
  urls: string[];
  alt: string;
}

export interface SequenceGridsProps {
  items: ImageGridsProps;
  className?: string;
  sequence?: number[];
}
