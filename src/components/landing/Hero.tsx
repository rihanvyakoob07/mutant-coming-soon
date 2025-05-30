






// Hero.tsx (Optimized glow positioning and intensity)
import React from "react";
import { SocialLinks } from "@/components/landing/SocialLinks";

export const Hero: React.FC = () => {
  return (
    <>
      <link href="https://fonts.cdnfonts.com/css/xirod" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <main className="flex flex-col items-center w-full relative z-20 px-4 min-h-screen">
        {/* Text + Social Block */}
        <div className="flex flex-col items-center max-w-[900px] w-full relative z-20 mb-4 sm:mb-8 md:mb-12 text-center pt-[8vh] sm:pt-0">
          <h1
            className="w-full mb-4 sm:mb-6 md:mb-8"
            style={{
              textAlign: "center",
              fontFamily: "Xirod, sans-serif",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "1.2",
              letterSpacing: "clamp(0.5px, 0.1vw, 2px)",
              textTransform: "uppercase",
            }}
          >
            {/* Mobile: Mixed color treatment */}
            <div className="sm:hidden">
              <div className="text-white" style={{ fontSize: '32px' }}>
                SOMETHING
              </div>
              <div 
                className="mt-1 sm:mt-2"
                style={{
                  background: "linear-gradient(90deg, #7CD668 9.94%, #BDE75D 56.43%, #F5FFDF 86.11%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: '32px'
                }}
              >
                DIFFERENT IS COMING
              </div>
              <div 
                className="mt-1 sm:mt-2"
                style={{
                  background: "linear-gradient(90deg, #7CD668 9.94%, #BDE75D 56.43%, #F5FFDF 86.11%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: '32px'
                }}
              >
                TO EDUCATION
              </div>
            </div>
            
            {/* Desktop: Original color treatment */}
            <div className="hidden sm:block">
              <div className="mt-4 md:mt-8 lg:mt-12 text-white text-[36px]">
                SOMETHING DIFFERENT IS
              </div>
              <div
                style={{
                  background: "linear-gradient(90deg, #7CD668 9.94%, #BDE75D 56.43%, #F5FFDF 86.11%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "clamp(28px, 5vw, 32px)",
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
              fontSize: "clamp(12px, 2.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: 200,
              lineHeight: "1.6",
              letterSpacing: "clamp(0.3px, 0.1vw, 0.5px)",
            }}
          >
            {/* Mobile: Accurate line breaks and colors */}
            <div className="sm:hidden text-[#8D8D8D]">
              <div>A CREATIVE REBELLION AGAINST</div>
              <div>BORING ONLINE CLASSES.</div>
              <div className="mt-3">STORY-DRIVEN,MISSION-BASED,</div>
              <div>BUILT FOR THE NEXT GENERATION</div>
              <div>OF LEARNERS.</div>
            </div>
            
            {/* Desktop: Original layout */}
            <div className="hidden sm:block text-[#6D6D6D]">
              A CREATIVE REBELLION AGAINST BORING ONLINE CLASSES.
              <br />
              STORY-DRIVEN, MISSION-BASED, BUILT FOR THE NEXT
              <br />
              GENERATION OF LEARNERS.
            </div>
          </div>

          <div className="mt-4 sm:mt-[-15px] md:mt-[-25px]">
            <SocialLinks />
          </div>
        </div>

        {/* Dino Container with Optimized Glow */}
        <div className="relative w-full flex-grow flex items-end justify-center">
          {/* Subtle Glow Effects - Positioned behind and slightly below the dino */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
            {/* Primary Base Glow - Large, very subtle purple foundation */}
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(350px, 70vw, 500px)",
                height: "clamp(200px, 40vw, 300px)", // Elliptical shape for better ground effect
                background: "radial-gradient(ellipse, rgba(132, 66, 252, 0.15) 0%, rgba(168, 85, 247, 0.08) 60%, transparent 85%)",
                filter: "blur(clamp(40px, 12vw, 80px))",
                bottom: "clamp(0px, 2vh, 20px)", // Positioned closer to ground
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 8
              }}
            />
            
            {/* Secondary Glow - Focused center glow with reduced intensity */}
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(200px, 45vw, 350px)",
                height: "clamp(150px, 30vw, 250px)",
                background: "radial-gradient(ellipse, rgba(168, 85, 247, 0.2) 0%, rgba(132, 66, 252, 0.1) 50%, transparent 75%)",
                filter: "blur(clamp(25px, 8vw, 50px))",
                bottom: "clamp(10px, 4vh, 40px)", // Slightly elevated from base glow
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 9
              }}
            />
            
            {/* Tertiary Glow - Subtle highlight with minimal white core */}
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(120px, 25vw, 200px)",
                height: "clamp(80px, 18vw, 140px)",
                background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.08) 0%, rgba(168, 85, 247, 0.12) 40%, transparent 70%)",
                filter: "blur(clamp(15px, 5vw, 30px))",
                bottom: "clamp(20px, 6vh, 60px)", // Positioned to create depth
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10
              }}
            />
          </div>
          
          {/* Dino Image - Perfectly centered */}
          <div className="relative z-20 " style={{ 
            marginBottom: "clamp(10px, 5vh, 50px)",
            width: "clamp(400px, 50vw, 400px)"
          }}>
            <img
              src="/dino.png"
              alt="Mutant Dino"
              className="w-full h-auto "
              style={{ 
                filter: "drop-shadow(0 0 15px rgba(132, 66, 252, 0.4)) drop-shadow(0 0 30px rgba(132, 66, 252, 0.2))",
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};
