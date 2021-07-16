export interface SequenceGridsProps {
  items: { alt: string; urls: string[] };
  className?: string;
  sequence: number[];
}

export interface ImageGridsProps {
  urls: string[];
  alt: string;
}
