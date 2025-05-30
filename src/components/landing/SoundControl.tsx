import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const SoundControl: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    // Handle mobile-specific audio limitations
    const handleFirstInteraction = () => {
      userInteractedRef.current = true;
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    const audio = audioRef.current;
    if (audio) {
      // Required for iOS
      audio.volume = 0.3;
      audio.loop = true;
      audio.muted = true; // Start muted to comply with autoplay policies
      
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
      audio.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('play', () => setIsPlaying(true));
        audio.removeEventListener('pause', () => setIsPlaying(false));
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    try {
      // Special handling for iOS
      if (isMuted || !isPlaying) {
        // Required for iOS autoplay policy
        audio.muted = false;
        
        // Play with promise handling
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          await playPromise
            .then(() => {
              setIsMuted(false);
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Playback failed:", error);
              // Fallback for strict autoplay policies
              if (error.name === 'NotAllowedError') {
                console.warn("Autoplay blocked. Consider adding a user gesture.");
              }
            });
        }
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
      {/* Use WebM format for better mobile support */}
      <audio
        ref={audioRef}
        preload="auto"
        muted={isMuted}
        playsInline // Essential for iOS
      >
        <source src="/background-music.webm" type="audio/webm" />
        <source src="/background-music.mp3" type="audio/mpeg" />
        <source src="/background-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleSound}
        aria-pressed={!isMuted && isPlaying}
        aria-label={isMuted || !isPlaying ? "Play Sound" : "Pause Sound"}
        title={isMuted || !isPlaying ? "Sound Off" : "Sound On"}
        className={`fixed bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30 rounded-full bg-[#161616] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none touch-manipulation ${
          isLoaded ? 'shadow-[0_0_20px_rgba(132,66,252,0.6)] sm:shadow-[0_0_30px_rgba(132,66,252,0.6)]' : 'opacity-50'
        }`}
        disabled={!isLoaded}
      >
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
        {isMuted || !isPlaying ? (
          <VolumeX className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Volume2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>
    </>
  );
};
