import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
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
        <meta property="og:image" content="https://themutantschool.com/The%20Mutant%20School.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="The Mutant School" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Mutant School | Revolutionary Story-Driven Learning Platform" />
        <meta name="twitter:description" content="Join the creative rebellion against boring online classes. Story-driven, mission-based learning platform built for the next generation of learners." />
        <meta name="twitter:image" content="https://themutantschool.com/The%20Mutant%20School.png" />
        
        {/* Favicon & App Icons - Based on your public folder files */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Google Analytics - Using next/script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DZLGS4F0MK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DZLGS4F0MK');
        `}
      </Script>

      {/* Structured Data - Using next/script */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "The Mutant School",
            "description": "A revolutionary story-driven, mission-based learning platform built for the next generation of learners.",
            "url": "https://themutantschool.com",
            "logo": "https://themutantschool.com/The%20Mutant%20School.png",
            "image": "https://themutantschool.com/The%20Mutant%20School.png",
            "sameAs": [
              "https://www.instagram.com/themutantschool/",
              "https://www.youtube.com/@TheMutantSchool",
              "https://www.linkedin.com/company/themutantschool/"
            ],
            "foundingDate": "2025",
            "slogan": "Something different is coming to education"
          })
        }}
      />

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
