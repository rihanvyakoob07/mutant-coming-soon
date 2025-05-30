import React from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { BackgroundElements } from '@/components/landing/BackgroundElements';
import { SoundControl } from '@/components/landing/SoundControl';
import { DNAPattern } from '@/components/landing/DnaPatterns';
import { DecorativeElements } from '@/components/landing/DecorativeElements';
import { HexPatternBackground } from '@/components/landing/HexPatternBackground';

export default function Index() {
  return (
    <>
      {/* Move font loading to document head or _document.tsx */}
      <div className="w-screen h-screen relative overflow-hidden flex flex-col bg-black">
        {/* Background Layer - Organized by z-index */}
        <div className="absolute inset-0 z-0">
          <BackgroundElements />
          <HexPatternBackground />
        </div>
        
        {/* Decorative Layer */}
        <div className="absolute inset-0 z-[5]">
          <DecorativeElements />
          
          {/* DNA Patterns - Consolidated configuration */}
          <DNAPattern 
            variant="helix"
            className="absolute top-16 left-16 w-8 h-12 rotate-12" 
            color="#8442FC" 
            opacity={0.3}
            animate={true}
          />
          
          <DNAPattern 
            variant="organic-large"
            className="absolute bottom-20 right-20 w-12 h-12 -rotate-45" 
            color="#7CD668" 
            opacity={0.25}
            animate={false}
          />
        </div>
        
        {/* Main Content Layer */}
        <div className="relative z-10 flex flex-col h-full">
          <Header />
          <Hero />
        </div>
        
        {/* Interactive Controls Layer */}
        <div className="absolute z-20">
          <SoundControl />
        </div>
      </div>
    </>
  );
}
