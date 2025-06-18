'use client'

import React, { useState } from 'react'
import { 
  Shield, 
  Home, 
  ChefHat, 
  Waves, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Eye, 
  Wrench,
  Search,
  Droplets,
  Brush,
  TestTube,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Star,
  MousePointer,
  RotateCcw
} from 'lucide-react'
import { EnhancedBeforeAfter } from '../components/ui/enhanced-before-after'
import { useLanguage } from './hooks/useLanguage'
import { LanguageSwitcher } from '../components/ui/language-switcher'
import { WhatsAppIcon } from '../components/ui/whatsapp-icon'
import { Language } from './translations'

const WHATSAPP_NUMBER = "0657985260"

const getWhatsAppMessage = (language: Language) => {
  switch (language) {
    case 'ar':
      return "سلام، شفت العرض ديال Zero Glissage وبغيت نجرب الخدمة."
    case 'en':
      return "Hello, I saw the Zero Glissage offer and would like to try the service."
    case 'fr':
      return "Bonjour, j'ai vu l'offre Zero Glissage et j'aimerais essayer le service."
    default:
      return "سلام، شفت العرض ديال Zero Glissage وبغيت نجرب الخدمة."
  }
}

const trackWhatsAppClick = () => {
  // GTM DataLayer Event (Primary tracking)
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'whatsapp_click',
      event_category: 'engagement',
      event_label: 'cta_button',
      value: 1,
      currency: 'MAD',
      content_name: 'Zero Glissage WhatsApp Lead',
      lead_type: 'whatsapp_contact'
    })
  }
  
  // Google Ads Conversion Tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-17199502230/WhatsApp_Lead',  // You'll need to update this with the actual conversion label
      value: 1.0,
      currency: 'MAD'
    })
  }
  
  // Backup: Google Analytics Event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'cta_button'
    })
  }
  
  // Facebook Pixel Event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: 'Zero Glissage CTA',
      content_category: 'lead_generation'
    })
  }
}

const WhatsAppButton = ({ text, className = "" }: { text: string, className?: string }) => {
  const { language } = useLanguage()
  
  const handleClick = () => {
    trackWhatsAppClick()
    const message = encodeURIComponent(getWhatsAppMessage(language))
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-logo-yellow-500 hover:bg-logo-yellow-600 text-black font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${className}`}
      style={{ minHeight: '44px' }} // Ensure minimum touch target size
    >
      <WhatsAppIcon size={20} color="black" className="flex-shrink-0" />
      <span className="text-center break-words">{text}</span>
    </button>
  )
}

const FloatingWhatsApp = () => {
  const { language } = useLanguage()
  
  const handleClick = () => {
    trackWhatsAppClick()
    const message = encodeURIComponent(getWhatsAppMessage(language))
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div 
      className="whatsapp-float"
      onClick={handleClick}
      style={{ 
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#ffeb3b', // Logo Yellow-500
        color: '#000',
        borderRadius: '50px',
        textAlign: 'center',
        boxShadow: '2px 2px 3px #999',
        zIndex: 100,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      <WhatsAppIcon size={28} color="black" />
    </div>
  )
}

export default function LandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { t, language } = useLanguage()

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.customers.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + t.testimonials.customers.length) % t.testimonials.customers.length)
  }

  return (
    <div className="min-h-screen bg-white scroll-smooth no-overflow" style={{ scrollBehavior: 'smooth' }}>
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden hero-bg lg:hero-bg-desktop">
        {/* Desktop Background Image */}
        <div 
          className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/backgroundherodesktop.jpg)' }}
        ></div>
        
        {/* Language Switcher - Top Right */}
        <div className="absolute top-6 right-6 z-50">
          <LanguageSwitcher />
        </div>
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/50 lg:bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Zero Glissage Logo - Main Title Replacement */}
            <div className="relative z-20 mb-12 animate-fade-in-up">
              <img 
                src="/images/gliisagelogo-02.png" 
                alt="Zero Glissage Logo" 
                className="h-40 md:h-48 lg:h-56 xl:h-64 mx-auto drop-shadow-2xl"
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white animate-fade-in-up animation-delay-200">
              {t.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-2xl xl:text-3xl mb-8 text-gray-100 font-medium max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
              {t.hero.subtitle}
              <br />
              <span className="text-logo-yellow-400">
                {language === 'ar' ? 'بدون تكسير... بدون تغيير الارضية' : 
                 language === 'en' ? 'No Breaking • Transparent • 100% Safe' :
                 'Sans Casse • Transparent • 100% Sûr'}
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
              <WhatsAppButton 
                text={t.hero.cta} 
                className="text-lg lg:text-xl px-10 py-5 w-full sm:w-auto mx-auto animate-bounce-gentle"
              />
              <div className="flex items-center text-logo-yellow-300 font-semibold text-base lg:text-lg animate-pulse-gentle">
                <CheckCircle className="w-5 h-5 ml-2" />
                {language === 'ar' ? 'فحص وتجربة مجانية في منزلك' :
                 language === 'en' ? 'Free inspection and trial at your home' :
                 'Inspection et essai gratuits à domicile'}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-center text-sm max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 animate-fade-in-up animation-delay-800">
                <div className="text-2xl lg:text-3xl font-bold text-logo-yellow-400 animate-count-up">+500</div>
                <div className="text-sm lg:text-base">
                  {language === 'ar' ? 'منزل محمي' :
                   language === 'en' ? 'Protected Homes' :
                   'Maisons Protégées'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 animate-fade-in-up animation-delay-1000">
                <div className="text-2xl lg:text-3xl font-bold text-logo-yellow-400 animate-count-up">100%</div>
                <div className="text-sm lg:text-base">
                  {language === 'ar' ? 'ضمان الجودة' :
                   language === 'en' ? 'Quality Guarantee' :
                   'Garantie Qualité'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 animate-fade-in-up animation-delay-1200">
                <div className="text-2xl lg:text-3xl font-bold text-logo-yellow-400 animate-count-up">24h</div>
                <div className="text-sm lg:text-base">
                  {language === 'ar' ? 'خدمة سريعة' :
                   language === 'en' ? 'Fast Service' :
                   'Service Rapide'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 animate-fade-in-up animation-delay-1400">
                <div className="text-2xl lg:text-3xl font-bold text-logo-yellow-400 animate-count-up">5★</div>
                <div className="text-sm lg:text-base">
                  {language === 'ar' ? 'تقييم العملاء' :
                   language === 'en' ? 'Customer Rating' :
                   'Note Clients'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Glass Morphism Design */}
      <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-warm-gray-50 via-logo-yellow-50 to-warm-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Mobile Layout - Full Width Image with Overlay (unchanged) */}
          <div className="lg:hidden relative max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[85vh]">
              <img 
                src="/images/1.PNG" 
                alt="خطر الانزلاق على الأرضيات المبللة" 
                className="w-full h-full object-cover absolute inset-0"
              />
              
              {/* Image overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Mobile: Centered Glass Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                <div className="bg-black/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-logo-yellow-500/30 relative overflow-hidden max-w-4xl w-full my-auto mt-[15vh]">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-logo-yellow-500/10 via-transparent to-black/10 rounded-3xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-logo-yellow-500/90 backdrop-blur-sm rounded-full mb-4 shadow-xl">
                      <img 
                        src="/gliisagelogo-06.png" 
                        alt="خطر الانزلاق" 
                        className="w-10 h-10 md:w-12 md:h-12"
                      />
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
                      {language === 'ar' ? 'خطر الانزلاق يهدد سلامة عائلتك!' :
                       language === 'en' ? 'Slip hazard threatens your family\'s safety!' :
                       'Le risque de glissade menace la sécurité de votre famille!'}
                    </h2>
                    
                    <div className="max-w-3xl mx-auto space-y-4">
                      <p className="text-base md:text-lg text-white leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_70%)]">
                        {language === 'ar' ? 'كل سنة، آلاف الأشخاص يتعرضون لحوادث خطيرة بسبب الانزلاق في المنازل.' :
                         language === 'en' ? 'Every year, thousands of people suffer serious accidents due to slipping in homes.' :
                         'Chaque année, des milliers de personnes subissent des accidents graves dus aux glissades à domicile.'}
                      </p>
                      <div className="bg-logo-yellow-600/95 backdrop-blur-sm rounded-2xl px-4 py-3 inline-block shadow-xl border border-logo-yellow-400/70">
                        <p className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                          {language === 'ar' ? 'لا تنتظر حتى يحدث الحادث!' :
                           language === 'en' ? 'Don\'t wait until an accident happens!' :
                           'N\'attendez pas qu\'un accident arrive!'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Caption */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-logo-yellow-500/30">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 drop-shadow-lg">
                    {language === 'ar' ? 'هذا ما يحدث كل يوم في البيوت المغربية' :
                     language === 'en' ? 'This happens every day in Moroccan homes' :
                     'Ceci arrive chaque jour dans les foyers marocains'}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 drop-shadow-lg">
                    {language === 'ar' ? 'الأرضيات المبللة = خطر حقيقي على عائلتك' :
                     language === 'en' ? 'Wet floors = real danger to your family' :
                     'Sols mouillés = danger réel pour votre famille'}
                  </p>
                </div>
              </div>
              
              {/* Floating Danger Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-logo-yellow-600/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg border border-logo-yellow-400/50 flex items-center gap-2">
                  <img 
                    src="/gliisagelogo-06.png" 
                    alt="خطر الانزلاق" 
                    className="w-4 h-4"
                  />
                  {language === 'ar' ? 'خطر حقيقي' :
                   language === 'en' ? 'Real danger' :
                   'Danger réel'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Layout - Two Column: Small Image Left + Content Right */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8 xl:gap-12 max-w-7xl mx-auto items-center">
            {/* Left Column - Smaller Image */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/1.PNG" 
                  alt="خطر الانزلاق على الأرضيات المبللة" 
                  className="w-full h-[500px] xl:h-[600px] object-cover"
                />
                
                {/* Small CTA Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 xl:p-6 border border-logo-yellow-500/30 text-center">
                    <div className="bg-logo-yellow-500/90 rounded-full w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center mx-auto mb-3 shadow-xl">
                      <img 
                        src="/gliisagelogo-06.png" 
                        alt="خطر الانزلاق" 
                        className="w-6 h-6 xl:w-8 xl:h-8"
                      />
                    </div>
                    <h3 className="text-lg xl:text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {language === 'ar' ? 'لا تنتظر حتى يحدث الحادث!' :
                       language === 'en' ? 'Don\'t wait until an accident happens!' :
                       'N\'attendez pas qu\'un accident arrive!'}
                    </h3>
                    <WhatsAppButton 
                      text={language === 'ar' ? 'فحص مجاني فوري' :
                            language === 'en' ? 'Free instant inspection' :
                            'Inspection gratuite immédiate'} 
                      className="w-full text-sm xl:text-base px-4 py-3"
                    />
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-logo-yellow-600/90 backdrop-blur-sm text-black px-3 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg border border-logo-yellow-400/50 flex items-center gap-2">
                    <img 
                      src="/gliisagelogo-06.png" 
                      alt="خطر الانزلاق" 
                      className="w-3 h-3"
                    />
                    {language === 'ar' ? 'خطر حقيقي' :
                     language === 'en' ? 'Real danger' :
                     'Danger réel'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Content Outside Image */}
            <div className="lg:col-span-3">
              <div className="space-y-6 xl:space-y-8">
                {/* Main Title */}
                <div className="text-center lg:text-right">
                  <div className="bg-logo-yellow-500/90 backdrop-blur-sm rounded-full w-16 h-16 xl:w-20 xl:h-20 flex items-center justify-center shadow-xl mb-6 mx-auto lg:mx-0 lg:mr-auto">
                    <img 
                      src="/gliisagelogo-06.png" 
                      alt="خطر الانزلاق" 
                      className="w-8 h-8 xl:w-10 xl:h-10"
                    />
                  </div>
                  
                                      <h2 className="text-4xl xl:text-5xl font-bold leading-tight text-primary-800 mb-4">
                    {language === 'ar' ? 'خطر الانزلاق' :
                     language === 'en' ? 'Slip Hazard' :
                     'Risque de Glissade'}<br />
                    <span className="text-logo-yellow-600">
                      {language === 'ar' ? 'يهدد سلامة عائلتك!' :
                       language === 'en' ? 'threatens your family\'s safety!' :
                       'menace la sécurité de votre famille!'}
                    </span>
                  </h2>
                  
                  <p className="text-lg xl:text-xl text-primary-600 leading-relaxed mb-8">
                    {language === 'ar' ? 'كل سنة، آلاف الأشخاص يتعرضون لحوادث خطيرة بسبب الانزلاق في المنازل المغربية' :
                     language === 'en' ? 'Every year, thousands of people suffer serious accidents due to slipping in Moroccan homes' :
                     'Chaque année, des milliers de personnes subissent des accidents graves dus aux glissades dans les foyers marocains'}
                  </p>
                </div>
                
                {/* Main Danger Zones - Only 2 Most Important */}
                <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl xl:text-3xl font-bold mb-6 text-logo-yellow-600 text-center">
                    ⚠️ {language === 'ar' ? 'المناطق الأكثر خطورة' :
                          language === 'en' ? 'Most Dangerous Areas' :
                          'Zones les Plus Dangereuses'}
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="yellow-icon-bg text-black rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-4xl mb-3">🚿</div>
                      <div className="font-bold text-xl">{t.problem.cards.bathroom.title}</div>
                      <div className="text-black/80 text-sm mt-1">
                        {language === 'ar' ? 'الأخطر' :
                         language === 'en' ? 'Most dangerous' :
                         'Le plus dangereux'}
                      </div>
                    </div>
                    <div className="yellow-icon-bg text-black rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-4xl mb-3">🍳</div>
                      <div className="font-bold text-xl">{t.problem.cards.kitchen.title}</div>
                      <div className="text-black/80 text-sm mt-1">
                        {language === 'ar' ? 'خطر عالي' :
                         language === 'en' ? 'High risk' :
                         'Risque élevé'}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Solution CTA - Simplified */}
                <div className="bg-gradient-to-r from-logo-yellow-500 to-black text-white rounded-2xl p-6 xl:p-8 shadow-lg text-center">
                  <h3 className="text-2xl xl:text-3xl font-bold mb-6">
                    ✅ {language === 'ar' ? 'الحل مع Zero Glissage' :
                          language === 'en' ? 'The Solution with Zero Glissage' :
                          'La Solution avec Zero Glissage'}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-3xl xl:text-4xl font-bold mb-2">100%</div>
                      <div className="text-sm">
                        {language === 'ar' ? 'أمان' :
                         language === 'en' ? 'Safety' :
                         'Sécurité'}
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-3xl xl:text-4xl font-bold mb-2">0%</div>
                      <div className="text-sm">
                        {language === 'ar' ? 'تغيير' :
                         language === 'en' ? 'Change' :
                         'Changement'}
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-3xl xl:text-4xl font-bold mb-2">5+</div>
                      <div className="text-sm">
                        {language === 'ar' ? 'سنوات' :
                         language === 'en' ? 'Years' :
                         'Années'}
                      </div>
                    </div>
                  </div>
                  <WhatsAppButton 
                    text={language === 'ar' ? 'احجز استشارة مجانية' :
                          language === 'en' ? 'Book free consultation' :
                          'Réserver consultation gratuite'} 
                    className="text-lg xl:text-xl px-8 py-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 lg:w-60 lg:h-60 bg-logo-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 lg:w-80 lg:h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      </section>

      {/* Enhanced Responsive Cards Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-warm-gray-50 via-primary-50 to-warm-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
              {t.problem.title}
            </h2>
          </div>
          
          {/* Desktop Grid Layout / Mobile Carousel */}
          <div className="relative max-w-7xl mx-auto">
            {/* Fixed Mobile Horizontal Carousel */}
            <div className="md:hidden mobile-carousel-container">
              <div className="mobile-carousel-content">
                {/* Kitchen Card */}
                <div className="mobile-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-logo-yellow-500 snap-start animate-slide-in-right animation-delay-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-logo-yellow-100 to-logo-yellow-200 rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <ChefHat className="w-7 h-7 text-logo-yellow-800" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{t.problem.cards.kitchen.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {t.problem.cards.kitchen.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-logo-yellow-500 rounded-full animate-pulse"></span>
                        <span className="text-logo-yellow-500 text-sm font-semibold">{t.problem.cards.kitchen.danger}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bathroom Card */}
                <div className="mobile-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-black snap-start animate-slide-in-right animation-delay-400">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <Droplets className="w-7 h-7 text-black" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{t.problem.cards.bathroom.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {t.problem.cards.bathroom.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-logo-yellow-500 rounded-full animate-pulse"></span>
                        <span className="text-logo-yellow-500 text-sm font-semibold">{t.problem.cards.bathroom.danger}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stairs Card */}
                <div className="mobile-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-logo-yellow-600 snap-start animate-slide-in-right animation-delay-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-logo-yellow-100 to-logo-yellow-200 rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <TrendingUp className="w-7 h-7 text-logo-yellow-800" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{t.problem.cards.stairs.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {t.problem.cards.stairs.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-logo-yellow-600 rounded-full animate-pulse"></span>
                        <span className="text-logo-yellow-600 text-sm font-semibold">{t.problem.cards.stairs.danger}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pool Card */}
                <div className="mobile-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-black snap-start animate-slide-in-right animation-delay-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <Waves className="w-7 h-7 text-black" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{t.problem.cards.pool.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {t.problem.cards.pool.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-logo-yellow-500 rounded-full animate-pulse"></span>
                        <span className="text-logo-yellow-500 text-sm font-semibold">{t.problem.cards.pool.danger}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Kitchen Card */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-logo-yellow-500 h-full">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-logo-yellow-100 to-logo-yellow-200 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <ChefHat className="w-8 h-8 lg:w-10 lg:h-10 text-logo-yellow-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t.problem.cards.kitchen.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    {t.problem.cards.kitchen.description}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-logo-yellow-500 rounded-full animate-pulse"></span>
                    <span className="text-logo-yellow-500 text-sm lg:text-base font-semibold">{t.problem.cards.kitchen.danger}</span>
                  </div>
                </div>
              </div>
              
              {/* Bathroom Card */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-black h-full">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <Droplets className="w-8 h-8 lg:w-10 lg:h-10 text-black" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t.problem.cards.bathroom.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    {t.problem.cards.bathroom.description}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-logo-yellow-500 rounded-full animate-pulse"></span>
                    <span className="text-logo-yellow-500 text-sm lg:text-base font-semibold">{t.problem.cards.bathroom.danger}</span>
                  </div>
                </div>
              </div>
              
              {/* Stairs Card */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-logo-yellow-600 h-full">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-logo-yellow-100 to-logo-yellow-200 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-logo-yellow-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t.problem.cards.stairs.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    {t.problem.cards.stairs.description}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-logo-yellow-600 rounded-full animate-pulse"></span>
                    <span className="text-logo-yellow-600 text-sm lg:text-base font-semibold">{t.problem.cards.stairs.danger}</span>
                  </div>
                </div>
              </div>
              
              {/* Pool Card */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-black h-full">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <Waves className="w-8 h-8 lg:w-10 lg:h-10 text-black" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t.problem.cards.pool.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    {t.problem.cards.pool.description}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-logo-yellow-500 rounded-full animate-pulse"></span>
                    <span className="text-logo-yellow-500 text-sm lg:text-base font-semibold">{t.problem.cards.pool.danger}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg max-w-4xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 text-black">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="font-semibold text-base lg:text-lg">
                    {language === 'ar' ? 'كل دقيقة مهمة' :
                     language === 'en' ? 'Every minute matters' :
                     'Chaque minute compte'}
                  </span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="font-semibold text-base lg:text-lg">
                    {language === 'ar' ? 'الوقاية خير من العلاج' :
                     language === 'en' ? 'Prevention is better than cure' :
                     'Mieux vaut prévenir que guérir'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <WhatsAppButton 
                text={t.ctas.protectFamily + ' - ' + t.ctas.freeInspection} 
                className="w-full sm:w-auto text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After - Real Floor Results */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
              {t.beforeAfter.title}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              {t.beforeAfter.subtitle}
            </p>
          </div>
          
          {/* Interactive Comparison Component */}
          <div className="max-w-6xl mx-auto mb-16">
            <EnhancedBeforeAfter
              comparisons={[
                {
                  beforeImage: "/images/beforfloor.jpg",
                  afterImage: "/images/afterfloor.jpg",
                  beforeLabel: t.beforeAfter.beforeLabel,
                  afterLabel: t.beforeAfter.afterLabel,
                  location: t.beforeAfter.location,
                  description: t.beforeAfter.description
                }
              ]}
              showControls={false}
              className="w-full"
              language={language}
            />
          </div>
          
          <div className="text-center mt-12">
            <div className="flex justify-center">
              <WhatsAppButton text={t.beforeAfter.cta} className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Solution Features - Mobile Optimized */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-warm-gray-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
              <span className="text-logo-yellow-600">Zero Glissage</span> {t.solution.title.split(' ').slice(2).join(' ')}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
              {t.solution.subtitle}
            </p>
          </div>

          {/* Compact Product Showcase */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 mb-8 lg:mb-12">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/3.PNG" 
                    alt="منتج Zero Glissage المضاد للانزلاق" 
                    className="w-full h-60 md:h-72 lg:h-80 xl:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-logo-yellow-600 text-black px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base font-bold">
                    ✅ {t.solution.original}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4">
                    <h3 className="font-bold text-gray-800 mb-1 text-sm lg:text-base">Zero Glissage Professional</h3>
                    <p className="text-xs lg:text-sm text-gray-600">{t.solution.technology}</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4 lg:space-y-6">
                <div className="flex items-start gap-4 p-4 lg:p-6 bg-gradient-to-r from-logo-yellow-50 to-logo-yellow-100 rounded-xl">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-logo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">{t.solution.dutchTech}</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{t.solution.imported}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 lg:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">
                      {language === 'ar' ? 'مختبر علمياً' :
                       language === 'en' ? 'Scientifically Tested' :
                       'Testé Scientifiquement'}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base">{t.solution.certified}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 lg:p-6 bg-gradient-to-r from-logo-yellow-50 to-amber-100 rounded-xl">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">{t.solution.guarantee}</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {language === 'ar' ? 'فعالية مؤكدة أو استرداد المال' :
                       language === 'en' ? 'Proven effectiveness or money back' :
                       'Efficacité prouvée ou remboursement'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Compact Feature Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-logo-yellow-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-logo-yellow-600" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">{t.solution.features.transparent.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                {t.solution.features.transparent.description}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gray-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Wrench className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">{t.solution.features.noBreaking.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                {t.solution.features.noBreaking.description}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-amber-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-amber-600" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">{t.solution.features.fastDrying.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                {t.solution.features.fastDrying.description}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-logo-yellow-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-logo-yellow-600" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">{t.solution.features.longLasting.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                {t.solution.features.longLasting.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact How It Works */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>
          
          {/* Combined Process & Visual */}
          <div className="bg-gradient-to-br from-logo-yellow-50 to-warm-gray-100 rounded-3xl p-6 md:p-8 lg:p-12 mb-8 lg:mb-12 card-shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Process Steps */}
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-logo-yellow-500 text-black rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">1</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-logo-yellow-100 rounded-xl p-3 lg:p-4">
                      <Search className="w-6 h-6 lg:w-7 lg:h-7 text-logo-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">{t.howItWorks.steps.inspection.title}</h3>
                      <p className="text-gray-600 text-sm lg:text-base">{t.howItWorks.steps.inspection.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-black text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">2</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 rounded-xl p-3 lg:p-4">
                      <Droplets className="w-6 h-6 lg:w-7 lg:h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">{t.howItWorks.steps.cleaning.title}</h3>
                      <p className="text-gray-600 text-sm lg:text-base">{t.howItWorks.steps.cleaning.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-logo-yellow-600 text-black rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">3</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-logo-yellow-100 rounded-xl p-3 lg:p-4">
                      <Brush className="w-6 h-6 lg:w-7 lg:h-7 text-logo-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">{t.howItWorks.steps.application.title}</h3>
                      <p className="text-gray-600 text-sm lg:text-base">{t.howItWorks.steps.application.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-black text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">4</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 rounded-xl p-3 lg:p-4">
                      <TestTube className="w-6 h-6 lg:w-7 lg:h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">{t.howItWorks.steps.testing.title}</h3>
                      <p className="text-gray-600 text-sm lg:text-base">{t.howItWorks.steps.testing.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Process */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/2.PNG" 
                    alt="عملية التنظيف العميق للأرضية بتقنية Zero Glissage" 
                    className="w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-logo-yellow-600/20 to-black/20"></div>
                  <div className="absolute top-4 left-4 bg-logo-yellow-600 text-black px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base font-bold">
                    🧽 {language === 'ar' ? 'تنظيف مهني' : language === 'en' ? 'Professional Cleaning' : 'Nettoyage Professionnel'}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xl lg:text-2xl font-bold text-logo-yellow-600">1</div>
                        <div className="text-xs lg:text-sm text-gray-700">
                          {language === 'ar' ? 'إزالة الأوساخ' : language === 'en' ? 'Remove dirt' : 'Enlever saleté'}
                        </div>
                      </div>
                      <div>
                        <div className="text-xl lg:text-2xl font-bold text-black">2</div>
                        <div className="text-xs lg:text-sm text-gray-700">
                          {language === 'ar' ? 'تنظيف عميق' : language === 'en' ? 'Deep clean' : 'Nettoyage profond'}
                        </div>
                      </div>
                      <div>
                        <div className="text-xl lg:text-2xl font-bold text-logo-yellow-600">3</div>
                        <div className="text-xs lg:text-sm text-gray-700">
                          {language === 'ar' ? 'تحضير السطح' : language === 'en' ? 'Prepare surface' : 'Préparer surface'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 lg:mt-6">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-2 lg:mb-3">
                    {language === 'ar' ? 'عملية التنظيف المهنية' :
                     language === 'en' ? 'Professional Cleaning Process' :
                     'Processus de Nettoyage Professionnel'}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {language === 'ar' ? 'خطوة أساسية لضمان فعالية Zero Glissage القصوى' :
                     language === 'en' ? 'Essential step to ensure maximum Zero Glissage effectiveness' :
                     'Étape essentielle pour assurer l\'efficacité maximale de Zero Glissage'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <WhatsAppButton text={t.ctas.bookNow + ' - ' + t.ctas.freeInspection} className="w-full sm:w-auto text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Testimonials Carousel */}
      <section className="py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-warm-gray-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 lg:w-60 lg:h-60 bg-logo-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 lg:w-80 lg:h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 lg:mb-8">
              {t.testimonials.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="max-w-5xl mx-auto relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-6xl lg:text-8xl text-logo-yellow-100 font-serif">"</div>
              
              {/* Stars Rating */}
              <div className="flex justify-center mb-6 lg:mb-8">
                {[...Array(t.testimonials.customers[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 lg:w-8 lg:h-8 text-logo-yellow-400 fill-current mx-1" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <div className="text-center mb-8 lg:mb-12">
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 leading-relaxed font-medium mb-6 lg:mb-8 italic">
                  "{t.testimonials.customers[currentTestimonial].text}"
                </p>
                
                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-6 lg:pt-8">
                  <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-2 lg:mb-3">
                    {t.testimonials.customers[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-base lg:text-lg xl:text-xl">
                    {t.testimonials.customers[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-logo-yellow-50 rounded-full p-3 lg:p-4 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600 group-hover:text-logo-yellow-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-logo-yellow-50 rounded-full p-3 lg:p-4 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600 group-hover:text-logo-yellow-600" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 lg:mt-12 gap-3">
            {t.testimonials.customers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-logo-yellow-600 w-8 lg:w-10' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-logo-yellow-600 mb-2 lg:mb-3">+500</div>
              <div className="text-gray-600 text-sm lg:text-base">
                {language === 'ar' ? 'عميل راضي' : language === 'en' ? 'Happy customers' : 'Clients satisfaits'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-logo-yellow-600 mb-2 lg:mb-3">5★</div>
              <div className="text-gray-600 text-sm lg:text-base">
                {language === 'ar' ? 'متوسط التقييم' : language === 'en' ? 'Average rating' : 'Note moyenne'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-2 lg:mb-3">100%</div>
              <div className="text-gray-600 text-sm lg:text-base">
                {language === 'ar' ? 'ضمان الجودة' : language === 'en' ? 'Quality guarantee' : 'Garantie qualité'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-600 mb-2 lg:mb-3">24h</div>
              <div className="text-gray-600 text-sm lg:text-base">
                {language === 'ar' ? 'استجابة سريعة' : language === 'en' ? 'Fast response' : 'Réponse rapide'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact FAQ Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
              {t.faq.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
              {t.faq.subtitle}
            </p>
          </div>
          
          {/* Compact FAQ Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                              {t.faq.questions.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-warm-gray-50 to-white rounded-2xl p-6 lg:p-8 card-shadow border border-warm-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-logo-yellow-100 rounded-full p-2 lg:p-3 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-logo-yellow-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-3 lg:mb-4 leading-tight">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base xl:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
                          {/* Quick Contact CTA */}
              <div className="text-center mt-12 lg:mt-16">
                <div className="bg-gradient-to-r from-logo-yellow-50 to-warm-gray-100 rounded-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto card-shadow-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
                  {t.faq.hasQuestion}
                </h3>
                <p className="text-gray-600 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">
                  {language === 'ar' ? 'تواصل معنا مباشرة للحصول على إجابات فورية' :
                   language === 'en' ? 'Contact us directly for instant answers' :
                   'Contactez-nous directement pour des réponses instantanées'}
                </p>
                <div className="flex justify-center">
                  <WhatsAppButton 
                    text={t.faq.askExperts} 
                    className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Final CTA with Logo */}
      <section className="py-12 md:py-16 lg:py-24 text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/backgroundherodesktop.jpg)' }}
        ></div>
        
        <div className="absolute inset-0 bg-black/60 lg:bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Logo and Main CTA Combined */}
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
              {t.finalCta.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-12 text-gray-100">
              {t.finalCta.subtitle.replace('Zero Glissage', '')} <span className="text-logo-yellow-400 font-semibold">Zero Glissage</span>
            </p>
            
            {/* Main CTA Button */}
            <div className="flex justify-center mb-8 lg:mb-12">
              <WhatsAppButton 
                text={t.finalCta.cta} 
                className="text-lg md:text-xl lg:text-2xl px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 bg-logo-yellow-500 hover:bg-logo-yellow-600 w-full sm:w-auto"
              />
            </div>
            
            {/* Compact Benefits Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 xl:p-8 text-center">
                <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 mx-auto mb-2 lg:mb-3 text-logo-yellow-400" />
                <h3 className="font-bold text-sm md:text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">{t.finalCta.benefits.freeInspection.title}</h3>
                <p className="text-gray-100 text-xs lg:text-sm xl:text-base">{t.finalCta.benefits.freeInspection.description}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 xl:p-8 text-center">
                <TestTube className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 mx-auto mb-2 lg:mb-3 text-logo-yellow-400" />
                <h3 className="font-bold text-sm md:text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">{t.finalCta.benefits.freeTrial.title}</h3>
                <p className="text-gray-100 text-xs lg:text-sm xl:text-base">{t.finalCta.benefits.freeTrial.description}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 xl:p-8 text-center">
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 mx-auto mb-2 lg:mb-3 text-logo-yellow-400" />
                <h3 className="font-bold text-sm md:text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">{t.finalCta.benefits.guarantee.title}</h3>
                <p className="text-gray-100 text-xs lg:text-sm xl:text-base">{t.finalCta.benefits.guarantee.description}</p>
              </div>
            </div>
            
            {/* Quick Contact Info */}
            <div className="flex items-center justify-center gap-2 mt-6 lg:mt-8 text-sm md:text-base lg:text-lg text-gray-200">
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>{t.finalCta.contact}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 lg:mb-12">
            <div className="flex justify-center mb-4 lg:mb-6">
              <img 
                src="/gliisagelogo-06.png" 
                alt="Zero Glissage Anti-Slip Icon" 
                className="h-16 md:h-20 lg:h-24 xl:h-28"
              />
            </div>
            <p className="text-gray-400 text-base lg:text-lg xl:text-xl max-w-3xl mx-auto">
              {t.footer.description}
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8 lg:pt-12">
            <p className="text-gray-400 text-sm lg:text-base">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 