'use client'

import React, { useState, useRef, useCallback } from 'react'
import { Move } from 'lucide-react'

interface BeforeAfterCompareProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
  initialPosition?: number
}

export const BeforeAfterCompare: React.FC<BeforeAfterCompareProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "قبل",
  afterLabel = "بعد",
  className = "",
  initialPosition = 50
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  
  // Touch tracking for better mobile interaction
  const [touchStart, setTouchStart] = useState<{ x: number, y: number } | null>(null)
  const [isHorizontalDrag, setIsHorizontalDrag] = useState(false)
  
  const containerRef = useRef<HTMLDivElement>(null)

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percent)
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }, [updateSliderPosition])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX)
    }
  }, [isDragging, updateSliderPosition])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    setTouchStart({ x: touch.clientX, y: touch.clientY })
    setIsHorizontalDrag(false)
    
    // Don't prevent default immediately - let's see the movement direction first
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart) return

    const touch = e.touches[0]
    const deltaX = Math.abs(touch.clientX - touchStart.x)
    const deltaY = Math.abs(touch.clientY - touchStart.y)
    
    // Determine if this is a horizontal or vertical gesture
    if (!isDragging && !isHorizontalDrag) {
      // Only start dragging if horizontal movement is dominant
      if (deltaX > deltaY && deltaX > 10) {
        setIsDragging(true)
        setIsHorizontalDrag(true)
        e.preventDefault() // Now prevent default since we confirmed horizontal drag
        updateSliderPosition(touch.clientX)
      } else if (deltaY > deltaX && deltaY > 10) {
        // This is a vertical scroll, don't interfere
        setTouchStart(null)
        return
      }
    } else if (isDragging && isHorizontalDrag) {
      e.preventDefault() // Prevent scrolling during horizontal drag
      updateSliderPosition(touch.clientX)
    }
  }, [isDragging, isHorizontalDrag, touchStart, updateSliderPosition])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    setIsHorizontalDrag(false)
    setTouchStart(null)
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl bg-gray-200 ${className}`}
      style={{ 
        aspectRatio: '16/9',
        touchAction: 'pan-y pinch-zoom'
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground with clip) */}
      <div 
        className="absolute inset-0 transition-all duration-100 ease-out"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg cursor-col-resize flex items-center justify-center hover:scale-110 transition-transform"
          style={{ touchAction: 'pan-y pinch-zoom' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <Move className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Invisible overlay for mouse interactions */}
      <div 
        className="absolute inset-0 cursor-col-resize"
        style={{ touchAction: 'pan-y pinch-zoom' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />
    </div>
  )
} 