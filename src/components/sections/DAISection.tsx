const aiProjects = [
  {
    title: 'Neural Video Gen',
    description:
      'Advanced AI-driven video generation pipeline that transforms text prompts into cinematic sequences with unprecedented quality.',
    features: ['Text-to-Video', 'Style Transfer', 'Motion Control'],
    icon: '🎥',
    status: 'Active',
  },
  {
    title: 'Generative Storytelling',
    description:
      'AI-powered narrative engine that crafts compelling stories with dynamic branching paths and emotional intelligence.',
    features: ['NLP Engine', 'Emotion AI', 'Branching Logic'],
    icon: '📖',
    status: 'Beta',
  },
  {
    title: 'Visual Intelligence',
    description:
      'Computer vision system for real-time scene analysis, object detection, and intelligent frame composition.',
    features: ['Scene Analysis', 'Object Detection', 'Auto-Compose'],
    icon: '👁️',
    status: 'Research',
  },
  {
    title: 'Voice Synthesis',
    description:
      'Next-generation voice cloning and synthesis for creating authentic character voices in multiple languages.',
    features: ['Voice Clone', 'Multi-Language', 'Emotion Tone'],
    icon: '🎙️',
    status: 'Active',
  },
];

export function DAISection() {
  return (
    <section id="ai" className="section-container py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-dverse-cyan text-sm font-medium tracking-widest uppercase mb-4 block">
            🧠 Artificial Intelligence
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-space tracking-tighter text-white">
            D'<span className="text-gradient">AI</span>
          </h2>
          <p className="text-white/30 mt-4 max-w-2xl mx-auto">
            Harnessing the power of artificial intelligence to revolutionize creative workflows —
            from video generation to narrative design.
          </p>
        </div>

        {/* AI Pipeline visualization */}
        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dverse-glow/30 to-transparent -translate-y-1/2 hidden lg:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Input', 'Process', 'Generate', 'Output'].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-12 h-12 rounded-full bg-dverse-glow/20 border border-dverse-glow/30 flex items-center justify-center mx-auto mb-3 text-dverse-glow font-bold font-space relative z-10">
                  {i + 1}
                </div>
                <span className="text-xs text-white/40 uppercase tracking-wider">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiProjects.map((project, i) => (
            <div
              key={i}
              className="glass-card glass-card-chromatic rim-light rounded-2xl p-8 group hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold font-space text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${
                        project.status === 'Active'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : project.status === 'Beta'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/30 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-white/50 border border-white/5"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Neural network visualization */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="w-2 h-2 rounded-full border border-dverse-dark"
                        style={{
                          backgroundColor:
                            j < 3 ? '#6c5ce7' : j < 4 ? '#a855f7' : '#22d3ee',
                          opacity: 0.5 + j * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white/20">Neural pathway active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
