

// // Hero.tsx

// import React from "react";
// import { SocialLinks } from "@/components/landing/SocialLinks";

// export const Hero: React.FC = () => {
//   return (
//     <>
//       <link href="https://fonts.cdnfonts.com/css/xirod" rel="stylesheet" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
//         rel="stylesheet"
//       />

//       <main className="flex flex-col items-center justify-center w-full relative z-20 px-4 min-h-screen">
//         {/* Text + Social Block */}
//         <div className="flex flex-col items-center max-w-[900px] w-full relative z-20 mb-16 text-center">
//           <h1
//             className="w-full mb-8 max-md:text-3xl max-md:leading-[38px] max-sm:text-[24px] max-sm:leading-[28px]"
//             style={{
//               color: "#FFF",
//               textAlign: "center",
//               fontFamily: "Xirod, sans-serif",
//               fontSize: "28px",
//               fontStyle: "normal",
//               fontWeight: 300,
//               lineHeight: "52px",
//               letterSpacing: "1px",
//               textTransform: "uppercase",
//             }}
//           >
//             <div className="mt-20">SOMETHING DIFFERENT IS</div>
//             <div
//               style={{
//                 background:
//                   "linear-gradient(90deg, #7CD668 9.94%, #BDE75D 56.43%, #F5FFDF 86.11%)",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 fontFamily: "Xirod, sans-serif",
//                 fontSize: "28px",
//                 fontStyle: "normal",
//                 fontWeight: 200,
//                 lineHeight: "52px",
//                 letterSpacing: "1px",
//                 textTransform: "uppercase",
//               }}
//             >
//               COMING TO EDUCATION
//             </div>
//           </h1>

//           <p
//             className="mb-[54px] max-w-[600px]"
//             style={{
//               color: "#6D6D6D",
//               textAlign: "center",
//               fontFamily: "Roboto Mono, monospace",
//               fontSize: "14px",
//               fontStyle: "normal",
//               fontWeight: 200,
//               lineHeight: "24px",
//               letterSpacing: "0.5px",
//             }}
//           >
//             A CREATIVE REBELLION AGAINST BORING ONLINE CLASSES.
//             <br />
//             STORY-DRIVEN.MISSION-BASED.BUILT FOR THE NEXT
//             <br />
//             GENERATION OF LEARNERS.
//           </p>

//           <div className="mt-[-38px]">
//             <SocialLinks />
//           </div>
//         </div>

//         {/* Dino + Glow Effects Container */}
//         <div className="relative w-full h-[600px] max-md:h-[500px] max-sm:h-[420px] ">
//           {/* Main Gradient Glow: lowered by increasing bottom offset */}
//           <div
//             className="absolute left-1/2 bottom-[100px] w-[400px] h-[400px] opacity-60 blur-[80px] transform -translate-x-1/2 z-10 pointer-events-none "
//           >
//             <div className="w-full h-full rounded-full bg-gradient-to-r from-[#8442FC] via-[#6B46C1] to-[#9333EA] opacity-80 mt-[1500px]" />
//           </div>

//           {/* Solid Purple Glow: also lowered */}
//           <div
//             className="absolute left-1/2 bottom-[80px] w-[300px] h-[300px] opacity-40 blur-[60px] transform -translate-x-1/2 z-10 pointer-events-none"
//           >
//             <div className="w-full h-full rounded-full bg-[#A855F7]" />
//           </div>

//           {/* Dino Image: sits flush to the bottom of this container */}
//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 mb-[20px]">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/086086883bbaea3736f611c61699b684a73363e4?placeholderIfAbsent=true"
//               alt="Mutant Dino"
//               className="w-[400px] h-[400px] object-contain max-md:w-[250px] max-md:h-[250px] max-sm:w-[200px] max-sm:h-[200px]"
//               style={{
//                 filter: "drop-shadow(0 0 30px rgba(132, 66, 252, 0.3))",
//               }}
//             />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };












// Hero.tsx
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

      <main className="flex flex-col items-center justify-center w-full relative z-20 px-4 sm:px-6 md:px-8 min-h-screen">
        {/* Text + Social Block - Keep your original structure */}
        <div className="flex flex-col items-center max-w-[900px] w-full relative z-20 mb-8 sm:mb-12 md:mb-16 text-center">
          <h1
            className="w-full mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[28px]"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Xirod, sans-serif",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "1.3",
              letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
              textTransform: "uppercase",
            }}
          >
            <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">SOMETHING DIFFERENT IS</div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #7CD668 9.94%, #BDE75D 56.43%, #F5FFDF 86.11%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Xirod, sans-serif",
                fontStyle: "normal",
                fontWeight: 200,
                lineHeight: "1.3",
                letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
                textTransform: "uppercase",
              }}
            >
              COMING TO EDUCATION
            </div>
          </h1>

          <p
            className="mb-8 sm:mb-10 md:mb-[54px] max-w-[600px] px-2 sm:px-4"
            style={{
              color: "#6D6D6D",
              textAlign: "center",
              fontFamily: "Roboto Mono, monospace",
              fontSize: "clamp(11px, 2.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: 200,
              lineHeight: "1.6",
              letterSpacing: "clamp(0.3px, 0.1vw, 0.5px)",
            }}
          >
            A CREATIVE REBELLION AGAINST BORING ONLINE CLASSES.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            STORY-DRIVEN.MISSION-BASED.BUILT FOR THE NEXT
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            GENERATION OF LEARNERS.
          </p>

          <div className="mt-0 sm:mt-[-20px] md:mt-[-38px]">
            <SocialLinks />
          </div>
        </div>

        {/* Dino + Glow Effects Container - ONLY change the height values */}
        <div className="relative w-full h-[250px] xs:h-[300px] sm:h-[420px] md:h-[500px] lg:h-[600px]">
          {/* Main Gradient Glow - Keep everything the same */}
          <div
            className="absolute left-1/2 bottom-[60px] sm:bottom-[80px] md:bottom-[100px] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] opacity-60 blur-[60px] sm:blur-[70px] md:blur-[80px] transform -translate-x-1/2 z-10 pointer-events-none"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#8442FC] via-[#6B46C1] to-[#9333EA] opacity-80" />
          </div>

          {/* Solid Purple Glow - Keep everything the same */}
          <div
            className="absolute left-1/2 bottom-[40px] sm:bottom-[60px] md:bottom-[80px] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] opacity-40 blur-[40px] sm:blur-[50px] md:blur-[60px] transform -translate-x-1/2 z-10 pointer-events-none"
          >
            <div className="w-full h-full rounded-full bg-[#A855F7]" />
          </div>

          {/* Dino Image - Keep everything the same */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 mb-[10px] sm:mb-[15px] md:mb-[20px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/086086883bbaea3736f611c61699b684a73363e4?placeholderIfAbsent=true"
              alt="Mutant Dino"
              className="w-[180px] h-[180px] xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-contain"
              style={{
                filter: "drop-shadow(0 0 20px rgba(132, 66, 252, 0.3)) drop-shadow(0 0 40px rgba(132, 66, 252, 0.2))",
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};
