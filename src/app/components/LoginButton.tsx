import React from "react";

const LoginButton: React.FC = () => {
  return (
    <button
      className="bg-white border border-[#5DC4FF] rounded-[10px] 
                        w-[87px] h-[38px] md:w-[240px] md:h-[62px] 
                        text-[#5DC4FF] hover:bg-[#5DC4FF] hover:text-white 
                        transition-colors duration-300 
                        font-raleway font-bold text-[16px] md:text-[20px] leading-[24px] 
                        tracking-[-0.03em] z-20"
    >
      Login
    </button>
  );
};

export default LoginButton;
