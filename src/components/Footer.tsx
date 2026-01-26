import React from 'react';
import { Heart, Mail, Phone, MapPin, Github } from 'lucide-react';
import { useLanguage } from '../services/LanguageContext';

export const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-base-900 border-t border-white/10 pt-10 pb-8 relative z-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-6">
                            <img src="/images/pardinoslogo.png" alt="Pardinos Teletón Logo" className="h-16 w-auto object-contain" />
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Github, href: "https://github.com/russokun/padrinos-teleton" }
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target={href.startsWith('http') ? "_blank" : undefined}
                                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-purple hover:text-white transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.quickLinks.title')}</h4>
                        <ul className="space-y-4">
                            {[
                                t('footer.quickLinks.about'),
                                t('footer.quickLinks.howItWorks'),
                                t('footer.quickLinks.stories'),
                                t('footer.quickLinks.partners'),
                                t('footer.quickLinks.resources')
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-brand-red transition-colors text-sm font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.contact.title')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-5 h-5 text-brand-purple shrink-0" />
                                <span>Av. Libertador Bernardo O'Higgins 4620, Estación Central, Santiago</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Phone className="w-5 h-5 text-brand-purple shrink-0" />
                                <span>+56 2 2222 2222</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Mail className="w-5 h-5 text-brand-purple shrink-0" />
                                <span>contacto@pardinosteleton.cl</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2025 Pardinos Teletón. {t('footer.rights')}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.accessibility')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
