'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Move, RotateCcw, MousePointer, Smartphone } from 'lucide-react'

interface ComparisonData {
  beforeImage: string
  afterImage: string
  beforeLabel: string
  afterLabel: string
  location: string
  description: string
}

interface EnhancedBeforeAfterProps {
  comparisons: ComparisonData[]
  className?: string
  showControls?: boolean
  language?: 'ar' | 'en' | 'fr'
}

export const EnhancedBeforeAfter: React.FC<EnhancedBeforeAfterProps> = ({
  comparisons,
  className = "",
  showControls = true,
  language = 'ar'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(30)
  const [isDragging, setIsDragging] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const currentComparison = comparisons[currentIndex]

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Translation helper
  const getInstructionText = () => {
    switch (language) {
      case 'ar':
        return {
          desktop: {
            title: 'اسحب للمقارنة',
            subtitle: 'انقر واسحب الخط الأبيض لترى الفرق المذهل'
          },
          mobile: {
            title: 'اسحب بإصبعك',
            subtitle: 'اسحب الخط الأبيض لترى النتيجة'
          }
        }
      case 'en':
        return {
          desktop: {
            title: 'Drag to Compare',
            subtitle: 'Click and drag the white line to see the amazing difference'
          },
          mobile: {
            title: 'Drag with Your Finger',
            subtitle: 'Drag the white line to see the result'
          }
        }
      case 'fr':
        return {
          desktop: {
            title: 'Glissez pour Comparer',
            subtitle: 'Cliquez et glissez la ligne blanche pour voir la différence incroyable'
          },
          mobile: {
            title: 'Glissez avec Votre Doigt',
            subtitle: 'Glissez la ligne blanche pour voir le résultat'
          }
        }
      default:
        return {
          desktop: {
            title: 'اسحب للمقارنة',
            subtitle: 'انقر واسحب الخط الأبيض لترى الفرق المذهل'
          },
          mobile: {
            title: 'اسحب بإصبعك',
            subtitle: 'اسحب الخط الأبيض لترى النتيجة'
          }
        }
    }
  }

  const instructionText = getInstructionText()

  // Simplified position update function
  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percent)
    
    // Hide instructions after first interaction
    if (showInstructions && !hasInteracted) {
      setShowInstructions(false)
      setHasInteracted(true)
    }
  }, [showInstructions, hasInteracted])

  // Simplified mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }, [updateSliderPosition])

  // Simplified touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
    const touch = e.touches[0]
    updateSliderPosition(touch.clientX)
  }, [updateSliderPosition])

  // Universal move handler for both mouse and touch
  const handleMove = useCallback((clientX: number) => {
    if (isDragging) {
      updateSliderPosition(clientX)
    }
  }, [isDragging, updateSliderPosition])

  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX)
  }, [handleMove])

  // Touch move handler
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault()
      const touch = e.touches[0]
      handleMove(touch.clientX)
    }
  }, [isDragging, handleMove])

  // Universal end handler
  const handleEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Event listeners setup
  useEffect(() => {
    if (isDragging) {
      // Mouse events
      document.addEventListener('mousemove', handleMouseMove, { passive: false })
      document.addEventListener('mouseup', handleEnd, { passive: true })
      
      // Touch events
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleEnd, { passive: true })
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd])

  const nextComparison = () => {
    setCurrentIndex(prev => (prev + 1) % comparisons.length)
    setSliderPosition(30)
  }

  const prevComparison = () => {
    setCurrentIndex(prev => (prev - 1 + comparisons.length) % comparisons.length)
    setSliderPosition(30)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Comparison Container */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl bg-gray-200 shadow-2xl group cursor-pointer select-none touch-slider"
        style={{ 
          aspectRatio: '16/10',
          touchAction: 'none' // Disable all default touch behaviors
        }}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={currentComparison.afterImage}
            alt={currentComparison.afterLabel}
            className="w-full h-full object-cover transition-all duration-500 select-none"
            draggable={false}
          />
          <div className="absolute top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {currentComparison.afterLabel}
          </div>
          <div className="absolute bottom-6 right-6 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
            {currentComparison.location}
          </div>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div 
          className="absolute inset-0 transition-all duration-100 ease-out pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            transition: isDragging ? 'none' : 'clip-path 0.1s ease-out'
          }}
        >
          <img
            src={currentComparison.beforeImage}
            alt={currentComparison.beforeLabel}
            className="w-full h-full object-cover select-none"
            draggable={false}
          />
          <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {currentComparison.beforeLabel}
          </div>
        </div>

        {/* Interactive Instructions Overlay - Only shows initially */}
        {showInstructions && !hasInteracted && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-30 animate-pulse pointer-events-none">
            <div className="text-center text-white p-6 bg-black/70 rounded-2xl backdrop-blur-sm max-w-md mx-4">
              <div className="hidden md:block">
                <MousePointer className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <p className="text-lg font-semibold mb-2">{instructionText.desktop.title}</p>
                <p className="text-sm opacity-90">{instructionText.desktop.subtitle}</p>
              </div>
              <div className="md:hidden">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <p className="text-lg font-semibold mb-2">{instructionText.mobile.title}</p>
                <p className="text-sm opacity-90">{instructionText.mobile.subtitle}</p>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Slider Line and Handle */}
        <div 
          className={`absolute top-0 bottom-0 bg-white shadow-2xl cursor-col-resize z-20 transition-all duration-200 pointer-events-none ${
            isMobile ? 'w-2' : 'w-1 group-hover:w-2'
          }`}
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Interactive Slider Handle */}
          <div 
            className={`slider-handle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-30 pointer-events-auto ${
              isMobile ? 'w-16 h-16 hover:scale-105' : 'w-14 h-14 hover:scale-110'
            } ${isDragging ? 'scale-125 shadow-blue-500/50' : ''}`}
            style={{ touchAction: 'none' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <Move className={`text-gray-700 ${isMobile ? 'w-7 h-7' : 'w-6 h-6'}`} />
            {!hasInteracted && (
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 opacity-70 animate-ping"></div>
            )}
          </div>

          {/* Vertical indicators */}
          <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg pointer-events-none ${
            isMobile ? 'w-5 h-5' : 'w-4 h-4'
          }`}></div>
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg pointer-events-none ${
            isMobile ? 'w-5 h-5' : 'w-4 h-4'
          }`}></div>
        </div>

        {/* Interactive overlay - captures clicks anywhere on the image */}
        <div 
          className="absolute inset-0 cursor-col-resize z-10"
          style={{ touchAction: 'none' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/20 pointer-events-none">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-green-500 transition-all duration-100"
            style={{ 
              width: `${sliderPosition}%`,
              transition: isDragging ? 'none' : 'width 0.1s ease-out'
            }}
          />
        </div>
      </div>

      {/* Controls */}
      {showControls && comparisons.length > 1 && (
        <div className="flex items-center justify-between mt-6 bg-gray-50 rounded-xl p-4 shadow-lg">
          <button
            onClick={prevComparison}
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <div className="text-center">
            <h3 className="font-bold text-gray-800 mb-1">{currentComparison.location}</h3>
            <p className="text-sm text-gray-600">{currentComparison.description}</p>
          </div>

          <button
            onClick={nextComparison}
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg"
          >
            <RotateCcw className="w-5 h-5 rotate-180" />
          </button>
        </div>
      )}

      {/* Comparison indicators */}
      {comparisons.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2 space-x-reverse">
          {comparisons.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setSliderPosition(30)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
} 