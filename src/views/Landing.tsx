import React from 'react';
import { Heart, User, HeartHandshake, Trophy } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import { ViewState } from '../types/index';
import { Footer } from '../components/Footer';
import { useLanguage, LanguageSwitch } from '../services/LanguageContext';

interface LandingProps {
    setView: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ setView }) => {
    const { t } = useLanguage();

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

            <header className="relative z-10 p-4 md:p-6 flex justify-center items-center max-w-6xl mx-auto w-full">
                <div className="flex items-center justify-center gap-6 sm:gap-12 md:gap-24 w-full">
                    <a href="https://padrinosteleton.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                        <img src="/images/pardinoslogo.png" alt="Pardinos Teletón Logo" className="h-20 sm:h-32 md:h-48 w-auto object-contain animate-fade-in" />
                    </a>
                    <a href="https://evento.teleton.cl/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                        <img src="/images/teletonlogonb.png" alt="Logo Teletón" className="h-14 sm:h-24 md:h-40 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                    </a>
                </div>
                <div className="absolute right-4 top-4">
                    <LanguageSwitch />
                </div>
            </header>

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-5">
                <Badge variant="red" className="mb-6 animate-pulse-slow">{t('landing.badge')}</Badge>
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                    {t('landing.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-purple">{t('landing.subtitle')}</span>
                </h1>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                    {t('landing.description')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
                    <Card className="p-8 group hover:-translate-y-2 transition-all duration-300 cursor-pointer border-brand-red/20" onClick={() => setView('student-dashboard')}>
                        <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-6 text-brand-red group-hover:scale-110 transition-transform">
                            <User size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{t('landing.studentCard.title')}</h3>
                        <p className="text-slate-400 mb-6">{t('landing.studentCard.desc')}</p>
                        <div className="inline-flex items-center text-brand-red font-bold group-hover:gap-2 transition-all">
                            {t('landing.studentCard.cta')} <span className="ml-2">→</span>
                        </div>
                    </Card>

                    <Card className="p-8 group hover:-translate-y-2 transition-all duration-300 cursor-pointer border-brand-purple/20" onClick={() => setView('company-talent-scout')}>
                        <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6 text-brand-purple group-hover:scale-110 transition-transform">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{t('landing.companyCard.title')}</h3>
                        <p className="text-slate-400 mb-6">{t('landing.companyCard.desc')}</p>
                        <div className="inline-flex items-center text-brand-purple font-bold group-hover:gap-2 transition-all">
                            {t('landing.companyCard.cta')} <span className="ml-2">→</span>
                        </div>
                    </Card>
                </div>
                {/* Nuestro Modelo Section (Pro Timeline) */}
                <div className="w-full max-w-5xl mx-auto mt-28 mb-28 px-4 relative">
                    <div className="text-center mb-16">
                        <Badge variant="neutral" className="mb-4 uppercase tracking-[0.2em] text-[10px] sm:text-xs">{t('landing.model.badge')}</Badge>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">{t('landing.model.title')}</h2>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-brand-red via-brand-purple to-brand-red opacity-20"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 bg-base-900 border-4 border-brand-red/30 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-brand-red/10 group-hover:scale-110 group-hover:border-brand-red transition-all duration-300 relative">
                                    <span className="text-3xl font-black text-white">1</span>
                                    <div className="absolute inset-0 rounded-full bg-brand-red opacity-20 animate-ping group-hover:opacity-40"></div>
                                </div>
                                <div className="bg-base-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:border-brand-red/30 transition-colors h-full">
                                    <h4 className="text-xl font-bold mb-3 text-white">{t('landing.model.step1.title')}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{t('landing.model.step1.desc')}</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 bg-base-900 border-4 border-brand-purple/30 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-brand-purple/10 group-hover:scale-110 group-hover:border-brand-purple transition-all duration-300 relative">
                                    <span className="text-3xl font-black text-white">2</span>
                                    <div className="absolute inset-0 rounded-full bg-brand-purple opacity-20 animate-ping group-hover:opacity-40" style={{ animationDelay: '1s' }}></div>
                                </div>
                                <div className="bg-base-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:border-brand-purple/30 transition-colors h-full">
                                    <h4 className="text-xl font-bold mb-3 text-white">{t('landing.model.step2.title')}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{t('landing.model.step2.desc')}</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 bg-base-900 border-4 border-brand-red/30 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-brand-red/10 group-hover:scale-110 group-hover:border-brand-red transition-all duration-300 relative">
                                    <span className="text-3xl font-black text-white">3</span>
                                    <div className="absolute inset-0 rounded-full bg-brand-red opacity-20 animate-ping group-hover:opacity-40" style={{ animationDelay: '2s' }}></div>
                                </div>
                                <div className="bg-base-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:border-brand-red/30 transition-colors h-full">
                                    <h4 className="text-xl font-bold mb-3 text-white">{t('landing.model.step3.title')}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{t('landing.model.step3.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hackathon Winners Section */}
                <div className="w-full max-w-5xl mx-auto mt-20 mb-10 px-4">
                    <div className="bg-gradient-to-br from-base-900 to-base-950 rounded-[2.5rem] border border-white/10 overflow-hidden relative shadow-2xl">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/5 blur-[100px] pointer-events-none"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-red/10 blur-[80px] rounded-full pointer-events-none"></div>

                        <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-14 relative z-10 text-left">
                            <div>
                                <Badge variant="purple" className="mb-6 py-1.5 px-4 font-black">{t('landing.winners.badge')}</Badge>
                                <h1 className="text-4xl md:text-6xl font-black mb-3 text-white tracking-tight leading-none">{t('landing.winners.title')}</h1>
                                <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-purple">{t('landing.winners.subtitle1')} <br className="hidden md:block" /> {t('landing.winners.subtitle2')}</span>
                                </h2>
                                <p className="text-lg text-slate-400 mb-10 max-w-md leading-relaxed">
                                    {t('landing.winners.desc1')} <span className="text-white font-bold">250 {t('landing.winners.prof')}</span> {t('landing.winners.desc2')} <span className="text-white font-bold">40 {t('landing.winners.projects')}</span> {t('landing.winners.desc3')} <span className="text-white font-bold">{t('landing.winners.humanCapital')}</span>.
                                </p>

                                <div className="grid grid-cols-2 gap-6 md:gap-10 pt-10 border-t border-white/10">
                                    <div>
                                        <div className="text-3xl md:text-4xl font-black text-white mb-1">+250</div>
                                        <div className="text-[10px] md:text-xs text-slate-500 uppercase font-black tracking-[0.2em]">{t('landing.winners.prof')}</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl md:text-4xl font-black text-white mb-1">40+</div>
                                        <div className="text-[10px] md:text-xs text-slate-500 uppercase font-black tracking-[0.2em]">{t('landing.winners.projects')}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-brand-red via-brand-purple to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative rounded-[2rem] overflow-hidden border border-white/20 aspect-[4/3] bg-base-900 shadow-2xl flex items-center justify-center">
                                    <img
                                        src="/images/hackathon-winners.jpg"
                                        alt="Equipo Ganador Hackathon"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const helper = document.createElement('div');
                                            helper.className = 'w-full h-full flex items-center justify-center bg-base-800 text-white/20';
                                            helper.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M15 8h.01"/><rect width="16" height="16" x="4" y="4" rx="2"/><path d="m4 15 4-4a4 4 0 0 1 5 0l5 4"/><path d="m14 14 1-1a4 4 0 0 1 5 0l2 2"/></svg>';
                                            target.parentElement?.appendChild(helper);
                                        }}
                                    />
                                    <div className="absolute bottom-6 right-6">
                                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black px-5 py-2.5 rounded-2xl text-xs md:text-sm shadow-2xl flex items-center gap-2 transform group-hover:scale-110 transition-transform">
                                            <Trophy className="w-4 h-4" /> WINNERS
                                        </div>
                                    </div>
                                    {/* Glassmorphism overlay for image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent opacity-40"></div>
                                </div>
                            </div>
                        </div>

                        {/* Organizado por section */}
                        <div className="px-8 md:px-14 pb-10 flex flex-col items-center justify-center border-t border-white/5 relative z-10">
                            <p className="text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6 pt-8 text-center w-full">{t('landing.winners.organizedBy')}</p>
                            <a href="https://bendita-hackathon-ia.lovable.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                                <img src="/images/bhlogonb.png" alt="Logo Bendita Hackathon" className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
