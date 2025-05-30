


/// SocialLinks.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: <FaFacebookF className="text-white text-sm sm:text-base lg:text-lg" />, href: '#', name: 'Facebook' },
    { icon: <FaInstagram className="text-white text-sm sm:text-base lg:text-lg" />, href: '#', name: 'Instagram' },
    { icon: <FaLinkedinIn className="text-white text-sm sm:text-base lg:text-lg" />, href: '#', name: 'LinkedIn' },
    { icon: <FaYoutube className="text-white text-sm sm:text-base lg:text-lg" />, href: '#', name: 'YouTube' },
  ];

  return (
    <ul className="flex gap-3 sm:gap-4 justify-center">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#4A4A4A] rounded-lg flex items-center justify-center hover:bg-[#5A5A5A] transition-all duration-300 focus:outline-none active:scale-95 hover:scale-105"
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







