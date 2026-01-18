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
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999] transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
                }`}
        >
            <div className="bg-[#262626]/95 backdrop-blur-3xl border border-[#009BDB]/50 px-10 py-8 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,155,219,0.3)] flex flex-col items-center gap-6 min-w-[320px] max-w-[90vw] text-center">
                <div className="w-20 h-20 bg-[#009BDB]/20 rounded-3xl flex items-center justify-center animate-bounce">
                    <CheckCircle2 size={40} className="text-[#009BDB]" />
                </div>
                <div>
                    <p className="text-[#85DEF2] text-[12px] uppercase tracking-[0.4em] font-black mb-2">Mensagem Enviada</p>
                    <p className="text-white text-base font-light tracking-wide leading-relaxed max-w-[280px]">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 px-8 py-3 bg-[#009BDB]/10 hover:bg-[#009BDB]/20 border border-[#009BDB]/30 rounded-2xl transition-all text-[#85DEF2] text-[10px] uppercase tracking-widest font-bold"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default Toast;
