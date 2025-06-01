import React from 'react';
import Head from 'next/head';
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
      <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZLGS4F0MK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DZLGS4F0MK');
            `,
          }}
        />

        {/* Essential Meta Tags */}
        <title>The Mutant School | Revolutionary Story-Driven Learning Platform</title>
        <meta name="description" content="Join the creative rebellion against boring online classes. Story-driven, mission-based learning platform built for the next generation of learners. Coming Soon." />
        <meta name="keywords" content="online learning, story-driven education, mission-based learning, interactive education, gamified learning, educational platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://themutantschool.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themutantschool.com/" />
        <meta property="og:title" content="The Mutant School | Revolutionary Story-Driven Learning Platform" />
        <meta property="og:description" content="Join the creative rebellion against boring online classes. Story-driven, mission-based learning platform built for the next generation of learners." />
        <meta property="og:image" content="https://themutantschool.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="The Mutant School" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Mutant School | Revolutionary Story-Driven Learning Platform" />
        <meta name="twitter:description" content="Join the creative rebellion against boring online classes. Story-driven, mission-based learning platform built for the next generation of learners." />
        <meta name="twitter:image" content="https://themutantschool.com/og-image.jpg" />
        

        
        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "The Mutant School",
              "description": "A revolutionary story-driven, mission-based learning platform built for the next generation of learners.",
              "url": "https://themutantschool.com",
              "logo": "https://themutantschool.com/logo.png",
              "image": "https://themutantschool.com/og-image.jpg",
              "sameAs": [
                "https://twitter.com/themutantschool",
                "https://linkedin.com/company/themutantschool"
              ],
              "foundingDate": "2025",
              "slogan": "Something different is coming to education"
            })
          }}
        />
      </Head>

      <div className="w-screen h-screen relative overflow-hidden flex flex-col bg-black">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <BackgroundElements />
          <HexPatternBackground />
        </div>
        
        {/* Decorative Layer */}
        <div className="absolute inset-0 z-[5]">
          <DecorativeElements />
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
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col h-full">
          <Header />
          <Hero />
        </div>
        
        {/* Controls */}
        <div className="absolute z-20">
          <SoundControl />
        </div>
      </div>
    </>
  );
}
