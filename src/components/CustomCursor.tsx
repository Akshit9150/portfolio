import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select, .hover-cursor, [data-hover="true"]') ||
                           target.classList.contains('hover-cursor') ||
                           target.getAttribute('data-hover') === 'true';
      setIsHovering(!!isInteractive);
      
      // Check background color to determine cursor color
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        const computedStyle = window.getComputedStyle(elementUnderCursor);
        const backgroundColor = computedStyle.backgroundColor;
        
        // Check if element or its parents have dark backgrounds
        let currentElement = elementUnderCursor;
        let isDark = false;
        
        while (currentElement && currentElement !== document.body) {
          const style = window.getComputedStyle(currentElement);
          const bgColor = style.backgroundColor;
          
          // Check for dark backgrounds (black, dark grays, etc.)
          if (bgColor.includes('rgb(0, 0, 0)') || 
              bgColor.includes('rgba(0, 0, 0') ||
              currentElement.classList.contains('bg-black') ||
              currentElement.classList.contains('bg-gray-900') ||
              currentElement.classList.contains('bg-stone-900')) {
            isDark = true;
            break;
          }
          
          currentElement = currentElement.parentElement;
        }
        
        setIsDarkBackground(isDark);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select, .hover-cursor, [data-hover="true"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full transition-all duration-200 ease-out ${
          isDarkBackground ? 'bg-white' : 'bg-black'
        } ${
          isHovering ? 'w-12 h-12' : 'w-6 h-6'
        }`}
        style={{
          left: position.x - (isHovering ? 24 : 12),
          top: position.y - (isHovering ? 24 : 12),
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Outer ring for hover effect */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full border-2 transition-all duration-300 ease-out ${
          isDarkBackground ? 'border-white' : 'border-black'
        } ${
          isHovering ? 'w-16 h-16 opacity-60' : 'w-8 h-8 opacity-0'
        }`}
        style={{
          left: position.x - (isHovering ? 32 : 16),
          top: position.y - (isHovering ? 32 : 16),
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CustomCursor;