
import React from 'react';

interface LogoProps {
  className?: string;
  // Mantendo os props para compatibilidade, mesmo que a imagem PNG não mude de cor
  colorPrimary?: string;
  colorSecondary?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = "h-8",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.svg"
        alt="Alrion Tech Logo"
        width={320}
        height={120}
        style={{ aspectRatio: '320 / 120' }}
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
