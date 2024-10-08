import React from "react";

import economyIcon from "../../assets/svg/economy.svg";
import payIcon from "../../assets/svg/pay.svg";
import pinIcon from "../../assets/svg/pin.svg";
import rayIcon from "../../assets/svg/ray.svg";
import solarIcon from "../../assets/svg/solar.svg";
import Text from "../Text";

type CarrouselItemProps = {
  image: string;
  title: string;
  location?: string;
  power?: string;
  modules?: string;
  economy?: string;
  payback?: string;
};

const CarrouselPontosItem: React.FC<CarrouselItemProps> = ({
  image,
  title,
  location,
  power,
  modules,
  payback,
  economy,
}) => {
  return (
    <div className="flex flex-col xl:flex-row w-full h-fit rounded-3xl overflow-hidden">
      <img
        src={image}
        alt="point"
        className="h-[300px] xl:h-[430px] w-full xl:w-[40%] object-cover rounded-t-3xl xl:rounded-l-3xl xl:rounded-r-none"
      />
      <div className="relative z-10 bg-[#F5F5F5] xl:p-8 px-3 py-10 xl:w-[600px] xl:h-[430px]  flex flex-col justify-center rounded-b-3xl xl:rounded-r-3xl xl:rounded-l-none">
        <Text
          type="subtitle"
          className="text-[#606060] text-left text-[32px] leading-[42px]"
        >
          {title}
        </Text>
        <div className="flex flex-col items-start mt-8 xl:mt-1">
          {location && (
            <div className="flex items-start mt-4">
              <img
                src={pinIcon}
                alt="location icon"
                className="w-6 h-6 mt-2 mr-2"
              />
              <Text
                type="paragraph"
                className="text-start text-[#606060]  xl:text-[18px]"
              >
                {location}
              </Text>
            </div>
          )}
          {power && (
            <div className="flex items-center mt-4">
              <img src={rayIcon} alt="power icon" className="w-6 h-6 mr-1" />
              <Text type="paragraph" className="text-center text-[#606060]">
                Potência do sistema:
                <span className="text-[#F16422] font-titillium font-semibold">
                  {power}
                </span>
              </Text>
            </div>
          )}
          {modules && (
            <div className="flex items-center mt-4">
              <img
                src={solarIcon}
                alt="modules icon"
                className="w-6 h-6 mr-2"
              />
              <Text type="paragraph" className="text-center text-[#606060]">
                Número de módulos:{" "}
                <span className="text-[#F16422] font-titillium font-semibold">
                  {modules}
                </span>
              </Text>
            </div>
          )}
          {economy && (
            <div className="flex items-center mt-4">
              <img
                src={economyIcon}
                alt="economy icon"
                className="w-6 h-6 mr-2"
              />
              <Text type="paragraph" className="text-center text-[#606060]">
                Economia Anual:{" "}
                <span className="text-[#F16422] font-titillium font-semibold">
                  {economy}
                </span>
              </Text>
            </div>
          )}
          {payback && (
            <div className="flex items-center mt-4">
              <img src={payIcon} alt="payback icon" className="w-6 h-6 mr-2" />
              <Text type="paragraph" className="text-center text-[#606060]">
                Payback:{" "}
                <span className="text-[#F16422] font-titillium font-semibold">
                  {payback}
                </span>
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarrouselPontosItem;
