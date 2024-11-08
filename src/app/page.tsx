import React from "react";
import Logo from "./components/Logo";
import LoginButton from "./components/LoginButton";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="hero-section relative w-full m-0 p-0 mb-[60px]">
      <div className="relative z-0">
        <Image
          src="/images/gradient-desktop.svg"
          alt="Desktop Gradient"
          width={890}
          height={830}
          className="absolute right-[0px] top-[0px] w-[890px] h-[830px] hidden md:block z-0"
        />
        <Image
          src="/images/photos-desktop.svg"
          alt="Desktop Photos"
          width={620.27}
          height={638.12}
          className="absolute right-[78.33px] top-[145.15px] w-[620.27px] h-[638.12px] hidden md:block z-0"
        />
        <Image
          src="/images/effects-desktop.svg"
          alt="Desktop Effects"
          width={271.2}
          height={207}
          className="absolute right-[395px] top-[121px] w-[271.2px] h-[207px] hidden md:block z-0"
        />
      </div>
      <div className="flex flex-row items-center justify-between px-[16px] py-[11px] md:px-[82px] md:py-[30px]">
        <Logo />
        <LoginButton />
      </div>
      <div className="px-[16px] pt-[16px] md:pl-[82px] md:pt-[17px] md:max-w-[668px] relative z-20 mb-[24px]">
        <div className="inline-flex bg-[#F2FAFF] px-[16px] py-[6px] rounded-[60px] mb-2">
          <label className="text-[#5DC4FF] font-raleway font-semibold text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]">
            BEYOND <span className="font-sans">5</span> LOVE LANGUAGES
          </label>
        </div>
        <label className="block text-[#0E2432] font-raleway font-bold tracking-[-0.05em] text-[36px] leading-[40px] md:mb-[28px] md:text-[64px] md:leading-[74px] mb-[16px] z-20">
          Discover Your <br />True Love Language
        </label>
        <label className="block text-[#828E98] font-raleway text-[16px] leading-[22px] md:text-[18px] md:leading-[27px] font-medium md:mr-[50px] mb-[24px]">
          Unlock a deeper understanding of yourself and those you care about. Our Love Styles Test reveals how you connect and feel most loved, empowering you to build{" "}
          <span className="font-semibold text-[#0E2432]">stronger</span>, more{" "}
          <span className="font-semibold text-[#0E2432]">meaningful relationships</span>.
        </label>
        <div className="flex flex-col gap-[16px] mb-[40px]">
          <div className="flex flex-row gap-[16px] items-center">
            <Image
              src="/images/heart.svg"
              alt="Heart Icon"
              width={48}
              height={48}
              className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
            />
            <label className="text-[#828E98] font-raleway text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-medium md:mr-[50px]">
              Understand the unique ways you express and experience love—it can{" "}
              <span className="font-semibold text-[#0E2432]">transform</span> your{" "}
              <span className="font-semibold text-[#0E2432]">relationships</span>
            </label>
          </div>
          <div className="flex flex-row gap-[16px] items-center">
            <Image
              src="/images/connection.svg"
              alt="Connection Icon"
              width={48}
              height={48}
              className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
            />
            <label className="text-[#828E98] font-raleway text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-medium md:mr-[50px]">
              <span className="font-semibold text-[#0E2432]">Strengthen</span> your{" "}
              <span className="font-semibold text-[#0E2432]">connections</span>—with your partner, friends, family, and even yourself{" "}
            </label>
          </div>
          <div className="flex flex-row gap-[16px] items-center">
            <Image
              src="/images/growth.svg"
              alt="Growth Icon"
              width={48}
              height={48}
              className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
            />
            <label className="text-[#828E98] font-raleway text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-medium md:mr-[50px]">
              Embrace personal <span className="font-semibold text-[#0E2432]">growth</span> and become the{" "}
              <span className="font-semibold text-[#0E2432]">best version</span> of yourself{" "}
            </label>
          </div>
        </div>
        <div className="relative w-full z-20 flex items-center">
          <div className="absolute inset-x-0 -bottom-[5px] w-full md:w-[300px] h-[30%] rounded-full bg-[#37aef3] blur-[20px] opacity-100"></div>
          <button className="font-switzer font-semibold shadow-[0px_1px_1px_rgba(35,_123,_255,_0.7)] w-full md:w-[300px] bg-[#5DC4FF] rounded-[10px] flex items-center justify-center px-[40px] py-[20px] tracking-[0.03em] text-white leading-[24px] text-[16px] md:text-[20px] relative z-10">
            Take the Test
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center md:hidden">
        <Image
          src="/images/photos-mobile.svg"
          alt="Mobile photos"
          width={340}
          height={350}
          className="absolute top-0 w-full px-[17px] z-0"
        />
        <Image
          src="/images/gradient-mobile.svg"
          alt="Mobile Gradient"
          width={360}
          height={330}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default LandingPage;
