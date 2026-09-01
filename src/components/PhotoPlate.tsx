type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
};

export default function PhotoPlate({ src, alt, caption, className, imgClassName }: Props) {
  return (
    <figure className={["photo-plate", className].filter(Boolean).join(" ")}>
      <img src={src} alt={alt} className={imgClassName} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
