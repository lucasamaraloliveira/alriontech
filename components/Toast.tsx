import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <div
            className={`fixed top-8 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0 pointer-events-none'
                }`}
        >
            <div className="bg-[#262626]/90 backdrop-blur-2xl border border-[#009BDB]/40 px-8 py-5 rounded-3xl shadow-[0_20px_50px_rgba(0,155,219,0.2)] flex items-center gap-6 min-w-[340px] max-w-[90vw]">
                <div className="w-12 h-12 bg-[#009BDB]/20 rounded-2xl flex items-center justify-center shrink-0 animate-pulse">
                    <CheckCircle2 size={28} className="text-[#009BDB]" />
                </div>
                <div className="flex-1">
                    <p className="text-[#85DEF2] text-[11px] uppercase tracking-[0.3em] font-black mb-1 text-left">Sucesso</p>
                    <p className="text-white text-sm font-light tracking-wide text-left leading-relaxed">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-xl transition-all text-white/30 hover:text-white"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default Toast;
