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
  MessageCircle,
  Phone,
  Star,
  MousePointer,
  RotateCcw
} from 'lucide-react'
import { EnhancedBeforeAfter } from '../components/ui/enhanced-before-after'

const WHATSAPP_NUMBER = "212XXXXXXXXX"
const WHATSAPP_MESSAGE = "سلام، شفت العرض ديال Zero Glissage وبغيت نجرب الخدمة."

const trackWhatsAppClick = () => {
  // Google Analytics Event
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
  const handleClick = () => {
    trackWhatsAppClick()
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${className}`}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
      </svg>
      {text}
    </button>
  )
}

const FloatingWhatsApp = () => {
  const handleClick = () => {
    trackWhatsAppClick()
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')
  }

  return (
    <div className="whatsapp-float animate-pulse-slow" onClick={handleClick}>
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
      </svg>
    </div>
  )
}

export default function LandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const testimonials = [
    {
      text: "كان الحمام ديالي خطير بزاف، خاصة للولاد الصغار. من بعد Zero Glissage ولاّ آمن 100% وما تغيرش الشكل والا اللون.",
      name: "فاطمة بنعلي",
      location: "الرباط - أم لثلاثة أطفال",
      rating: 5
    },
    {
      text: "المطبخ كان يولي زلق من الماء والزيت. دابا راني مرتاح وما خايفش على مراتي وأنا كنطبخو.",
      name: "عبد الرحمان الإدريسي",
      location: "الدار البيضاء",
      rating: 5
    },
    {
      text: "الدرج ديال الدار كان خطير بزاف. دابا حتى فالشتا والمطر ما كايزلقش. شكراً Zero Glissage!",
      name: "خديجة السباعي",
      location: "فاس",
      rating: 5
    },
    {
      text: "خدمة ممتازة والفريق مهني بزاف. النتيجة فاقت التوقعات ديالي. أنصح بيه كل واحد عندو مشكل مع الانزلاق.",
      name: "محمد الحسني",
      location: "مراكش - مهندس",
      rating: 5
    },
    {
      text: "المسبح ديالنا كان خطير للأطفال. دابا ولاّ آمن تماماً وما أثرش على جمال الأرضية. شكراً للفريق المحترف.",
      name: "سعاد التازي",
      location: "أكادير - صاحبة فيلا",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative text-white py-8 md:py-12 lg:py-16 overflow-hidden hero-bg lg:hero-bg-desktop">
        {/* Desktop Background Image */}
        <div 
          className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/backgroundherodesktop.jpg)' }}
        ></div>
        
        {/* No overlay on mobile, light overlay on desktop */}
        <div className="absolute inset-0 bg-transparent md:bg-black/10 lg:bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent md:from-blue-900/30 lg:from-blue-900/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Zero Glissage Logo - Main Title Replacement */}
            <div className="animate-float mb-6 animate-fade-in-up">
              <img 
                src="/gliisagelogo-01.png" 
                alt="Zero Glissage Logo" 
                className="h-24 md:h-32 lg:h-40 xl:h-48 mx-auto mb-4 drop-shadow-2xl filter brightness-110"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-white animate-fade-in-up animation-delay-200">
              حل مضاد للانزلاق
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 lg:mb-8 text-blue-100 font-medium max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
              تقنية مبتكرة لحماية عائلتك من مخاطر الانزلاق
              <br />
              <span className="text-yellow-300">بدون تكسير • شفاف • آمن 100%</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 lg:mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
              <WhatsAppButton 
                text="احصل على استشارة مجانية الآن" 
                className="text-base lg:text-lg px-8 py-4 w-full sm:w-auto mx-auto animate-bounce-gentle"
              />
              <div className="flex items-center text-green-300 font-semibold text-sm lg:text-base animate-pulse-gentle">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                فحص وتجربة مجانية في منزلك
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 text-center text-sm max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-6 animate-fade-in-up animation-delay-800">
                <div className="text-xl lg:text-3xl font-bold text-yellow-400 animate-count-up">+500</div>
                <div className="text-xs lg:text-base">منزل محمي</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-6 animate-fade-in-up animation-delay-1000">
                <div className="text-xl lg:text-3xl font-bold text-green-400 animate-count-up">100%</div>
                <div className="text-xs lg:text-base">ضمان الجودة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-6 animate-fade-in-up animation-delay-1200">
                <div className="text-xl lg:text-3xl font-bold text-blue-300 animate-count-up">24h</div>
                <div className="text-xs lg:text-base">خدمة سريعة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-6 animate-fade-in-up animation-delay-1400">
                <div className="text-xl lg:text-3xl font-bold text-purple-300 animate-count-up">5★</div>
                <div className="text-xs lg:text-base">تقييم العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Glass Morphism Design */}
      <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-red-50 via-red-25 to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Mobile Layout - Full Width Image with Overlay (unchanged) */}
          <div className="lg:hidden relative max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/1.PNG" 
                alt="خطر الانزلاق على الأرضيات المبللة" 
                className="w-full h-auto min-h-[500px] md:min-h-[600px] object-cover"
              />
              
              {/* Image overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Mobile: Centered Glass Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden max-w-4xl w-full">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-red-500/5 rounded-3xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-red-500/90 backdrop-blur-sm rounded-full mb-6 shadow-xl">
                      <img 
                        src="/gliisagelogo-06.png" 
                        alt="خطر الانزلاق" 
                        className="w-12 h-12 md:w-16 md:h-16"
                      />
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
                      خطر الانزلاق يهدد سلامة عائلتك!
                    </h2>
                    
                    <div className="max-w-3xl mx-auto space-y-6">
                      <p className="text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_70%)]">
                        كل سنة، آلاف الأشخاص يتعرضون لحوادث خطيرة بسبب الانزلاق في المنازل.
                      </p>
                      <div className="bg-red-600/95 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block shadow-xl border border-red-400/70">
                        <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                          لا تنتظر حتى يحدث الحادث!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glass effect decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-200/20 to-transparent rounded-full blur-lg"></div>
                </div>
              </div>
              
              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 drop-shadow-lg">
                    هذا ما يحدث كل يوم في البيوت المغربية
                  </h3>
                  <p className="text-sm md:text-base text-white/90 drop-shadow-lg">
                    الأرضيات المبللة = خطر حقيقي على عائلتك
                  </p>
                </div>
              </div>
              
              {/* Floating Danger Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg border border-red-400/50 flex items-center gap-2">
                  <img 
                    src="/gliisagelogo-06.png" 
                    alt="خطر الانزلاق" 
                    className="w-4 h-4"
                  />
                  خطر حقيقي
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
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 xl:p-6 border border-white/20 text-center">
                    <div className="bg-red-500/90 rounded-full w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center mx-auto mb-3 shadow-xl">
                      <img 
                        src="/gliisagelogo-06.png" 
                        alt="خطر الانزلاق" 
                        className="w-6 h-6 xl:w-8 xl:h-8"
                      />
                    </div>
                    <h3 className="text-lg xl:text-xl font-bold text-white mb-2 drop-shadow-lg">
                      لا تنتظر حتى يحدث الحادث!
                    </h3>
                    <WhatsAppButton 
                      text="فحص مجاني فوري" 
                      className="w-full text-sm xl:text-base px-4 py-3"
                    />
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-red-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg border border-red-400/50 flex items-center gap-2">
                    <img 
                      src="/gliisagelogo-06.png" 
                      alt="خطر الانزلاق" 
                      className="w-3 h-3"
                    />
                    خطر حقيقي
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Content Outside Image */}
            <div className="lg:col-span-3">
              <div className="space-y-6 xl:space-y-8">
                {/* Main Title */}
                <div className="text-center lg:text-right">
                  <div className="bg-red-500/90 backdrop-blur-sm rounded-full w-16 h-16 xl:w-20 xl:h-20 flex items-center justify-center shadow-xl mb-6 mx-auto lg:mx-0 lg:mr-auto">
                    <img 
                      src="/gliisagelogo-06.png" 
                      alt="خطر الانزلاق" 
                      className="w-8 h-8 xl:w-10 xl:h-10"
                    />
                  </div>
                  
                  <h2 className="text-4xl xl:text-5xl font-bold leading-tight text-gray-800 mb-4">
                    خطر الانزلاق<br />
                    <span className="text-red-600">يهدد سلامة عائلتك!</span>
                  </h2>
                  
                  <p className="text-lg xl:text-xl text-gray-700 leading-relaxed mb-8">
                    كل سنة، آلاف الأشخاص يتعرضون لحوادث خطيرة بسبب الانزلاق في المنازل المغربية
                  </p>
                </div>
                
                {/* Main Danger Zones - Only 2 Most Important */}
                <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl xl:text-3xl font-bold mb-6 text-orange-600 text-center">
                    ⚠️ المناطق الأكثر خطورة
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-red-600 text-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-4xl mb-3">🚿</div>
                      <div className="font-bold text-xl">الحمام</div>
                      <div className="text-red-100 text-sm mt-1">الأخطر</div>
                    </div>
                    <div className="bg-orange-600 text-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-4xl mb-3">🍳</div>
                      <div className="font-bold text-xl">المطبخ</div>
                      <div className="text-orange-100 text-sm mt-1">خطر عالي</div>
                    </div>
                  </div>
                </div>
                
                {/* Solution CTA - Simplified */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-6 xl:p-8 shadow-lg text-center">
                  <h3 className="text-2xl xl:text-3xl font-bold mb-6">
                    ✅ الحل مع Zero Glissage
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-3xl xl:text-4xl font-bold mb-2">100%</div>
                      <div className="text-sm">أمان</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-3xl xl:text-4xl font-bold mb-2">0%</div>
                      <div className="text-sm">تغيير</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-3xl xl:text-4xl font-bold mb-2">5+</div>
                      <div className="text-sm">سنوات</div>
                    </div>
                  </div>
                  <WhatsAppButton 
                    text="احجز استشارة مجانية" 
                    className="text-lg xl:text-xl px-8 py-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 lg:w-60 lg:h-60 bg-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 lg:w-80 lg:h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
      </section>

      {/* Enhanced Responsive Cards Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-red-50 via-red-25 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
              المناطق التي تحتاج حماية
            </h2>
          </div>
          
          {/* Desktop Grid Layout / Mobile Carousel */}
          <div className="relative max-w-7xl mx-auto">
            {/* Mobile Horizontal Carousel */}
            <div className="md:hidden overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-4 snap-x snap-mandatory min-w-max px-4">
                {/* Kitchen Card */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-red-500 w-80 flex-shrink-0 snap-start animate-slide-in-right animation-delay-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <ChefHat className="w-7 h-7 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">المطبخ</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        الماء والزيوت تجعل أرضية المطبخ خطيرة جداً، خاصة للأطفال وكبار السن
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-red-500 text-sm font-semibold">خطر عالي</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bathroom Card */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500 w-80 flex-shrink-0 snap-start animate-slide-in-right animation-delay-400">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <Droplets className="w-7 h-7 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">الحمام</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        المكان الأكثر خطورة في المنزل - الماء والصابون يخلقان سطح زلق جداً
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-red-500 text-sm font-semibold">خطر شديد</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stairs Card */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500 w-80 flex-shrink-0 snap-start animate-slide-in-right animation-delay-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <TrendingUp className="w-7 h-7 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">الدرج</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        السقوط من الدرج يمكن أن يسبب إصابات خطيرة جداً أو حتى الوفاة
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                        <span className="text-red-600 text-sm font-semibold">خطر قاتل</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pool Card */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-cyan-500 w-80 flex-shrink-0 snap-start animate-slide-in-right animation-delay-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <Waves className="w-7 h-7 text-cyan-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">المسبح</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        المنطقة المحيطة بالمسبح تصبح زلقة جداً عندما تكون مبللة
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                        <span className="text-orange-500 text-sm font-semibold">خطر متوسط</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Kitchen Card */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-red-500 h-full">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <ChefHat className="w-8 h-8 lg:w-10 lg:h-10 text-red-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">المطبخ</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    الماء والزيوت تجعل أرضية المطبخ خطيرة جداً، خاصة للأطفال وكبار السن
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-red-500 text-sm lg:text-base font-semibold">خطر عالي</span>
                  </div>
                </div>
              </div>
              
              {/* Bathroom Card */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500 h-full">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <Droplets className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">الحمام</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    المكان الأكثر خطورة في المنزل - الماء والصابون يخلقان سطح زلق جداً
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-red-500 text-sm lg:text-base font-semibold">خطر شديد</span>
                  </div>
                </div>
              </div>
              
              {/* Stairs Card */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500 h-full">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">الدرج</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    السقوط من الدرج يمكن أن يسبب إصابات خطيرة جداً أو حتى الوفاة
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                    <span className="text-red-600 text-sm lg:text-base font-semibold">خطر قاتل</span>
                  </div>
                </div>
              </div>
              
              {/* Pool Card */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-cyan-500 h-full">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <Waves className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">المسبح</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    المنطقة المحيطة بالمسبح تصبح زلقة جداً عندما تكون مبللة
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    <span className="text-orange-500 text-sm lg:text-base font-semibold">خطر متوسط</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg max-w-4xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 text-red-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="font-semibold text-base lg:text-lg">كل دقيقة مهمة</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-red-300"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="font-semibold text-base lg:text-lg">الوقاية خير من العلاج</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <WhatsAppButton 
                text="احم عائلتك الآن - استشارة مجانية" 
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
              النتيجة الحقيقية مع Zero Glissage
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              شاهد التحول المذهل - نفس الأرضية، أمان كامل
            </p>
          </div>
          
          {/* Interactive Comparison Component */}
          <div className="max-w-6xl mx-auto mb-16">
            <EnhancedBeforeAfter
              comparisons={[
                {
                  beforeImage: "/images/beforfloor.jpg",
                  afterImage: "/images/afterfloor.jpg",
                  beforeLabel: "أرضية زلقة وخطيرة",
                  afterLabel: "آمنة مع Zero Glissage",
                  location: "نتيجة حقيقية - عميل فعلي",
                  description: "تحول كامل لأرضية حقيقية بتقنية Zero Glissage"
                }
              ]}
              showControls={false}
              className="w-full"
            />
          </div>
          
          <div className="text-center mt-12">
            <div className="flex justify-center">
              <WhatsAppButton text="شاهد النتيجة في منزلك - تجربة مجانية" className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Solution Features - Mobile Optimized */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
              <span className="text-green-600">Zero Glissage</span> الحل الأمثل
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
              تقنية ثورية تجعل أرضياتك آمنة بنسبة 100% بدون تغيير شكلها أو لونها
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
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base font-bold">
                    ✅ منتج أصلي
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4">
                    <h3 className="font-bold text-gray-800 mb-1 text-sm lg:text-base">Zero Glissage Professional</h3>
                    <p className="text-xs lg:text-sm text-gray-600">التقنية الألمانية الأصلية المضادة للانزلاق</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4 lg:space-y-6">
                <div className="flex items-start gap-4 p-4 lg:p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">تقنية ألمانية متقدمة</h3>
                    <p className="text-gray-600 text-sm lg:text-base">منتج أصلي مستورد من ألمانيا</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">مختبر علمياً</h3>
                    <p className="text-gray-600 text-sm lg:text-base">شهادات أمان أوروبية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 lg:p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">نتائج مضمونة</h3>
                    <p className="text-gray-600 text-sm lg:text-base">فعالية مؤكدة أو استرداد المال</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Compact Feature Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">شفاف تماماً</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                لا يغير شكل أو لون الأرضية
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Wrench className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">بدون تكسير</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                العمل نظيف وسريع
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-purple-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">سريع الجفاف</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                جاهز للاستعمال خلال ساعات
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-yellow-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">يدوم سنوات</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                حماية طويلة المدى
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
              كيف نعمل؟
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
              عملية بسيطة وسريعة لحماية منزلك بشكل نهائي
            </p>
          </div>
          
          {/* Combined Process & Visual */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 md:p-8 lg:p-12 mb-8 lg:mb-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Process Steps */}
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">1</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-xl p-3 lg:p-4">
                      <Search className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">فحص مجاني</h3>
                      <p className="text-gray-600 text-sm lg:text-base">نزور منزلك ونفحص المناطق المطلوبة</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">2</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-xl p-3 lg:p-4">
                      <Droplets className="w-6 h-6 lg:w-7 lg:h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">تنظيف عميق</h3>
                      <p className="text-gray-600 text-sm lg:text-base">تنظيف مهني لضمان التصاق مثالي</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">3</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 rounded-xl p-3 lg:p-4">
                      <Brush className="w-6 h-6 lg:w-7 lg:h-7 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">تطبيق المنتج</h3>
                      <p className="text-gray-600 text-sm lg:text-base">تطبيق Zero Glissage بتقنية خاصة</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-orange-500 text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">4</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 rounded-xl p-3 lg:p-4">
                      <TestTube className="w-6 h-6 lg:w-7 lg:h-7 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">اختبار الأمان</h3>
                      <p className="text-gray-600 text-sm lg:text-base">اختبار فعالية المنتج أمامك</p>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base font-bold">
                    🧽 تنظيف مهني
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xl lg:text-2xl font-bold text-blue-600">1</div>
                        <div className="text-xs lg:text-sm text-gray-700">إزالة الأوساخ</div>
                      </div>
                      <div>
                        <div className="text-xl lg:text-2xl font-bold text-green-600">2</div>
                        <div className="text-xs lg:text-sm text-gray-700">تنظيف عميق</div>
                      </div>
                      <div>
                        <div className="text-xl lg:text-2xl font-bold text-purple-600">3</div>
                        <div className="text-xs lg:text-sm text-gray-700">تحضير السطح</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 lg:mt-6">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-2 lg:mb-3">
                    عملية التنظيف المهنية
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    خطوة أساسية لضمان فعالية Zero Glissage القصوى
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <WhatsAppButton text="احجز موعد الفحص المجاني" className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Testimonials Carousel */}
      <section className="py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 lg:w-60 lg:h-60 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 lg:w-80 lg:h-80 bg-green-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 lg:mb-8">
              ماذا يقول عملاؤنا؟
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
              آراء حقيقية من عائلات مغربية جربت Zero Glissage
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="max-w-5xl mx-auto relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-6xl lg:text-8xl text-blue-100 font-serif">"</div>
              
              {/* Stars Rating */}
              <div className="flex justify-center mb-6 lg:mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <div className="text-center mb-8 lg:mb-12">
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 leading-relaxed font-medium mb-6 lg:mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-6 lg:pt-8">
                  <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-2 lg:mb-3">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-base lg:text-lg xl:text-xl">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-50 rounded-full p-3 lg:p-4 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600 group-hover:text-blue-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-50 rounded-full p-3 lg:p-4 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600 group-hover:text-blue-600" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 lg:mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 w-8 lg:w-10' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-2 lg:mb-3">+500</div>
              <div className="text-gray-600 text-sm lg:text-base">عميل راضي</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-green-600 mb-2 lg:mb-3">5★</div>
              <div className="text-gray-600 text-sm lg:text-base">متوسط التقييم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-600 mb-2 lg:mb-3">100%</div>
              <div className="text-gray-600 text-sm lg:text-base">ضمان الجودة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-2 lg:mb-3">24h</div>
              <div className="text-gray-600 text-sm lg:text-base">استجابة سريعة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact FAQ Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
              إجابات على أهم الأسئلة حول Zero Glissage
            </p>
          </div>
          
          {/* Compact FAQ Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  question: "هل يغير شكل أو لون الأرضية؟",
                  answer: "لا، شفاف تماماً ولا يغير الشكل أو اللون. يحافظ على جمال منزلك."
                },
                {
                  question: "كم يدوم مفعول Zero Glissage؟",
                  answer: "يدوم لسنوات طويلة. مقاوم للتآكل والتنظيف مع ضمان الجودة."
                },
                {
                  question: "هل آمن للأطفال والحيوانات؟",
                  answer: "نعم، آمن 100%. منتج طبيعي وغير سام بدون مواد كيميائية ضارة."
                },
                {
                  question: "كم يستغرق التطبيق؟",
                  answer: "من 2-4 ساعات حسب المساحة. يجف بسرعة ويمكن الاستعمال نفس اليوم."
                },
                {
                  question: "يعمل على جميع الأرضيات؟",
                  answer: "نعم، على السيراميك والرخام والحجر الطبيعي والبورسلان."
                },
                {
                  question: "ما هي التكلفة؟",
                  answer: "تعتمد على المساحة ونوع الأرضية. فحص وتقدير مجاني."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 lg:p-3 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-600 rounded-full"></div>
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
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
                  لديك سؤال آخر؟
                </h3>
                <p className="text-gray-600 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">
                  تواصل معنا مباشرة للحصول على إجابات فورية
                </p>
                <div className="flex justify-center">
                  <WhatsAppButton 
                    text="اسأل خبرائنا الآن" 
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
        
        <div className="absolute inset-0 bg-black/40 lg:bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Logo and Main CTA Combined */}
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
              لا تنتظر حتى يحدث الحادث!
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-12 text-blue-100">
              احم عائلتك اليوم بـ <span className="text-yellow-300 font-semibold">Zero Glissage</span>
            </p>
            
            {/* Main CTA Button */}
            <div className="flex justify-center mb-8 lg:mb-12">
              <WhatsAppButton 
                text="احصل على فحص مجاني الآن" 
                className="text-lg md:text-xl lg:text-2xl px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 bg-green-500 hover:bg-green-600 w-full sm:w-auto"
              />
            </div>
            
            {/* Compact Benefits Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 xl:p-8 text-center">
                <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 mx-auto mb-2 lg:mb-3 text-green-400" />
                <h3 className="font-bold text-sm md:text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">فحص مجاني</h3>
                <p className="text-blue-100 text-xs lg:text-sm xl:text-base">بدون تكلفة</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 xl:p-8 text-center">
                <TestTube className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 mx-auto mb-2 lg:mb-3 text-yellow-400" />
                <h3 className="font-bold text-sm md:text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">تجربة مجانية</h3>
                <p className="text-blue-100 text-xs lg:text-sm xl:text-base">اختبر قبل القرار</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 xl:p-8 text-center">
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 mx-auto mb-2 lg:mb-3 text-purple-400" />
                <h3 className="font-bold text-sm md:text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">ضمان شامل</h3>
                <p className="text-blue-100 text-xs lg:text-sm xl:text-base">جودة مضمونة</p>
              </div>
            </div>
            
            {/* Quick Contact Info */}
            <div className="flex items-center justify-center gap-2 mt-6 lg:mt-8 text-sm md:text-base lg:text-lg text-blue-200">
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>استجابة فورية عبر الواتساب</span>
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
              الحل الأمثل لحماية عائلتك من مخاطر الانزلاق. تقنية مبتكرة، نتائج مضمونة، وخدمة عالية الجودة.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8 lg:pt-12">
            <p className="text-gray-400 text-sm lg:text-base">
              © 2024 Zero Glissage. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 