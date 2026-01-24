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
            <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
                <span
                    className={`block h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                        }`}
                />
                <span
                    className={`block h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                        }`}
                />
            </div>
        </button>
    );
};

export default HamburgerButton;
