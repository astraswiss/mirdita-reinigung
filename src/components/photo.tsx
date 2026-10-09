import Image from "next/image";

/**
 * Cropped photo in a rounded frame. Pass the source's real `width`/`height`
 * to render a sized <Image> (better intrinsic sizing); without them the image
 * fills its container. Set `priority` only for the above-the-fold hero image.
 */
export function Photo({
  src,
  alt,
  className = "",
  objectPosition = "object-center",
  width,
  height,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-brand-deep/5 ${className}`}>
      {width && height ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={`absolute inset-0 h-full w-full object-cover ${objectPosition}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${objectPosition}`}
        />
      )}
    </div>
  );
}
