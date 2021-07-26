/**
 * Params for one row of a sequence grid.
 *
 * Use @field urls to specify image sources and @field alt
 * for alternative text for each image in a row. @field className
 * will apply provided classes to outer container.
 */
export interface ImageGridsProps {
  urls: string[];
  alt: string;
  className?: string;
}
