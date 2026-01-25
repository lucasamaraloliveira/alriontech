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
            className="absolute top-full left-0 w-full bg-[#262626]/98 backdrop-blur-2xl border-t border-white/5 shadow-2xl lg:hidden flex flex-col p-8 animate-slide-down origin-top pointer-events-auto touch-manipulation-fix"
        >
            <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => onNavigate(e, link.href, link.type)}
                        className="text-[11px] uppercase tracking-[0.3em] font-black text-white/70 hover:text-[#009BDB] transition-all py-4 border-b border-white/5 last:border-0 opacity-0 animate-[linkFadeIn_0.4s_ease-out_forwards]"
                        style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://wa.me/5521969630415"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full text-center px-6 py-4 bg-[#009BDB] text-white text-[10px] uppercase tracking-[0.2em] font-black rounded-xl mt-4 shadow-xl hover:bg-[#85DEF2] hover:text-[#262626] transition-all opacity-0 animate-[linkFadeIn_0.4s_ease-out_forwards]"
                    style={{ animationDelay: `${0.1 + navLinks.length * 0.05}s` }}
                >
                    Consultoria de Elite
                </a>
            </div>
        </div>
    );
};

export default MobileMenu;
