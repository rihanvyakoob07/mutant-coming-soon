
// Hero.tsx (Optimized and improved version)
import React from "react";
import { SocialLinks } from "@/components/landing/SocialLinks";

// Extract styles to constants for better maintainability
const HEADING_STYLES = {
  fontFamily: "Xirod, sans-serif",
  fontStyle: "normal" as const,
  fontWeight: 300,
  lineHeight: "1.1",
  letterSpacing: "clamp(0.5px, 0.1vw, 2px)",
  textTransform: "uppercase" as const,
};

const GRADIENT_STYLE = {
  background: "linear-gradient(90deg, #7CD668 9.94%, #BDE75D 56.43%, #F5FFDF 86.11%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const Hero: React.FC = () => {
  return (
    <>
      {/* Preload critical fonts for better performance */}
      <link rel="preload" href="https://fonts.cdnfonts.com/css/xirod" as="style" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap" as="style" />
      
      <link href="https://fonts.cdnfonts.com/css/xirod" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Skip link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-2 rounded z-50">
        Skip to main content
      </a>

      <main id="main-content" className="flex flex-col items-center w-full relative z-20 px-4 min-h-screen">
        {/* Text + Social Block with improved spacing */}
        <div className="flex flex-col items-center max-w-[900px] w-full relative z-20 
                       mb-3 sm:mb-6 md:mb-8 lg:mb-10 text-center 
                       pt-[6vh] sm:pt-[4vh] md:pt-[6vh]">
          <h1
            className="w-full mb-4 sm:mb-6 md:mb-8"
            style={{
              textAlign: "center",
              ...HEADING_STYLES,
            }}
          >
            {/* Mobile: Fixed consistent sizing */}
            <div className="sm:hidden">
              <div 
                className="text-white" 
                style={{ 
                  fontSize: 'clamp(26px, 8vw, 32px)',
                  lineHeight: '1.1'
                }}
              >
                SOMETHING
              </div>
              <div 
                className="mt-1"
                style={{
                  ...GRADIENT_STYLE,
                  fontSize: 'clamp(18px, 6vw, 18px)',
                  lineHeight: '1.1'
                }}
              >
                DIFFERENT IS COMING
              </div>
              <div 
                className="mt-1"
                style={{
                  ...GRADIENT_STYLE,
                  fontSize: 'clamp(24px, 7vw, 24px)',
                  lineHeight: '1.1'
                }}
              >
                TO EDUCATION
              </div>
            </div>
            
            {/* Tablet: Intermediate sizing */}
            <div className="hidden sm:block md:hidden">
              <div 
                className="text-white" 
                style={{ 
                  fontSize: 'clamp(32px, 6vw, 38px)',
                  lineHeight: '1.1'
                }}
              >
                SOMETHING DIFFERENT IS
              </div>
              <div
                style={{
                  ...GRADIENT_STYLE,
                  fontSize: 'clamp(32px, 6vw, 38px)',
                  lineHeight: '1.1'
                }}
              >
                COMING TO EDUCATION
              </div>
            </div>
            
            {/* Desktop: Reduced spacing */}
            <div className="hidden md:block">
              <div className="mt-2 lg:mt-4 text-white leading-tight"
                   style={{ fontSize: 'clamp(32px, 4vw, 40px)' }}>
                SOMETHING DIFFERENT IS
              </div>
              <div
                className="mt-1 lg:mt-2"
                style={{
                  ...GRADIENT_STYLE,
                  fontSize: 'clamp(32px, 4vw, 36px)',
                  lineHeight: '1.1'
                }}
              >
                COMING TO EDUCATION
              </div>
            </div>
          </h1>

          <div
            className="mb-5 sm:mb-7 md:mb-9 max-w-[600px] px-4"
            style={{
              textAlign: "center",
              fontFamily: "Roboto Mono, monospace",
              fontStyle: "normal",
              fontWeight: 200,
              lineHeight: "1.4",
              letterSpacing: "clamp(0.2px, 0.1vw, 0.5px)",
            }}
          >
            {/* Mobile: Consistent text sizing */}
            <div 
              className="sm:hidden text-[#8D8D8D]"
              style={{ fontSize: 'clamp(12px, 3.8vw, 16px)' }}
            >
              <div>A CREATIVE REBELLION AGAINST</div>
              <div>BORING ONLINE CLASSES.</div>
              <div className="mt-2">STORY-DRIVEN, MISSION-BASED,</div>
              <div>BUILT FOR THE NEXT GENERATION</div>
              <div>OF LEARNERS.</div>
            </div>
            
            {/* Tablet and Desktop */}
            <div 
              className="hidden sm:block text-[#6D6D6D]"
              style={{ fontSize: 'clamp(14px, 2.2vw, 18px)' }}
            >
              A CREATIVE REBELLION AGAINST BORING ONLINE CLASSES.
              <br />
              STORY-DRIVEN, MISSION-BASED, BUILT FOR THE NEXT
              <br />
              GENERATION OF LEARNERS.
            </div>
          </div>

          {/* Social Links with reduced spacing */}
          <div className="mt-2 sm:mt-[-10px] md:mt-[-15px] lg:mt-[-20px]">
            <SocialLinks />
          </div>
        </div>

        {/* Dino Container with optimized glow and sizing */}
        <div className="relative w-full flex-grow flex items-end justify-center">
          {/* Optimized Glow Effects */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
            {/* Primary Base Glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(300px, 65vw, 500px)",
                height: "clamp(180px, 35vw, 300px)",
                background: "radial-gradient(ellipse, rgba(132, 66, 252, 0.15) 0%, rgba(168, 85, 247, 0.08) 60%, transparent 85%)",
                filter: "blur(clamp(30px, 10vw, 80px))",
                bottom: "clamp(0px, 2vh, 20px)",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 8
              }}
            />
            
            {/* Secondary Glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(180px, 40vw, 350px)",
                height: "clamp(120px, 25vw, 250px)",
                background: "radial-gradient(ellipse, rgba(168, 85, 247, 0.2) 0%, rgba(132, 66, 252, 0.1) 50%, transparent 75%)",
                filter: "blur(clamp(20px, 6vw, 50px))",
                bottom: "clamp(10px, 4vh, 40px)",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 9
              }}
            />
            
            {/* Tertiary Glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(100px, 22vw, 200px)",
                height: "clamp(60px, 15vw, 140px)",
                background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.08) 0%, rgba(168, 85, 247, 0.12) 40%, transparent 70%)",
                filter: "blur(clamp(12px, 4vw, 30px))",
                bottom: "clamp(20px, 6vh, 60px)",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10
              }}
            />
          </div>
          
          {/* Optimized Dino Image - Maximum size without overflow */}
          <div 
            className="relative z-20 w-full flex justify-center"
            style={{ 
              marginBottom: "clamp(10px, 4vh, 40px)",
              maxWidth: "100vw",
              padding: "0 clamp(8px, 1.5vw, 16px)",
            }}
          >
            <div
              className="relative"
              style={{
                width: "clamp(300px, 80vw, 700px)",
                maxWidth: "100%",
                aspectRatio: "auto",
              }}
            >
              <img
                src="/dino.png"
                alt="Mutant Dino - Educational Gaming Character"
                className="w-full h-auto block mx-auto"
                loading="eager"
                fetchPriority="high"
                style={{ 
                  filter: `
                    drop-shadow(0 0 clamp(6px, 2vw, 12px) rgba(132, 66, 252, 0.4)) 
                    drop-shadow(0 0 clamp(12px, 4vw, 24px) rgba(132, 66, 252, 0.2))
                    drop-shadow(0 0 clamp(18px, 6vw, 36px) rgba(132, 66, 252, 0.1))
                  `,
                  transition: "all 0.3s ease-in-out",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
