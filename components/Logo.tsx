
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
        src="/logo.png"
        alt="Alrion Tech Logo"
        className="h-full w-auto object-contain brightness-110 contrast-105"
      />
    </div>
  );
};

export default Logo;
