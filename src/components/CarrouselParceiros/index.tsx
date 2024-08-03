import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ambevLogo from "../../assets/svg/ambev.svg";
import fsfxLogo from "../../assets/svg/fsfx.svg";
import pneucarLogo from "../../assets/svg/pneucar.svg";
import sicoobLogo from "../../assets/svg/sicoob.svg";
import univaleLogo from "../../assets/svg/univale.svg";
import villaparkLogo from "../../assets/svg/villapark.svg";

const CarouselParceiros: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2.1);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    if (isDesktop) {
      setSlidesToShow(4);
    } else {
      setSlidesToShow(2.2);
    }
  }, [isDesktop]);

  const partnerLogos = [
    { image: univaleLogo, name: "Univale" },
    { image: pneucarLogo, name: "Pneucar" },
    { image: ambevLogo, name: "Ambev" },
    { image: fsfxLogo, name: "FSFX" },
    { image: villaparkLogo, name: "VillaPark" },
    { image: sicoobLogo, name: "Sicoob" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: (next: number) => setSelectedIndex(next),
  };

  return (
    <div className="w-full max-w-[900px] mt-16 mx-auto">
      <Slider {...settings}>
        {partnerLogos.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={partner.image}
              alt={partner.name}
              className="object-contain w-[100px] h-[100px]"
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        {partnerLogos.map((_, index) => (
          <div
            key={index}
            className={`w-[18px] h-[8px] rounded-[11px] mx-1 ${
              selectedIndex === index ? "bg-[#fff]" : "bg-[#FF9B6C]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselParceiros;
