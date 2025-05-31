
// SoundControl.tsx (Fixed for iOS and TypeScript compatibility)
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Extend HTMLAudioElement interface for iOS properties
interface IOSAudioElement extends HTMLAudioElement {
  playsInline?: boolean;
  webkitPlaysInline?: boolean;
}

export const SoundControl: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<IOSAudioElement>(null);
  const retryCountRef = useRef(0);

  // Detect iOS device
  const isIOS = useCallback(() => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }, []);

  // Memoized event handlers
  const handleCanPlay = useCallback(() => {
    console.log("Audio can play");
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const handleError = useCallback((e: Event) => {
    console.error("Audio error:", e);
    setHasError(true);
    if (retryCountRef.current < 3) {
      retryCountRef.current++;
      setTimeout(() => {
        audioRef.current?.load();
      }, 1000 * retryCountRef.current);
    }
  }, []);

  const handlePlay = useCallback(() => {
    console.log("Audio playing");
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    console.log("Audio paused");
    setIsPlaying(false);
  }, []);

  const handleEnded = useCallback(() => {
    console.log("Audio ended");
    setIsPlaying(false);
  }, []);

  // iOS-specific audio initialization
  const initializeAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // iOS-specific properties
    audio.playsInline = true;
    audio.webkitPlaysInline = true;
    audio.setAttribute('playsinline', 'true');
    audio.setAttribute('webkit-playsinline', 'true');
    
    // Additional iOS attributes
    audio.setAttribute('controls', 'false');
    audio.setAttribute('autoplay', 'false');
    
    // Set initial properties
    audio.volume = 0.3;
    audio.muted = true;
    audio.loop = true;
    audio.preload = "metadata"; // Changed from "auto" for iOS
    
    console.log("Audio initialized for iOS");
  }, []);

  useEffect(() => {
    // Enhanced interaction detection for iOS
    const handleFirstInteraction = (e: Event) => {
      console.log("First user interaction detected:", e.type);
      setUserInteracted(true);
      
      // Initialize audio on first interaction for iOS
      if (isIOS()) {
        initializeAudio();
        // Try to load audio after user interaction
        setTimeout(() => {
          audioRef.current?.load();
        }, 100);
      }
    };

    // Multiple interaction types for iOS
    const interactionEvents = ['touchstart', 'touchend', 'click', 'keydown', 'mousedown'];
    
    if (!userInteracted) {
      interactionEvents.forEach(event => {
        document.addEventListener(event, handleFirstInteraction, { 
          passive: true, 
          capture: true,
          once: true // Only trigger once
        });
      });
    }

    const audio = audioRef.current;
    if (!audio) return;

    // Initialize audio
    if (isIOS()) {
      initializeAudio();
    } else {
      // Standard initialization for non-iOS
      audio.volume = 0.3;
      audio.muted = true;
      audio.loop = true;
      audio.preload = "auto";
    }
    
    // Event listeners
    const events = [
      { event: 'canplay', handler: handleCanPlay },
      { event: 'canplaythrough', handler: handleCanPlay },
      { event: 'loadeddata', handler: handleCanPlay },
      { event: 'error', handler: handleError },
      { event: 'play', handler: handlePlay },
      { event: 'pause', handler: handlePause },
      { event: 'ended', handler: handleEnded }
    ] as const;

    events.forEach(({ event, handler }) => 
      audio.addEventListener(event, handler)
    );

    return () => {
      // Cleanup document listeners
      if (!userInteracted) {
        interactionEvents.forEach(event => {
          document.removeEventListener(event, handleFirstInteraction, { capture: true });
        });
      }
      
      // Cleanup audio listeners
      events.forEach(({ event, handler }) => 
        audio.removeEventListener(event, handler)
      );
    };
  }, [handleCanPlay, handleError, handlePlay, handlePause, handleEnded, initializeAudio, userInteracted, isIOS]);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    // Ensure user has interacted (required for iOS)
    if (isIOS() && !userInteracted) {
      console.warn("User interaction required for iOS audio");
      return;
    }

    try {
      if (isMuted || !isPlaying) {
        console.log("Attempting to play audio");
        
        // iOS-specific preparation
        if (isIOS()) {
          // Ensure audio is loaded
          if (audio.readyState < 2) {
            audio.load();
            await new Promise(resolve => {
              const onLoad = () => {
                audio.removeEventListener('canplay', onLoad);
                resolve(void 0);
              };
              audio.addEventListener('canplay', onLoad);
            });
          }
        }
        
        // Unmute before playing
        audio.muted = false;
        audio.currentTime = 0;
        
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          await playPromise
            .then(() => {
              console.log("Audio playing successfully");
              setIsMuted(false);
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Play failed:", error);
              
              if (error.name === 'NotAllowedError') {
                console.warn("Autoplay blocked - user interaction required");
                // Show user feedback that they need to interact
                alert("Please tap the sound button to enable audio");
              } else if (error.name === 'AbortError') {
                console.warn("Play aborted");
              }
              
              setHasError(true);
              audio.muted = true;
            });
        }
      } else {
        console.log("Pausing audio");
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
      {/* iOS-optimized audio element */}
      <audio
        ref={audioRef}
        preload={isIOS() ? "metadata" : "auto"}
        muted
        loop
        playsInline
        webkit-playsinline="true"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        {/* iOS-prioritized format order */}
        <source src="/background-music.m4a" type="audio/mp4; codecs=mp4a.40.2" />
        <source src="/background-music.aac" type="audio/aac" />
        <source src="/background-music.mp3" type="audio/mpeg" />
        <source src="/background-music.ogg" type="audio/ogg; codecs=vorbis" />
        <source src="/background-music.webm" type="audio/webm; codecs=vorbis" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleSound}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        aria-pressed={!isMuted}
        className={`fixed bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30 
                   rounded-full bg-[#161616] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                   flex items-center justify-center transition-all duration-300 
                   hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                   touch-manipulation select-none
                   ${(isLoaded || !isIOS()) && !hasError 
                     ? 'shadow-[0_0_20px_rgba(132,66,252,0.6)] sm:shadow-[0_0_30px_rgba(132,66,252,0.6)] cursor-pointer' 
                     : 'opacity-50 cursor-not-allowed'
                   }`}
        disabled={isIOS() && (!isLoaded || !userInteracted) || hasError}
        type="button"
      >
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
        
        {/* Loading state */}
        {!isLoaded && !hasError && isIOS() && (
          <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-2 border-white border-t-transparent" />
        )}
        
        {/* User interaction required state (iOS) */}
        {isIOS() && !userInteracted && (
          <div className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6 animate-pulse">
            <Volume2 className="w-full h-full" />
          </div>
        )}
        
        {/* Error state */}
        {hasError && (
          <VolumeX className="text-red-400 w-5 h-5 sm:w-6 sm:h-6" />
        )}
        
        {/* Normal states */}
        {((isLoaded && !isIOS()) || (isIOS() && userInteracted)) && !hasError && (
          isMuted ? <VolumeX className="text-white w-5 h-5 sm:w-6 sm:h-6" /> 
                  : <Volume2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>
    </>
  );
};
