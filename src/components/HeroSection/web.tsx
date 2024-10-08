import React from "react";
import { useMediaQuery } from 'react-responsive';
import bgMobile from "../../assets/images/bgMobile.png";
import bgWeb from "../../assets/images/bgWeb.png";
import scrollBottom from "../../assets/images/scrollBottom.png";
import Button from "../Button";
import Text from "../Text";

const HeroSectionPC: React.FC<{ handleClick: () => void }> = ({ handleClick }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div
      className="flex flex-grow flex-col items-center justify-center text-white px-[48px] text-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, black), url(${isMobile ? bgMobile : bgWeb})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="font-tomorrow font-extrabold text-[64px]">Levando luz a você!</h1>
      <Text type="paragraph" className="text-[24px]">QueLuz Eletricos . Hidráulicos</Text>
      <Button
        text="FALE COM A NOSSA EQUIPE!"
        onClick={handleClick}
        className="mt-8 px-4 py-2 text-[12px] lg:text-xl"
      />
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
        <a href="#section" className="scroll-smooth">
          <img src={scrollBottom} alt="scroll" />
        </a>
      </div>
    </div>
  );
};

export default HeroSectionPC;
