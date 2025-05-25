// // SoundControl.tsx
// import React, { useState, useRef, useEffect } from "react";
// import { Volume2, VolumeX } from "lucide-react";

// export const SoundControl: React.FC = () => {
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (audio) {
//       audio.volume = 0.3;
//       audio.loop = true;
      
//       const handleCanPlay = () => {
//         setIsLoaded(true);
//         console.log("Audio loaded successfully");
//       };
      
//       const handleError = (e: any) => {
//         console.error("Audio loading error:", e);
//         setIsLoaded(false);
//       };

//       audio.addEventListener('canplay', handleCanPlay);
//       audio.addEventListener('error', handleError);
//       audio.addEventListener('play', () => setIsPlaying(true));
//       audio.addEventListener('pause', () => setIsPlaying(false));

//       return () => {
//         audio.removeEventListener('canplay', handleCanPlay);
//         audio.removeEventListener('error', handleError);
//         audio.removeEventListener('play', () => setIsPlaying(true));
//         audio.removeEventListener('pause', () => setIsPlaying(false));
//       };
//     }
//   }, []);

//   const toggleSound = async () => {
//     const audio = audioRef.current;
//     if (!audio || !isLoaded) return;

//     try {
//       if (isMuted || !isPlaying) {
//         await audio.play();
//         setIsMuted(false);
//       } else {
//         audio.pause();
//         setIsMuted(true);
//       }
//     } catch (error) {
//       console.error("Playback error:", error);
//     }
//   };

//   return (
//     <>
//       <audio
//         ref={audioRef}
//         preload="auto"
//       >
//         {/* FIXED: Remove 'public/' from the path - files in public are served from root */}
//         <source src="/background-music.mp3" type="audio/mpeg" />
//         <source src="/background-music.ogg" type="audio/ogg" />
//         Your browser does not support the audio element.
//       </audio>

//       <button
//         onClick={toggleSound}
//         aria-pressed={!isMuted && isPlaying}
//         aria-label={isMuted || !isPlaying ? "Play Sound" : "Pause Sound"}
//         title={isMuted || !isPlaying ? "Sound Off" : "Sound On"}
//         className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30 rounded-full bg-[#161616] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none ${
//           isLoaded ? 'shadow-[0_0_40px_rgba(132,66,252,0.6)]' : 'opacity-50'
//         }`}
//         disabled={!isLoaded}
//       >
//         <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
//         {isMuted || !isPlaying ? (
//           <VolumeX className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 z-10 transition-opacity" />
//         ) : (
//           <Volume2 className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 z-10 transition-opacity" />
//         )}
//       </button>
//     </>
//   );
// };








/// SoundControl.tsx
import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const SoundControl: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.loop = true;
      
      const handleCanPlay = () => {
        setIsLoaded(true);
        console.log("Audio loaded successfully");
      };
      
      const handleError = (e: any) => {
        console.error("Audio loading error:", e);
        setIsLoaded(false);
      };

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('pause', () => setIsPlaying(false));

      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('play', () => setIsPlaying(true));
        audio.removeEventListener('pause', () => setIsPlaying(false));
      };
    }
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    try {
      if (isMuted || !isPlaying) {
        await audio.play();
        setIsMuted(false);
      } else {
        audio.pause();
        setIsMuted(true);
      }
    } catch (error) {
      console.error("Playback error:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
      >
        <source src="/background-music.mp3" type="audio/mpeg" />
        <source src="/background-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleSound}
        aria-pressed={!isMuted && isPlaying}
        aria-label={isMuted || !isPlaying ? "Play Sound" : "Pause Sound"}
        title={isMuted || !isPlaying ? "Sound Off" : "Sound On"}
        className={`fixed bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30 rounded-full bg-[#161616] w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none touch-manipulation ${
          isLoaded ? 'shadow-[0_0_30px_rgba(132,66,252,0.6)] sm:shadow-[0_0_40px_rgba(132,66,252,0.6)]' : 'opacity-50'
        }`}
        disabled={!isLoaded}
      >
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
        {isMuted || !isPlaying ? (
          <VolumeX className="text-white w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 z-10 transition-opacity" />
        ) : (
          <Volume2 className="text-white w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 z-10 transition-opacity" />
        )}
      </button>
    </>
  );
};

