import React from "react";
import bgMobile from "../../assets/images/bgMobile.png";
import footerHome from "../../assets/images/footerHome.png";
import icon from "../../assets/images/icon.png";
import scrollBottom from "../../assets/images/scrollBottom.png";
import Button from "../Button";
import Text from "../Text";

const HeroSectionMobile: React.FC<{ handleClick: () => void }> = ({
  handleClick,
}) => (
  <div
    className="flex-grow flex flex-col items-center text-white px-[24px] text-center relative"
    style={{
      backgroundImage: `url(${bgMobile})`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "overlay",
    }}
  >
    <img src={icon} alt="icon" className="w-[80px] h-[80px] mb-8 mt-[180px] xs:mt-[130px]" />
    <Text type="title" className="mb-20 xs:mb-14">
      Invista em uma Loja de confiança!
    </Text>
    <Text type="paragraph" className="mb-4">
      Tecnologia de ponta e mais lucratividade para o seu negócio.
    </Text>
    <Button
      text="FALE COM A NOSSA EQUIPE!"
      onClick={handleClick}
      className="mt-4 mb-4"
    />
    <img src={footerHome} alt="parceiros" className="mt-8 mb-4" />
    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
      <img src={scrollBottom} alt="scroll" />
    </div>
  </div>
);

export default HeroSectionMobile;
