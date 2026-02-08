import { useRef } from 'react';

const films = [
  {
    title: 'Project Kintsugi',
    subtitle: '1B Followers Entry',
    description:
      'A cinematic exploration of digital culture, reaching over 1 billion followers through the art of golden repair — finding beauty in imperfection.',
    tags: ['Documentary', 'Viral', 'Cultural'],
    color: 'from-amber-500/20 to-orange-600/20',
    accent: '#f59e0b',
    year: '2024',
    image: '🏺',
  },
  {
    title: 'The Beggar',
    subtitle: 'Animated Short Film',
    description:
      'An award-worthy animation exploring themes of perception, empathy, and the invisible threads that connect humanity.',
    tags: ['Animation', '3D', 'Short Film'],
    color: 'from-blue-500/20 to-cyan-600/20',
    accent: '#3b82f6',
    year: '2024',
    image: '🎭',
  },
  {
    title: 'Academic Adaptations',
    subtitle: 'Educational Cinema',
    description:
      'Transforming complex academic concepts into visually stunning cinematic experiences that educate and inspire.',
    tags: ['Educational', 'Adaptation', 'Cinema'],
    color: 'from-emerald-500/20 to-teal-600/20',
    accent: '#10b981',
    year: '2023',
    image: '📚',
  },
  {
    title: 'Unseen Narratives',
    subtitle: 'Experimental Series',
    description:
      'Pushing the boundaries of storytelling through experimental film techniques and non-linear narrative structures.',
    tags: ['Experimental', 'Series', 'Avant-garde'],
    color: 'from-purple-500/20 to-pink-600/20',
    accent: '#a855f7',
    year: '2023',
    image: '🎬',
  },
];

export function DFilmsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="films" className="section-container py-32 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-dverse-glow text-sm font-medium tracking-widest uppercase mb-4 block">
              🎬 Cinema & Films
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-space tracking-tighter text-white">
              D'<span className="text-gradient">Films</span>
            </h2>
            <p className="text-white/30 mt-4 max-w-lg">
              Where stories become immersive experiences. From billion-follower campaigns to
              award-worthy animation.
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              data-clickable
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              ←
            </button>
            <button
              data-clickable
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollContainerRef}
        className="horizontal-scroll px-6 lg:px-[calc((100vw-80rem)/2+1.5rem)]"
      >
        {films.map((film, i) => (
          <div
            key={i}
            className="glass-card glass-card-chromatic rim-light rounded-3xl w-[360px] sm:w-[420px] overflow-hidden group"
          >
            {/* Image area */}
            <div
              className={`h-56 bg-gradient-to-br ${film.color} flex items-center justify-center relative overflow-hidden`}
            >
              <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                {film.image}
              </span>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white/70 font-medium">
                {film.year}
              </div>
              {/* Chromatic aberration effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen">
                <div className="absolute inset-0 bg-red-500/5 translate-x-1" />
                <div className="absolute inset-0 bg-blue-500/5 -translate-x-1" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold font-space text-white group-hover:text-gradient transition-all duration-300">
                  {film.title}
                </h3>
                <p className="text-sm text-white/40 mt-1">{film.subtitle}</p>
              </div>
              <p className="text-sm text-white/30 leading-relaxed">{film.description}</p>
              <div className="flex flex-wrap gap-2">
                {film.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-white/40"
                    style={{ borderColor: `${film.accent}33` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                data-clickable
                className="flex items-center gap-2 text-sm font-medium mt-2 transition-colors"
                style={{ color: film.accent }}
              >
                View Project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
