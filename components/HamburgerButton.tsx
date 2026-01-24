import React from 'react';

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
    scrolled: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick, scrolled }) => {
    return (
        <button
            className="lg:hidden relative w-12 h-12 flex justify-center items-center group focus:outline-none pointer-events-auto"
            onClick={onClick}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
            <div className="flex flex-col justify-center items-center w-6 gap-[5px]">
                <span
                    className={`block h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] transform origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''
                        }`}
                />
                <span
                    className={`block h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'opacity-0 x-scale-0' : ''
                        }`}
                />
                <span
                    className={`block h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] transform origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                        }`}
                />
            </div>
        </button>
    );
};

export default HamburgerButton;
