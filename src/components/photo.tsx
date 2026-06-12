import Image from "next/image";

export function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-brand-deep/5 ${className}`}>
      <Image src={src} alt={alt} fill unoptimized className="object-cover" />
    </div>
  );
}
