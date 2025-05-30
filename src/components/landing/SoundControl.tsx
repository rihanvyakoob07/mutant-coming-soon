// SoundControl.tsx (Universal cross-platform compatible)
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const SoundControl: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const userInteractedRef = useRef(false);
  const retryCountRef = useRef(0);

  // Memoized event handlers to prevent memory leaks
  const handleCanPlay = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
    console.log("Audio loaded successfully");
  }, []);

  const handleError = useCallback((e: Event) => {
    console.error("Audio loading error:", e);
    setIsLoaded(false);
    setHasError(true);
    
    // Retry mechanism for network issues
    if (retryCountRef.current < 3) {
      retryCountRef.current++;
      setTimeout(() => {
        const audio = audioRef.current;
        if (audio) {
          audio.load(); // Reload audio
        }
      }, 1000 * retryCountRef.current);
    }
  }, []);

  const handlePlay = useCallback(() => setIsPlaying(true), []);
  const handlePause = useCallback(() => setIsPlaying(false), []);
  const handleEnded = useCallback(() => setIsPlaying(false), []);

  useEffect(() => {
    // Enhanced user interaction detection
    const handleFirstInteraction = () => {
      userInteractedRef.current = true;
      // Remove all interaction listeners
      ['click', 'touchstart', 'keydown', 'scroll'].forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };

    // Listen for multiple interaction types
    ['click', 'touchstart', 'keydown', 'scroll'].forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { passive: true });
    });

    const audio = audioRef.current;
    if (audio) {
      // Enhanced audio setup for cross-platform compatibility
      audio.volume = 0.3;
      audio.loop = true;
      audio.muted = true;
      audio.preload = "auto";
      
      // iOS specific attributes
      audio.setAttribute('playsinline', 'true');
      audio.setAttribute('webkit-playsinline', 'true');
      
      // Add event listeners
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('canplaythrough', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);
      
      // Additional events for better state management
      audio.addEventListener('loadstart', () => console.log('Audio loading started'));
      audio.addEventListener('loadeddata', () => console.log('Audio data loaded'));

      return () => {
        // Cleanup all event listeners
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('canplaythrough', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      };
    }

    return () => {
      ['click', 'touchstart', 'keydown', 'scroll'].forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [handleCanPlay, handleError, handlePlay, handlePause, handleEnded]);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded || hasError) return;

    try {
      if (isMuted || !isPlaying) {
        // Ensure user has interacted first (required for autoplay policies)
        if (!userInteractedRef.current) {
          console.warn("User interaction required for audio playback");
          return;
        }

        // Unmute and play
        audio.muted = false;
        audio.currentTime = 0; // Reset to beginning
        
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          await playPromise
            .then(() => {
              setIsMuted(false);
              setIsPlaying(true);
              console.log("Audio playback started");
            })
            .catch(error => {
              console.error("Playback failed:", error);
              
              // Handle different error types
              switch (error.name) {
                case 'NotAllowedError':
                  console.warn("Autoplay blocked - user interaction required");
                  break;
                case 'NotSupportedError':
                  console.warn("Audio format not supported");
                  setHasError(true);
                  break;
                case 'AbortError':
                  console.warn("Audio playback aborted");
                  break;
                default:
                  console.warn("Unknown playback error:", error.message);
              }
            });
        }
      } else {
        // Pause and mute
        audio.pause();
        audio.muted = true;
        setIsMuted(true);
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Toggle sound error:", error);
      setHasError(true);
    }
  };

  return (
    <>
      {/* Enhanced audio element with multiple format support */}
      <audio
        ref={audioRef}
        preload="auto"
        muted={isMuted}
        playsInline
        crossOrigin="anonymous"
        style={{ display: 'none' }}
      >
        {/* Prioritized format order for best compatibility */}
        <source src="/background-music.mp3" type="audio/mpeg" />
        <source src="/background-music.webm" type="audio/webm" />
        <source src="/background-music.ogg" type="audio/ogg" />
        <source src="/background-music.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleSound}
        aria-pressed={!isMuted && isPlaying}
        aria-label={isMuted || !isPlaying ? "Play Background Music" : "Pause Background Music"}
        title={isMuted || !isPlaying ? "Sound Off" : "Sound On"}
        className={`fixed bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30 
                   rounded-full bg-[#161616] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                   flex items-center justify-center transition-all duration-300 
                   hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                   touch-manipulation select-none
                   ${isLoaded && !hasError 
                     ? 'shadow-[0_0_20px_rgba(132,66,252,0.6)] sm:shadow-[0_0_30px_rgba(132,66,252,0.6)] cursor-pointer' 
                     : 'opacity-50 cursor-not-allowed'
                   }`}
        disabled={!isLoaded || hasError}
        type="button"
      >
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
        
        {/* Loading state */}
        {!isLoaded && !hasError && (
          <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-2 border-white border-t-transparent" />
        )}
        
        {/* Error state */}
        {hasError && (
          <VolumeX className="text-red-400 w-5 h-5 sm:w-6 sm:h-6" />
        )}
        
        {/* Normal states */}
        {isLoaded && !hasError && (
          <>
            {isMuted || !isPlaying ? (
              <VolumeX className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Volume2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </>
        )}
      </button>
    </>
  );
};
