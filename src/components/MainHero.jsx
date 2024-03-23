import CtaButton from "@/mircocomponents/CtaButton";
import Image from "next/image";
import React from "react";

const MainHero = () => {
  return (
    <div className="flex justify-between h-full">
      <div className="flex flex-col items-start gap-12">
        <button className="flex items-center gap-2 py-4 px-8 text-[var(--pink)] rounded-full shadow-2xl">
          Explore the world
          <Image
            src="/images/bagIcon.svg"
            height={20}
            width={20}
            alt="bag-icon"
          />
        </button>
        <h1 className="text-[69px] font-bold leading-[82px]">
          Travel <span className="text-[var(--pink)]">top destination</span> of
          the world
        </h1>
        <p className="text-lg text-[#191825]">
          We always make our customer happy by providing as many choices as
          possible
        </p>

        <div className="flex items-center gap-8">
          <CtaButton>Get Started</CtaButton>
          <button className="flex items-center gap-2">
            <Image
              src="/images/videoplayIcon.svg"
              height={20}
              width={20}
              alt="videpoplay icon"
            />
            Watch Demo
          </button>
        </div>
      </div>

      <Image
        src="/images/heroMainImage.svg"
        height={100}
        width={100}
        alt="Hero main image"
        className="w-[50%]"
      />
    </div>
  );
};

export default MainHero;
