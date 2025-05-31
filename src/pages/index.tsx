
// pages/index.tsx or your main page component
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
        {/* Primary Meta Tags */}
        <title>The Mutant School | Revolutionary Story-Driven Learning Platform Coming Soon</title>
        <meta name="title" content="The Mutant School | Revolutionary Story-Driven Learning Platform Coming Soon" />
        <meta name="description" content="Join the creative rebellion against boring online classes. Story-driven, mission-based learning platform built for the next generation of learners. Coming Soon." />
        <meta name="keywords" content="online learning, story-driven education, mission-based learning, interactive education, gamified learning, educational platform, next generation learning, creative education" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="The Mutant School" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
        <meta name="theme-color" content="#8442FC" />
        <meta name="msapplication-TileColor" content="#8442FC" />
        <meta name="msapplication-navbutton-color" content="#8442FC" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themutantschool.com/" />
        <meta property="og:title" content="The Mutant School | Revolutionary Story-Driven Learning Platform" />
        <meta property="og:description" content="Join the creative rebellion against boring online classes. Story-driven, mission-based learning platform built for the next generation of learners." />
        <meta property="og:image" content="https://themutantschool.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Mutant School - Revolutionary Learning Platform" />
        <meta property="og:site_name" content="The Mutant School" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://themutantschool.com/" />
        <meta name="twitter:title" content="The Mutant School | Revolutionary Story-Driven Learning Platform" />
        <meta name="twitter:description" content="Join the creative rebellion against boring online classes. Story-driven, mission-based learning platform built for the next generation of learners." />
        <meta name="twitter:image" content="https://themutantschool.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="The Mutant School - Revolutionary Learning Platform" />
        <meta name="twitter:creator" content="@themutantschool" />
        <meta name="twitter:site" content="@themutantschool" />
        
        {/* LinkedIn */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="linkedin:owner" content="The Mutant School" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://themutantschool.com/" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//fonts.cdnfonts.com" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "The Mutant School",
              "alternateName": "Mutant School",
              "description": "A revolutionary story-driven, mission-based learning platform built for the next generation of learners.",
              "url": "https://themutantschool.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://themutantschool.com/logo.png",
                "width": 300,
                "height": 300
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://themutantschool.com/og-image.jpg",
                "width": 1200,
                "height": 630
              },
              "sameAs": [
                "https://twitter.com/themutantschool",
                "https://linkedin.com/company/themutantschool",
                "https://instagram.com/themutantschool"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@themutantschool.com"
              },
              "foundingDate": "2025",
              "slogan": "Something different is coming to education",
              "keywords": "story-driven learning, mission-based education, interactive learning platform, gamified education",
              "educationalCredentialAwarded": "Digital Learning Certificates",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Educational Programs",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "Story-Driven Learning Missions",
                    "description": "Interactive educational missions that combine storytelling with practical learning",
                    "provider": {
                      "@type": "EducationalOrganization",
                      "name": "The Mutant School"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "The Mutant School",
              "url": "https://themutantschool.com",
              "description": "Revolutionary story-driven learning platform for the next generation",
              "publisher": {
                "@type": "Organization",
                "name": "The Mutant School",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://themutantschool.com/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://themutantschool.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Coming Soon Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "The Mutant School Platform Launch",
              "description": "The launch of our revolutionary story-driven learning platform",
              "startDate": "2025-09-01",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://themutantschool.com"
              },
              "organizer": {
                "@type": "Organization",
                "name": "The Mutant School",
                "url": "https://themutantschool.com"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "USD",
                "validFrom": "2025-01-01"
              }
            })
          }}
        />
      </Head>

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
