import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
};

export function PhotoFrame({ src, alt, caption, className, imgClassName }: Props) {
  return (
    <figure className={cn("photo-frame", className)}>
      <img src={src} alt={alt} className={imgClassName} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
