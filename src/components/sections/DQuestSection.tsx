import { useState, useRef, useEffect } from 'react';

export function DQuestSection() {
  const [warping, setWarping] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'warped'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && phase === 'idle') {
            setWarping(true);
            setTimeout(() => {
              setWarping(false);
              setPhase('warped');
            }, 1200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [phase]);

  const questItems = [
    {
      icon: '⚡',
      label: 'Email',
      value: 'hello@dverse.studio',
      action: 'Copy to clipboard',
    },
    {
      icon: '🌐',
      label: 'Portfolio',
      value: 'dverse.studio',
      action: 'Visit site',
    },
    {
      icon: '🐦',
      label: 'Social',
      value: '@dverse_studio',
      action: 'Follow',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'D\'Verse Studio',
      action: 'Connect',
    },
  ];

  const skills = [
    'React', 'Three.js', 'WebGL', 'Swift/iOS', 'AI/ML',
    'Cinema 4D', 'After Effects', 'Blender', 'Figma',
    'Node.js', 'Python', 'Firebase',
  ];

  return (
    <section
      id="quest"
      ref={sectionRef}
      className={`section-container py-32 relative overflow-hidden ${warping ? 'animate-warp' : ''}`}
    >
      {/* Warp speed lines */}
      {warping && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-dverse-dark">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-dverse-glow to-dverse-cyan"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: '50%',
                  width: `${Math.random() * 300 + 100}px`,
                  height: '1px',
                  transform: `translateX(-50%) rotate(${Math.random() * 360}deg)`,
                  opacity: Math.random() * 0.8,
                  animation: `shimmer ${0.3 + Math.random() * 0.5}s linear infinite`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-dverse-glow2 text-sm font-medium tracking-widest uppercase mb-4 block">
            🚀 Contact & About
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-space tracking-tighter text-white mb-4">
            D'<span className="text-gradient">Quest</span>
          </h2>
          <p className="text-white/30 max-w-2xl mx-auto text-lg">
            You've traversed the D'Verse. Ready to embark on a quest together? 
            Let's build something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - About / Skills */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold font-space text-white mb-4">
                About the Architect
              </h3>
              <p className="text-sm text-white/30 leading-relaxed mb-6">
                A Creative Technologist at the intersection of cinema, artificial intelligence,
                and interactive media. Crafting digital experiences that push boundaries and
                redefine what's possible on the web and mobile platforms.
              </p>

              {/* Skill orbs */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    data-clickable
                    className="px-4 py-2 rounded-full text-xs font-medium bg-white/5 text-white/40 border border-white/5 hover:border-dverse-glow/30 hover:text-dverse-glow hover:bg-dverse-glow/5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quest Stats */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-lg font-bold font-space text-white mb-6">
                Quest Stats
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Experience', value: 95, color: '#6c5ce7' },
                  { label: 'Creativity', value: 99, color: '#a855f7' },
                  { label: 'Technical', value: 92, color: '#22d3ee' },
                  { label: 'Collaboration', value: 97, color: '#f472b6' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/50">{stat.label}</span>
                      <span className="text-white/30">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: phase === 'warped' ? `${stat.value}%` : '0%',
                          backgroundColor: stat.color,
                          boxShadow: `0 0 12px ${stat.color}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact */}
          <div className="space-y-6">
            {/* Contact cards */}
            {questItems.map((item, i) => (
              <button
                key={i}
                data-clickable
                className="glass-card rounded-2xl p-6 w-full text-left group hover:border-dverse-glow/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-white/30 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-base font-medium text-white mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-dverse-glow opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    {item.action} →
                  </span>
                </div>
              </button>
            ))}

            {/* CTA */}
            <div className="glass-card rounded-3xl p-8 text-center bg-gradient-to-br from-dverse-glow/10 to-dverse-glow2/5 border-dverse-glow/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold font-space text-white mb-2">
                Ready to Quest?
              </h3>
              <p className="text-sm text-white/30 mb-6">
                Whether it's a film, an AI project, a game, or something entirely new —
                let's create it together.
              </p>
              <button
                data-clickable
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-dverse-glow to-dverse-glow2 text-white font-semibold text-sm hover:shadow-xl hover:shadow-dverse-glow/30 transition-all duration-300 hover:scale-105"
              >
                Start a New Quest →
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/15">
            © 2024 The D'Verse Experience. Crafted with Three.js, React & Imagination.
          </p>
        </div>
      </div>
    </section>
  );
}
