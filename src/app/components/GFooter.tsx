import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-wrap md:flex-nowrap justify-between items-center px-[16px] md:p-[34px_82px] text-sm md:text-base">
      <div className="flex flex-wrap gap-x-[32px] gap-y-[20px]">
        <a href="#home" className="font-raleway font-semibold text-[16px] md:text-[18px] text-[#0E2432] leading-[20px] tracking-[-0.01em]">
          Home
        </a>
        <a href="#results" className="font-raleway font-semibold text-[16px] md:text-[18px] text-[#0E2432] leading-[20px] tracking-[-0.01em]">
          Results
        </a>
        <a href="#terms" className="font-raleway font-semibold text-[16px] md:text-[18px] text-[#0E2432] leading-[20px] tracking-[-0.01em]">
          Terms & Conditions
        </a>
        <a href="#privacy" className="font-raleway font-semibold text-[16px] md:text-[18px] text-[#0E2432] leading-[20px] tracking-[-0.01em]">
          Privacy Policy
        </a>
      </div>
      <div className="font-raleway font-semibold text-[18px] text-[#828E98] leading-[24px] md:leading-[20px] mt-4 md:mt-0 md:ml-auto">
        Copyright © <span className="font-sans">2024</span> IQ International
      </div>
    </footer>
  );
};

export default Footer;