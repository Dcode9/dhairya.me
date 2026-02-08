import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: "D'Verse", icon: '◆' },
  { id: 'films', label: "D'Films", icon: '🎬' },
  { id: 'ai', label: "D'AI", icon: '🧠' },
  { id: 'games', label: "D'Games", icon: '🎮' },
  { id: 'webboard', label: 'WebBoard', icon: '📋' },
  { id: 'quest', label: "D'Quest", icon: '🚀' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dverse-dark/80 backdrop-blur-xl border-b border-dverse-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          data-clickable
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl font-black text-gradient font-space tracking-tighter">
            D'
          </span>
          <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">
            VERSE
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              data-clickable
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-dverse-glow/20 text-white border border-dverse-glow/30'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`}
            >
              <span className="mr-1.5">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <button
          data-clickable
          onClick={() => scrollTo('quest')}
          className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-dverse-glow to-dverse-glow2 text-white hover:shadow-lg hover:shadow-dverse-glow/25 transition-all duration-300 hover:scale-105"
        >
          Enter D'Quest
        </button>
      </div>
    </nav>
  );
}
