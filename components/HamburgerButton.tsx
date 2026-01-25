import React from 'react';

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
    scrolled: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick, scrolled }) => {
    return (
        <button
            className="lg:hidden relative w-14 h-14 flex justify-center items-center group focus:outline-none pointer-events-auto touch-manipulation-fix active:scale-90 transition-transform duration-200 select-none"
            onClick={onClick}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
            <div className="relative w-6 h-[20px] transform transition-all duration-500 ease-in-out">
                <span
                    className={`absolute left-0 h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-out transform origin-center ${isOpen ? 'top-[9px] rotate-45' : 'top-0'
                        }`}
                />
                <span
                    className={`absolute left-0 top-[9px] h-[2px] w-full bg-white rounded-full transition-all duration-200 ease-out ${isOpen ? 'opacity-0 w-0' : 'opacity-100 w-full'
                        }`}
                />
                <span
                    className={`absolute left-0 h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-out transform origin-center ${isOpen ? 'top-[9px] -rotate-45' : 'top-[18px]'
                        }`}
                />
            </div>
        </button>
    );
};

export default HamburgerButton;
