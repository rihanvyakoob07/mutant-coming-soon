
// BackgroundElements.tsx

// BackgroundElements.tsx
import React from 'react';

export const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute w-full h-full pointer-events-none z-[1] left-0 top-0">
      {/* Background blur element 1 */}


      {/* Background pattern */}
      <div className="absolute left-1/2 top-[60%] w-[973px] h-[973px] opacity-20 transform -translate-x-1/2">
        <svg width="973" height="382" viewBox="0 0 973 382" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
            <path d="M289.82 177.216C319.88 147.156 298.59 95.7576 256.079 95.7576C229.725 95.7576 208.362 117.121 208.362 143.475C208.362 185.986 259.76 207.276 289.82 177.216ZM716.876 95.7576C674.364 95.7576 653.075 147.156 683.135 177.216C713.195 207.276 764.593 185.986 764.593 143.475C764.593 117.121 743.229 95.7576 716.876 95.7576Z" fill="url(#paint0_radial_753_4089)" fillOpacity="0.2" />
            <path d="M601.676 115.758L578.401 92.4822C527.633 41.7141 445.322 41.7141 394.553 92.4822L371.278 115.758L208.362 278.674L91.9986 395.037C41.2304 445.805 41.2304 528.117 91.9986 578.885L394.553 881.44C445.322 932.208 527.633 932.208 578.401 881.44L880.956 578.885C931.724 528.117 931.724 445.805 880.956 395.037L764.593 278.674L601.676 115.758Z" fill="url(#paint1_radial_753_4089)" fillOpacity="0.2" />
          </g>
          <defs>
            <radialGradient id="paint0_radial_753_4089" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(588.063 338.636) rotate(107.962) scale(329.408 329.408)">
              <stop stopColor="#EAEAEA" stopOpacity="0.2" />
              <stop offset="1" stopColor="#737373" stopOpacity="0.4" />
            </radialGradient>
            <radialGradient id="paint1_radial_753_4089" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(544.496 367.315) rotate(62.9621) scale(407.37)">
              <stop stopColor="#EAEAEA" stopOpacity="0.2" />
              <stop offset="1" stopColor="#737373" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};


