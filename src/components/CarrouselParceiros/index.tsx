import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import afonso from "../../assets/svg/afonso.svg";
import axn from "../../assets/svg/axn.svg";
import eurofarma from "../../assets/svg/eurofarma.svg";
import telmec from "../../assets/svg/telmec.svg";


const CarouselParceiros: React.FC = () => {

  const partnerLogos = [

    { image: eurofarma, name: "Pneucar" },
    { image: afonso, name: "Ambev" },
    { image: axn, name: "FSFX" },
    { image: telmec, name: "Sicoob" },
  ];

 
  return (
    <div className="w-full max-w-[900px] mt-16 mx-auto flex items-center justify-between">
        {partnerLogos.map((partner, index) => (
          <div key={index} className="flex justify-center items-start ">
            <img
              src={partner.image}
              alt={partner.name}
              className="object-cover w-[200px] h-[100px]"
            />
          </div>
        ))}
    </div>
  );
};

export default CarouselParceiros;
