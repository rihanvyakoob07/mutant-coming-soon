






/// SocialLinks.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { 
      icon: <FaFacebook className="text-white text-lg sm:text-xl lg:text-2xl" />, 
      href: 'https://www.instagram.com/themutantschool/', 
      name: 'Facebook' 
    },
    { 
      icon: <FaInstagram className="text-white text-lg sm:text-xl lg:text-2xl" />, 
      href: 'https://www.instagram.com/themutantschool/', 
      name: 'Instagram' 
    },
    { 
      icon: <FaLinkedinIn className="text-white text-lg sm:text-xl lg:text-2xl" />, 
      href: 'https://www.linkedin.com/company/themutantschool/', 
      name: 'LinkedIn' 
    },
    { 
      icon: <FaYoutube className="text-white text-lg sm:text-xl lg:text-2xl" />, 
      href: 'https://www.youtube.com/@TheMutantSchool', 
      name: 'YouTube' 
    },
  ];

  return (
    <ul className="flex gap-3 sm:gap-4 justify-center">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#4A4A4A] rounded-lg flex items-center justify-center hover:bg-[#5A5A5A] transition-all duration-300 focus:outline-none active:scale-95 hover:scale-105"
            aria-label={`Visit our ${link.name} page`}
            title={link.name}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
