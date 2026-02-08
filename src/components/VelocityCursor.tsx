import { useEffect, useRef, useState, useCallback } from 'react';

export function VelocityCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const prevPosRef = useRef({ x: -100, y: -100 });
  const angleRef = useRef(-Math.PI / 4); // Default: top-left (True North)
  const targetAngleRef = useRef(-Math.PI / 4);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    prevPosRef.current = { ...posRef.current };
    posRef.current = { x: e.clientX, y: e.clientY };

    const dx = posRef.current.x - prevPosRef.current.x;
    const dy = posRef.current.y - prevPosRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 3) {
      targetAngleRef.current = Math.atan2(dy, dx);
    }

    // Reset idle timer
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      targetAngleRef.current = -Math.PI / 4; // Reset to True North
    }, 3000);
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button, [data-clickable]')) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      // Smooth angle interpolation
      let diff = targetAngleRef.current - angleRef.current;
      // Normalize angle difference
      while (diff > Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      angleRef.current += diff * 0.12;

      if (cursorRef.current) {
        const deg = (angleRef.current * 180) / Math.PI;
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) rotate(${deg}deg)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [handleMouseMove, handleMouseOver]);

  return (
    <>
      {/* Glow trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovering
              ? 'w-12 h-12 -ml-6 -mt-6 bg-dverse-glow/20 border border-dverse-glow/40'
              : 'w-6 h-6 -ml-3 -mt-3 bg-dverse-glow/10'
          }`}
          style={{ filter: 'blur(8px)' }}
        />
      </div>

      {/* Arrow cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10001]"
        style={{ willChange: 'transform' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginLeft: '-4px', marginTop: '-4px' }}
        >
          <path
            d="M4 12 L20 12 L14 6 M20 12 L14 18"
            stroke="url(#cursorGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <defs>
            <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
