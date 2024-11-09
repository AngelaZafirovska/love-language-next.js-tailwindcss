import Image from "next/image";
import React from "react";
import Logo from "./components/Logo";
import LoginButton from "./components/LoginButton";
import Footer from './components/GFooter';

const LandingPage = () => {
  return (
    <>
      <div className="hero-section relative w-full m-0 p-0 bg-white md:pb-[75px]">
        <div className="relative z-0">
          <Image
            src="/images/gradient-desktop.svg"
            alt="Desktop Gradient"
            width={890}
            height={830}
            className="absolute right-[0px] top-[0px] w-[890px] h-auto md:h-auto hidden md:block z-0"
            priority
          />
          <Image
            src="/images/photos-desktop.svg"
            alt="Desktop Photos"
            width={620.27}
            height={638.12}
            className="absolute right-[78.33px] top-[145.15px] w-[620.27px] h-auto md:h-auto hidden md:block z-10"
          />
          <Image
            src="/images/effects-desktop.svg"
            alt="Desktop Effects"
            width={271.2}
            height={207}
            className="absolute right-[395px] top-[121px] w-[271.2] h-auto md:h-auto hidden md:block z-5"
          />
        </div>
        <div className="flex flex-row items-center justify-between px-[16px] py-[11px] md:px-[82px] md:py-[30px]">
          <Logo />
          <LoginButton />
        </div>
        <div className="px-[16px] pt-[16px] md:pl-[82px] md:pt-[17px] md:max-w-[668px] relative z-20 mb-[24px] md:mb-[0px]">
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
            className="absolute top-0 w-full h-auto px-[17px] z-10"
          />
          <Image
            src="/images/gradient-mobile.svg"
            alt="Mobile Gradient"
            width={360}
            height={330}
            className="w-full h-auto opacity-90 z-0"
          />
        </div>
      </div>
      <div className="evolution-section relative w-full m-0 p-0 bg-white px-[16px] md:py-[80px] md:px-[82px] mb-[60px] md:mb-[0px]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <Image
            src="/images/evolution-desktop.svg"
            alt="Desktop Gradient"
            width={944}
            height={873}
            className="hidden md:block mt-[172px] w-auto z-10"
            style={{ height: "calc(100% - 60px)" }}
            priority
          />
        </div>

        {/* Content Layer */}
        <label className="font-raleway font-bold flex justify-center text-center text-[32px] leading-[36px] md:text-[56px] md:leading-[66px] tracking-[-0.03em] md:mb-[40px] mb-[26px] z-10 text-[#0E2432] z-20">
          The Evolution <br />of Love Language
        </label>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 z-20">
          <Image
            src="/images/evolution-mobile-1.svg"
            alt="Evolution Mobile 1"
            width={228}
            height={428}
            className="opacity-90 block md:hidden absolute right-[-16px] z-10"
            style={{ top: 'calc(25 - 252px)' }}
          />
          <div className="box-content p-5 md:p-6 bg-white border-l-4 border-[#5DC4FF] shadow-[0px_4px_12px_rgba(0,_80,_105,_0.08)] rounded-[12px] z-20">
            <Image
              src="/images/origin.svg"
              alt="Heart Icon"
              width={56}
              height={56}
              className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] mb-[12px] md:mb-[20px]"
            />
            <label className="block font-raleway font-bold text-[#0E2432] text-[22px] md:text-[26px] leading-[26px] md:leading-[30px] mb-[12px]">
              The Origins of Love Languages
            </label>
            <label className="block font-raleway font-medium text-[#828E98] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Over 30 years ago, Dr. Gary Chapman introduced the &apos;<span className="font-sans">5</span> Love Languages&apos; test, helping millions improve their relationships. However, this concept originated in the <span className="font-sans">1980</span>s and is now viewed as limited by some, primarily catering to married, heterosexual, Christian couples.
            </label>
          </div>
          <div className="box-content p-5 md:p-6 bg-white border-l-4 border-[#5DC4FF] shadow-[0px_4px_12px_rgba(0,_80,_105,_0.08)] rounded-[12px] z-20">
            <Image
              src="/images/limitation.svg"
              alt="Heart Icon"
              width={56}
              height={56}
              className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] mb-[12px] md:mb-[20px]"
            />
            <label className="block font-raleway font-bold text-[#0E2432] text-[22px] md:text-[26px] leading-[26px] md:leading-[30px] mb-[12px]">
              Limitations of the Original Love Languages
            </label>
            <label className="block font-raleway font-medium text-[#828E98] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              The original <span className="font-sans">5</span> Love Languages were created for a specific demographic and time. But relationships today are diverse, complex, and evolving. Our expanded approach goes beyond traditional models to offer a more inclusive, nuanced understanding of how people connect and feel loved.
            </label>
          </div>
          <Image
            src="/images/evolution-mobile-2.svg"
            alt="Evolution Mobile 2"
            width={269}
            height={414}
            className="opacity-90 block md:hidden absolute left-[-16px] z-10"
            style={{ top: 'calc(75% - 208px)' }}
          />
          <div className="box-content p-5 md:p-6 bg-white border-l-4 border-[#5DC4FF] shadow-[0px_4px_12px_rgba(0,_80,_105,_0.08)] rounded-[12px] z-20">
            <Image
              src="/images/love.svg"
              alt="Heart Icon"
              width={56}
              height={56}
              className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] mb-[12px] md:mb-[20px]"
            />
            <label className="block font-raleway font-bold text-[#0E2432] text-[22px] md:text-[26px] leading-[26px] md:leading-[30px] mb-[12px]">
              A New, Deeper Way to Understand Love
            </label>
            <label className="block font-raleway font-medium text-[#828E98] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Our <span className="font-sans">7</span> Love Styles Test goes beyond traditional models, filling in the gaps left by the original approach. This comprehensive test embraces emotional, intellectual, and physical dimensions of love, offering a richer, more complete picture of how people connect and express affection.
            </label>
          </div>
          <div className="box-content p-5 md:p-6 bg-white border-l-4 border-[#5DC4FF] shadow-[0px_4px_12px_rgba(0,_80,_105,_0.08)] rounded-[12px] z-20">
            <Image
              src="/images/spectrum.svg"
              alt="Heart Icon"
              width={56}
              height={56}
              className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] mb-[12px] md:mb-[20px]"
            />
            <label className="block font-raleway font-bold text-[#0E2432] text-[22px] md:text-[26px] leading-[26px] md:leading-[30px] mb-[12px] z-10">
              Capturing Full Spectrum of Love Languages
            </label>
            <label className="block font-raleway font-medium text-[#828E98] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] z-10">
              Our model builds on the foundation of the <span className="font-sans">5</span> Love Languages, expanding it to reflect the diverse ways love is shared in today’s world. This test provides personalized insights, helping you understand how you and others experience and express love across a wider range of dimensions.
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </>
);
};

export default LandingPage;
