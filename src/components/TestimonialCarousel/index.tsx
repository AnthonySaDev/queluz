import React, { useState } from "react";
import Slider from "react-slick";
import geraldo from "../../assets/images/geraldo.png";
import miriam from "../../assets/images/miriam.png";
import paulo from "../../assets/images/paulo.png";
import roger from "../../assets/images/roger.png";
import TestimonialCard from "../TestimonialCard";
interface Testimonial {
  image: string;
  name: string;
  company: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    image: roger,
    name: "Roger Souza",
    company: "Thermofast",
    description:
      "Sou uma cliente super satisfeita (com os serviços da T8M) e indico a instalação. O processo foi muito tranquilo, do pagamento à assistência.",
  },
  {
    image: miriam,
    name: "Miriam Martins",
    company: "Villa Park Festas",
    description:
      "A T8M representa confiança e parceria. Fizemos vários orçamentos, mas o profissionalismo e o conhecimento técnico dela foi diferenciado.",
  },
  {
    image: geraldo,
    name: "Pe. Geraldo I. Franco",
    company: "Paróquia Sagrado Coração de Jesus",
    description:
      "Admiro muito o trabalho da T8M, empresa séria, a assistência criteriosa, muita clareza. E que passa muita confiança. Ipatinga usará em massa esse sistema.",
  },
  {
    image: paulo,
    name: "Paulo Roberto",
    company: "Grupo Kemigas",
    description:
      "Conhecemos a T8M por uma pesquisa de satisfação avaliando relacionamento com o cliente, segurança na instalação, agilidade e confiança.",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: (current: number, next: number) => setSelectedIndex(next),
  };

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="w-full max-w-[900px] mt-16 mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              company={testimonial.company}
              description={testimonial.description}
              onButtonClick={handleButtonClick}
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-[18px] h-[8px] rounded-[11px] mx-1 ${
              selectedIndex === index ? "bg-[#13212F]" : "bg-[#A8A8A8]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
