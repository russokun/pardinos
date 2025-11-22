import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from './ui/Button';

interface SuccessModalProps {
    message: string;
    onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => (
    <div className="min-h-screen flex items-center justify-center bg-brand-red p-4 relative overflow-hidden fixed inset-0 z-50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="bg-white text-base-950 p-8 rounded-3xl max-w-md text-center shadow-2xl z-10 animate-bounce-slow">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-brand-red fill-current animate-pulse" />
            </div>
            <h2 className="text-4xl font-black mb-4 text-brand-red">¡Conexión Exitosa!</h2>
            <p className="text-xl text-slate-600 mb-8 font-medium">
                {message}
            </p>
            <Button onClick={onClose} className="w-full" variant="primary">
                Continuar
            </Button>
        </div>
    </div>
);
