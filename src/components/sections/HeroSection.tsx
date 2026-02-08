import { useEffect, useState } from 'react';

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section
      id="hero"
      className="section-container flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - spacer for the 3D "D" */}
        <div className="hidden lg:block" />

        {/* Right side - content */}
        <div
          className={`space-y-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dverse-glow/10 border border-dverse-glow/20 text-dverse-glow text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-dverse-glow animate-breathe" />
              The Digital Ecosystem
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-space leading-[0.9] tracking-tighter">
            <span className="text-white"></span>
            <br />
            <span className="text-gradient">Dhairya</span>
            <br />
            <span className="text-white/80">Shah</span>
          </h1>

          <p className="text-lg text-white/40 max-w-md leading-relaxed">
            A young aspirator creating ecosystems where cinema, AI, gaming, and collaborative tools
            converge into one unified creative universe.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              data-clickable
              onClick={() => {
                document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-dverse-glow to-dverse-glow2 text-white font-semibold text-sm hover:shadow-xl hover:shadow-dverse-glow/30 transition-all duration-300 hover:scale-105"
            >
              Explore the Verse
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button
              data-clickable
              onClick={() => {
                document.getElementById('quest')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-2xl glass-card text-white/70 font-semibold text-sm hover:text-white transition-all duration-300"
            >
              D'Quest Contact
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
            <div>
              <div className="text-2xl font-bold text-gradient font-space">1B+</div>
              <div className="text-xs text-white/30 mt-1">Followers Reached</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient font-space">5+</div>
              <div className="text-xs text-white/30 mt-1">Ecosystems</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient font-space">∞</div>
              <div className="text-xs text-white/30 mt-1">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-dverse-glow/50 to-transparent" />
      </div>
    </section>
  );
}
