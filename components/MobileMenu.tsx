import React from 'react';

interface NavLink {
    name: string;
    href: string;
    type: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: NavLink[];
    onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string, type: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks, onNavigate }) => {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-full left-0 w-full bg-[#262626]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl lg:hidden flex flex-col p-6 animate-slide-down origin-top pointer-events-auto"
        >
            <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => onNavigate(e, link.href, link.type)}
                        className="text-sm uppercase tracking-[0.2em] font-bold text-white/80 hover:text-[#009BDB] transition-colors py-2 border-b border-white/5 last:border-0"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://wa.me/5521969630415"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full text-center px-6 py-3 bg-[#009BDB] text-white text-[10px] uppercase tracking-widest font-black rounded-lg mt-2 shadow-lg hover:bg-[#85DEF2] hover:text-[#262626] transition-all"
                >
                    Consultoria Especializada
                </a>
            </div>
        </div>
    );
};

export default MobileMenu;
