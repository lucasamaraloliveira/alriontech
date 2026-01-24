import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';
import Logo from './Logo';

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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return ReactDOM.createPortal(
        <div
            className={`fixed inset-0 bg-[#262626] z-[9990] lg:hidden transition-[opacity,transform,visibility] duration-500 cubic-bezier(0.19, 1, 0.22, 1) flex flex-col items-center justify-center will-change-transform transform-gpu ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
                }`}
        >


            <div className="flex flex-col items-center space-y-8 w-full px-6">
                <Logo className="h-16 mb-4" colorPrimary="#009BDB" colorSecondary="#85DEF2" />

                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => onNavigate(e, link.href, link.type)}
                        className="text-2xl sm:text-3xl font-serif text-white hover:text-[#009BDB] transition-colors tracking-widest text-center"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://wa.me/5521969630415"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full max-w-xs px-10 py-4 bg-[#009BDB] text-white text-[10px] uppercase tracking-widest font-black rounded-lg mt-4 text-center shadow-lg shadow-[#009BDB]/20"
                >
                    Consultoria Especializada
                </a>
            </div>
        </div>,
        document.body
    );
};

export default MobileMenu;
