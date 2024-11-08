import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Image
      src="/images/logo.svg"    // Path relative to 'public'
      alt="Logo"
      width={300}
      height={36}
      className="w-[216.67px] h-[26px] md:w-[300px] md:h-[36px] z-20"
    />
  );
};

export default Logo;