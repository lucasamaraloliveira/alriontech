import React from 'react';

interface NavLink {
    name: string;
    href: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: NavLink[];
    onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navLinks, onNavigate }) => {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-full left-0 w-full bg-[#1A1A1A]/98 backdrop-blur-xl border-t border-white/5 shadow-2xl lg:hidden flex flex-col p-8 animate-[revealDown_0.5s_ease-out_forwards] origin-top pointer-events-auto touch-manipulation-fix will-change-transform"
        >
            <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => onNavigate(e, link.href)}
                        className="text-[11px] uppercase tracking-[0.3em] font-black text-white/70 hover:text-[#009BDB] transition-all py-4 border-b border-white/5 last:border-0 opacity-0 animate-[revealUp_0.4s_ease-out_forwards]"
                        style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://wa.me/5521969630415"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-6 py-4 bg-[#009BDB] text-white text-[10px] uppercase tracking-[0.2em] font-black rounded-sm mt-4 shadow-xl hover:bg-white hover:text-[#1A1A1A] transition-all opacity-0 animate-[revealUp_0.4s_ease-out_forwards]"
                    style={{ animationDelay: `${0.1 + navLinks.length * 0.05}s` }}
                >
                    Orçamento
                </a>
            </div>
        </div>
    );
};

export default MobileMenu;
