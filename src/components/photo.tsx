import Image from "next/image";

export function Photo({
  src,
  alt,
  className = "",
  objectPosition = "object-center",
}: {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-brand-deep/5 ${className}`}>
      <Image src={src} alt={alt} fill unoptimized className={`object-cover ${objectPosition}`} />
    </div>
  );
}
