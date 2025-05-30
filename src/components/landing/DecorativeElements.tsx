export const DecorativeElements: React.FC = () => {
  return (
    <div className="absolute w-full h-full pointer-events-none z-[1] left-0 top-0 overflow-hidden">
      {/* Subtle Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 0'
        }}
      />

      {/* Radial Gradient Overlay for Depth */}
      <div 
        className="absolute inset-0 opacity-20 "
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(132, 66, 252, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(124, 214, 104, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)
          `
        }}
      />

      {/* Geometric Pattern - Top Left */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 opacity-[0.08] rotate-12  ">
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M64 8L120 64L64 120L8 64L64 8Z" 
            stroke="rgba(132, 66, 252, 0.3)" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M64 24L104 64L64 104L24 64L64 24Z" 
            stroke="rgba(168, 85, 247, 0.2)" 
            strokeWidth="1" 
            fill="none"
          />
        </svg>
      </div>

      {/* Geometric Pattern - Top Right */}
      <div className="absolute top-[15%] right-[8%] w-24 h-24 opacity-[0.06] -rotate-45 ">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="48" 
            cy="48" 
            r="40" 
            stroke="rgba(124, 214, 104, 0.3)" 
            strokeWidth="1" 
            fill="none"
          />
          <circle 
            cx="48" 
            cy="48" 
            r="24" 
            stroke="rgba(189, 231, 93, 0.2)" 
            strokeWidth="1" 
            fill="none"
          />
          <circle 
            cx="48" 
            cy="48" 
            r="8" 
            stroke="rgba(245, 255, 223, 0.15)" 
            strokeWidth="1" 
            fill="none"
          />
        </svg>
      </div>



      {/* Hexagonal Pattern - Bottom Right */}
      <div className="absolute bottom-[25%] right-[12%] w-20 h-20 opacity-[0.07] rotate-[30deg] ">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M40 8L60 24V56L40 72L20 56V24L40 8Z" 
            stroke="rgba(124, 214, 104, 0.4)" 
            strokeWidth="1.5" 
            fill="none"
          />
          <path 
            d="M40 20L52 28V52L40 60L28 52V28L40 20Z" 
            stroke="rgba(189, 231, 93, 0.3)" 
            strokeWidth="1" 
            fill="none"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-[30%] left-[25%] w-1 h-1 bg-purple-400 opacity-20 rounded-full animate-pulse " />
      <div className="absolute top-[45%] right-[30%] w-1.5 h-1.5 bg-green-400 opacity-15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[40%] left-[70%] w-1 h-1 bg-purple-300 opacity-25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[15%] w-0.5 h-0.5 bg-green-300 opacity-30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
