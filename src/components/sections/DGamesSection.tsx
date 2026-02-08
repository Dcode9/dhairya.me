const games = [
  {
    title: 'Velocity Rush',
    platform: 'iOS',
    genre: 'Racing / Action',
    description:
      'High-octane mobile racing with procedurally generated tracks, real-time multiplayer, and stunning visual effects.',
    stats: { downloads: '500K+', rating: '4.8', players: '12K' },
    color: '#ef4444',
    emoji: '🏎️',
  },
  {
    title: 'Phantom Realms',
    platform: 'iOS',
    genre: 'RPG / Adventure',
    description:
      'An immersive mobile RPG set in a fractured multiverse. Explore procedurally generated dungeons with adaptive AI enemies.',
    stats: { downloads: '250K+', rating: '4.9', players: '8K' },
    color: '#8b5cf6',
    emoji: '⚔️',
  },
  {
    title: 'Pixel Architect',
    platform: 'iOS / iPadOS',
    genre: 'Puzzle / Creative',
    description:
      'Build, design, and solve architectural puzzles in a minimalist 3D environment with haptic feedback integration.',
    stats: { downloads: '100K+', rating: '4.7', players: '5K' },
    color: '#06b6d4',
    emoji: '🏗️',
  },
];

export function DGamesSection() {
  return (
    <section id="games" className="section-container py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-dverse-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            🎮 Mobile Gaming
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-space tracking-tighter text-white">
            D'<span className="text-gradient">Games</span>
          </h2>
          <p className="text-white/30 mt-4 max-w-lg">
            High-energy mobile gaming experiences crafted for iOS — where performance meets artistry.
          </p>
        </div>

        <div className="space-y-8">
          {games.map((game, i) => (
            <div
              key={i}
              className="glass-card glass-card-chromatic rim-light rounded-3xl overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Game visual */}
                <div
                  className="lg:col-span-2 h-64 lg:h-auto flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, ${game.color}15, ${game.color}05)`,
                  }}
                >
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-700">
                    {game.emoji}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dverse-dark/80 hidden lg:block" />

                  {/* Platform badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs font-medium text-white/70 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      {game.platform}
                    </span>
                  </div>
                </div>

                {/* Game info */}
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <div className="mb-2">
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: game.color }}
                    >
                      {game.genre}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-space text-white mb-3">
                    {game.title}
                  </h3>
                  <p className="text-sm text-white/30 leading-relaxed mb-6 max-w-lg">
                    {game.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div>
                      <div className="text-lg font-bold text-white font-space">
                        {game.stats.downloads}
                      </div>
                      <div className="text-xs text-white/20">Downloads</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white font-space flex items-center gap-1">
                        ⭐ {game.stats.rating}
                      </div>
                      <div className="text-xs text-white/20">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white font-space">
                        {game.stats.players}
                      </div>
                      <div className="text-xs text-white/20">Active Players</div>
                    </div>
                  </div>

                  <button
                    data-clickable
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold w-fit transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: `${game.color}20`,
                      color: game.color,
                      border: `1px solid ${game.color}30`,
                    }}
                  >
                    View on App Store →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
