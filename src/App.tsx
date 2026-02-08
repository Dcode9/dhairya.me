import { Suspense, useEffect, useState, useRef, useCallback } from 'react';
import { Scene3D } from './components/Scene3D';
import { VelocityCursor } from './components/VelocityCursor';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { DFilmsSection } from './components/sections/DFilmsSection';
import { DAISection } from './components/sections/DAISection';
import { DGamesSection } from './components/sections/DGamesSection';
import { WebBoardSection } from './components/sections/WebBoardSection';
import { DQuestSection } from './components/sections/DQuestSection';

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-dverse-dark flex flex-col items-center justify-center">
      <div className="text-6xl font-black font-space text-gradient mb-8 glow-text">D'</div>
      <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-dverse-glow to-dverse-cyan rounded-full transition-all duration-300"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-xs text-white/20 mt-4 tracking-widest uppercase">
        Entering the D'Verse
      </p>
    </div>
  );
}

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {children}
    </div>
  );
}

function MouseGlowEffect() {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(108, 92, 231, 0.04), transparent 60%)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [handleMove]);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
}

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      {/* Custom cursor */}
      <VelocityCursor />

      {/* Mouse glow effect */}
      <MouseGlowEffect />

      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Navigation */}
      <Navigation />

      {/* Content Overlay */}
      <main className="relative z-10">
        <HeroSection />

        <ScrollReveal>
          <DFilmsSection />
        </ScrollReveal>

        <ScrollReveal>
          <DAISection />
        </ScrollReveal>

        <ScrollReveal>
          <DGamesSection />
        </ScrollReveal>

        <ScrollReveal>
          <WebBoardSection />
        </ScrollReveal>

        <ScrollReveal>
          <DQuestSection />
        </ScrollReveal>
      </main>

      {/* Ambient gradient overlays */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dverse-dark to-transparent z-[2] pointer-events-none" />
    </div>
  );
}
