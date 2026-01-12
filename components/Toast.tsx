
import React, { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
    const [shouldRender, setShouldRender] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
        >
            <div className="bg-[#262626]/80 backdrop-blur-xl border border-[#009BDB]/30 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px]">
                <div className="w-10 h-10 bg-[#009BDB]/10 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-[#009BDB]" />
                </div>
                <div className="flex-1">
                    <p className="text-[#85DEF2] text-[10px] uppercase tracking-widest font-black mb-0.5 text-left">Sucesso</p>
                    <p className="text-white/80 text-xs font-light tracking-wide text-left">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/5 rounded-lg transition-colors text-white/20 hover:text-white/60"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default Toast;
