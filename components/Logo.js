import Image from 'next/image';

export default function Logo({ variant = 'default', showTagline = true, className = '' }) {
  // If variant is 'white', we render light text version or inverted style
  const isDarkBg = variant === 'white' || variant === 'dark';

  return (
    <div className={`logo-wrap ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <div style={{ position: 'relative', width: showTagline ? 180 : 150, height: showTagline ? 44 : 36 }}>
        <Image
          src="/images/logo.png"
          alt="FAECOM INC. Logo"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left center', filter: isDarkBg ? 'brightness(0) invert(1) drop-shadow(0 0 1px rgba(255,255,255,0.5))' : 'none' }}
          priority
        />
      </div>
    </div>
  );
}
