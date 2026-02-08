const features = [
  {
    icon: '🔐',
    title: 'Google Sign-In',
    description:
      'Seamless authentication with Google Sign-In integration. One click to access your boards from anywhere.',
    highlight: true,
  },
  {
    icon: '☁️',
    title: 'Cloud Boards',
    description:
      'All your whiteboards are automatically saved and synced to the cloud. Access them from any device, anytime.',
    highlight: true,
  },
  {
    icon: '👥',
    title: 'Real-Time Collaboration',
    description:
      'Work together simultaneously with your team. See cursors, strokes, and edits in real-time.',
    highlight: false,
  },
  {
    icon: '🎨',
    title: 'Rich Drawing Tools',
    description:
      'Pen, marker, highlighter, shapes, text, and image insertion. Everything you need for visual thinking.',
    highlight: false,
  },
  {
    icon: '📱',
    title: 'Cross-Platform',
    description:
      'Works beautifully on desktop, tablet, and mobile. Responsive design that adapts to every screen size.',
    highlight: false,
  },
  {
    icon: '🔗',
    title: 'Share & Export',
    description:
      'Share boards with a simple link. Export to PNG, PDF, or SVG for presentations and documentation.',
    highlight: false,
  },
];

export function WebBoardSection() {
  return (
    <section id="webboard" className="section-container py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            📋 Collaborative Tool
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-space tracking-tighter text-white">
            Web<span className="text-gradient">Board</span>
          </h2>
          <p className="text-white/30 mt-4 max-w-2xl mx-auto">
            A real-time collaborative whiteboard that brings teams together — powered by
            cloud sync and intuitive design.
          </p>
        </div>

        {/* Board mockup */}
        <div className="glass-card rounded-3xl p-1 mb-16 max-w-4xl mx-auto">
          <div className="rounded-[1.25rem] bg-dverse-deeper/80 p-6 relative overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-xs text-white/20 ml-3 font-mono">
                  webboard.dverse.app
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-dverse-glow/20 text-xs text-dverse-glow">
                  3 Online
                </div>
              </div>
            </div>

            {/* Canvas area */}
            <div className="h-64 relative rounded-xl border border-white/5 bg-dverse-dark/50">
              {/* Simulated drawing elements */}
              <svg className="w-full h-full" viewBox="0 0 800 256">
                {/* Grid dots */}
                {Array.from({ length: 20 }).map((_, i) =>
                  Array.from({ length: 8 }).map((_, j) => (
                    <circle
                      key={`${i}-${j}`}
                      cx={40 + i * 38}
                      cy={16 + j * 32}
                      r="0.5"
                      fill="rgba(255,255,255,0.05)"
                    />
                  ))
                )}
                {/* Drawn elements */}
                <rect
                  x="100"
                  y="40"
                  width="180"
                  height="80"
                  rx="12"
                  fill="none"
                  stroke="#6c5ce7"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <text x="140" y="85" fill="#6c5ce7" fontSize="12" opacity="0.7">
                  Ideas Hub
                </text>
                <rect
                  x="400"
                  y="60"
                  width="160"
                  height="60"
                  rx="12"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <text x="430" y="95" fill="#22d3ee" fontSize="12" opacity="0.7">
                  Design
                </text>
                <line
                  x1="280"
                  y1="80"
                  x2="400"
                  y2="90"
                  stroke="#a855f7"
                  strokeWidth="2"
                  opacity="0.3"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 150 180 Q 250 140 350 180 Q 450 220 550 170"
                  fill="none"
                  stroke="#f472b6"
                  strokeWidth="2"
                  opacity="0.4"
                />
                {/* Cursor indicators */}
                <circle cx="420" cy="100" r="4" fill="#22d3ee" opacity="0.7" />
                <text x="430" y="104" fill="#22d3ee" fontSize="8" opacity="0.5">
                  Alex
                </text>
                <circle cx="200" cy="70" r="4" fill="#6c5ce7" opacity="0.7" />
                <text x="210" y="74" fill="#6c5ce7" fontSize="8" opacity="0.5">
                  You
                </text>
              </svg>

              {/* Toolbar overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-2 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
                {['✏️', '🖊️', '⬜', '⭕', '📝', '🖼️', '↩️'].map((tool, i) => (
                  <button
                    key={i}
                    data-clickable
                    className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-xs transition-colors"
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 group transition-all duration-500 ${
                feature.highlight
                  ? 'ring-1 ring-dverse-glow/20 bg-dverse-glow/[0.03]'
                  : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="text-base font-bold font-space text-white flex items-center gap-2">
                    {feature.title}
                    {feature.highlight && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-dverse-glow/20 text-dverse-glow">
                        KEY SPEC
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-white/30 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
