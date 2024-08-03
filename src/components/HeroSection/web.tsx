import React from "react";
import bgWeb from "../../assets/images/bgWeb.png";
import scrollBottom from "../../assets/images/scrollBottom.png";
import Button from "../Button";
import Text from "../Text";

const HeroSectionPC: React.FC<{ handleClick: () => void }> = ({
  handleClick,
}) => (
  <div
    className="hidden lg:flex flex-grow flex-col items-center justify-center text-white px-[48px] text-center relative"
    style={{
      backgroundImage: `linear-gradient(to bottom, transparent, black), url(${bgWeb})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h1 className="font-tomorrow font-extrabold text-[64px]">Levando luz a você!</h1>
    <Text type="paragraph" className="text-[24px]">QueLuz Eletricos . Hidráulicos</Text>
    <Button text="FALE COM A NOSSA EQUIPE!" onClick={handleClick} className="mt-8" />
    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
      <img src={scrollBottom} alt="scroll" />
    </div>
  </div>
);

export default HeroSectionPC;
