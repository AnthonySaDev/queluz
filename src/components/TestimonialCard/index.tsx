import React from "react";
import play from "../../assets/images/play.png";
import Text from "../Text";

interface TestimonialCardProps {
  image: string;
  name: string;
  company: string;
  description: string;
  onButtonClick: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  company,
  description,
  onButtonClick,
}) => {
  return (
    <div className="relative bg-[#F5F5F5] rounded-3xl px-9 pb-16 mt-20 w-full">
      <img
        src={image}
        alt={name}
        className="absolute top-[-10%] left-1/2 transform -translate-x-1/2"
      />

      <div className="pt-[20%] lg:pt-[10%] text-center">
        <Text type="subtitle" className="text-[22px] text-[#606060]">
          {name}
        </Text>
        <Text type="paragraph" className="text-[18px] text-[#606060]">
          {company}
        </Text>
        <Text type="paragraph" className="text-[18px] text-[#606060] lg:px-20 lg:my-4">
          {description}
        </Text>
        <div
          className="w-fit mx-auto mt-4 flex items-center justify-center gap-3 bg-white rounded-xl border border-solid border-[#F16422] py-6 px-8 cursor-pointer"
          onClick={onButtonClick}
        >
          <Text type="paragraph" className="text-[18px] text-[#F16422]">
            Ver vídeo
          </Text>
          <img src={play} alt="Play icon" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
