import React from 'react';
import { Heart, User, HeartHandshake } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import { ViewState } from '../types/index';
import { Footer } from '../components/Footer';

interface LandingProps {
    setView: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ setView }) => {
    return (
        <div className="min-h-screen bg-base-950 flex flex-col relative overflow-hidden">
            {/* Animated Gradient Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red blur-[150px] opacity-20 rounded-full animate-pulse-slow"></div>
                <div className="absolute top-1/2 -left-24 w-96 h-96 bg-brand-purple blur-[150px] opacity-20 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-brand-purple blur-[120px] opacity-10 rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Floating Particles Animation */}
            <BackgroundAnimation />

            <header className="relative z-10 p-6 flex justify-center items-center max-w-6xl mx-auto w-full">
                <div className="flex items-center justify-center gap-2 md:gap-16">
                    <img src="/images/teletonlogonb.png" alt="Logo Teletón" className="h-20 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                    <img src="/images/logonobackground.png" alt="Padrinos Teletón Logo" className="h-28 md:h-36 w-auto object-contain animate-fade-in" />
                    <img src="/images/bhlogonb.png" alt="Logo Bendita Hackathon" className="h-20 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
            </header>

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-5">
                <Badge variant="red" className="mb-6 animate-pulse-slow">Teletón x Bendita Hackathon</Badge>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                    Conectando <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-purple">Corazones y Talento</span>
                </h1>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                    Una plataforma donde las empresas apadrinan el futuro y los jóvenes descubren su potencial sin barreras.
                </p>

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl mb-5">
                    <Card className="text-left hover:border-brand-red hover:scale-[1.02] active:scale-95 transition-all duration-200 group cursor-pointer bg-gradient-to-b from-base-900 to-base-950 relative z-20" onClick={() => setView('student-dashboard')}>
                        <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-red">
                            <User className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-red transition-colors">Soy Talento Joven</h3>
                        <p className="text-slate-400 text-sm">Quiero mostrar quién soy y encontrar un mentor.</p>
                    </Card>

                    <Card className="text-left hover:border-brand-purple hover:scale-[1.02] active:scale-95 transition-all duration-200 group cursor-pointer bg-gradient-to-b from-base-900 to-base-950 relative z-20" onClick={() => setView('company-talent-scout')}>
                        <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-purple group-hover:text-white transition-colors text-brand-purple">
                            <HeartHandshake className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-purple transition-colors">Soy Padrino/Empresa</h3>
                        <p className="text-slate-400 text-sm">Busco talento inclusivo para apadrinar y mentorear.</p>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
};
