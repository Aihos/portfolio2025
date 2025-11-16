"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
import Bluestarsvg from "../../_components/svg/bluestar";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlocContact(){
    const containerRef = useRef<HTMLDivElement>(null);
    const headerContentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const starRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [emailJsReady, setEmailJsReady] = useState(false);
    
    // États du formulaire
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    
    // Initialiser EmailJS dans useEffect
    useEffect(() => {
        try {
            console.log('🔧 Initialisation d\'EmailJS...');
            emailjs.init('nTY1OGk9d0b8Q-wSc');
            setEmailJsReady(true);
            console.log('✅ EmailJS initialisé avec succès');
        } catch (error) {
            console.error('❌ Erreur d\'initialisation EmailJS:', error);
        }
    }, []);
    
    // Gestion des changements dans le formulaire
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    // Gestion de la soumission du formulaire avec EmailJS
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!emailJsReady) {
            console.error('❌ EmailJS n\'est pas encore initialisé');
            setSubmitStatus('error');
            return;
        }
        
        if (!formRef.current) {
            console.error('❌ Référence au formulaire manquante');
            return;
        }
        
        setIsSubmitting(true);
        console.log('=== DÉBUT ENVOI EMAIL ===');
        console.log('📧 EmailJS Ready:', emailJsReady);
        console.log('📝 Données du formulaire:', formData);
        
        try {
            // Envoyer l'email via EmailJS avec send au lieu de sendForm
            const templateParams = {
                prenom: formData.prenom,
                nom: formData.nom,
                email: formData.email,
                message: formData.message
            };
            
            console.log('📦 Template params:', templateParams);
            console.log('🔑 Service ID: service_wiyzabp');
            console.log('📄 Template ID: template_7nwl91k');
            console.log('🚀 Envoi en cours...');
            
            const result = await emailjs.send(
                'service_wiyzabp',
                'template_7nwl91k',
                templateParams
            );
            
            console.log('✅ Email envoyé avec succès!', result);
            setSubmitStatus('success');
            setFormData({ nom: '', prenom: '', email: '', message: '' });
            
            // Réinitialiser le formulaire
            if (formRef.current) {
                formRef.current.reset();
            }
        } catch (error: unknown) {
            console.error('❌ ERREUR COMPLÈTE:', error);
            console.error('Type d\'erreur:', typeof error);
            console.error('Error stringifié:', JSON.stringify(error, null, 2));
            
            const emailError = error as { text?: string; message?: string; status?: number };
            console.error('Détails extraits:', {
                message: emailError?.text || emailError?.message || 'Erreur inconnue',
                status: emailError?.status,
            });
            
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
            console.log('=== FIN ENVOI EMAIL ===');
        }
    };

    useEffect(() => {
        if (!containerRef.current) return;

        // Animation du conteneur principal
        gsap.fromTo(containerRef.current, 
            {
                y: 100,
            },
            {
                y: -500,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    end: "bottom 50%",
                    scrub: 1,
                    markers: false,                    
                    pinSpacing: false,
                }
            }
        );

        // Animation séquentielle des éléments internes
        const elementsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: headerContentRef.current,
                start: "top 60%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        // État initial des éléments
        gsap.set([titleRef.current, starRef.current, formRef.current], {
            opacity: 0,
            y: 50
        });

        // Animation cascade des éléments
        elementsTimeline
            .to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            })
            .to(starRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.5")
            .to(formRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.3");

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <div ref={containerRef} className="bg-[url(/img/fondCarreau.png)] bg-white bg-repeat bg-contain px-4 md:px-[68px] min-h-[120vh] w-full flex flex-col justify-start items-center pt-20 relative -mt-20">         
            <div ref={headerContentRef} className="flex flex-col w-full items-center mb-4 md:mb-20">
                <h2 ref={titleRef} className="text-8xl font-beckam text-primary uppercase mb-8 tracking-wider">Contact</h2>
                <div ref={starRef} className="mb-8">
                    <Bluestarsvg />
                </div>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 md:mb-8">
                    {/* Prénom */}
                    <div className="space-y-1 md:space-y-3">
                        <label htmlFor="prenom" className="block text-lg font-beckam text-primary uppercase tracking-wide">
                            Prénom
                        </label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleInputChange}
                            required
                            className="w-full px-6 py-4 border-2 border-primary bg-transparent text-primary placeholder-primary/60 focus:outline-none focus:ring-0 focus:border-primary/80 transition-all duration-300 font-medium"
                            placeholder="Votre prénom"
                        />
                    </div>
                    
                    {/* Nom */}
                    <div className="space-y-1 md:space-y-3">
                        <label htmlFor="nom" className="block text-lg font-beckam text-primary uppercase tracking-wide">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                            required
                            className="w-full px-6 py-4 border-2 border-primary bg-transparent text-primary placeholder-primary/60 focus:outline-none focus:ring-0 focus:border-primary/80 transition-all duration-300 font-medium"
                            placeholder="Votre nom"
                        />
                    </div>
                </div>
                
                {/* Email */}
                <div className="mb-2 md:mb-8 space-y-1 md:space-y-3">
                    <label htmlFor="email" className="block text-lg font-beckam text-primary uppercase tracking-wide">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border-2 border-primary bg-transparent text-primary placeholder-primary/60 focus:outline-none focus:ring-0 focus:border-primary/80 transition-all duration-300 font-medium"
                        placeholder="votre.email@exemple.com"
                    />
                </div>
                
                {/* Message */}
                <div className="mb-4 md:mb-12 space-y-1 md:space-y-3">
                    <label htmlFor="message" className="block text-lg font-beckam text-primary uppercase tracking-wide">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={8}
                        className="w-full px-6 py-4 border-2 border-primary bg-transparent text-primary placeholder-primary/60 focus:outline-none focus:ring-0 focus:border-primary/80 transition-all duration-300 resize-vertical font-medium"
                        placeholder="Votre message..."
                    />
                </div>
                
                {/* Bouton de soumission */}
                <div className="flex justify-center mb-2 md:mb-8">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-16 py-4 border-2 border-primary uppercase text-sm font-beckam tracking-wider transition-all duration-300 ${
                            isSubmitting 
                                ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed' 
                                : 'bg-white text-primary hover:bg-primary hover:text-white'
                        }`}
                    >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                </div>
                
                {/* Messages de statut */}
                {submitStatus === 'success' && (
                    <div className="mt-6 p-6 border-2 border-green-500 bg-green-50 text-green-700 text-center font-medium">
                        ✓ Message envoyé avec succès ! Je vous répondrons bientôt.
                    </div>
                )}
                
                {submitStatus === 'error' && (
                    <div className="mt-6 p-6 border-2 border-red-500 bg-red-50 text-red-700 text-center font-medium">
                        ✗ Une erreur s&apos;est produite. Veuillez réessayer.
                    </div>
                )}
            </form>
        </div>
    )
}