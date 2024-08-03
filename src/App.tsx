import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bgBeneficios from "./assets/images/bgBeneficios.png";
import bgOrcamento from "./assets/images/bgOrcamento.png";
import form from "./assets/images/form.png";
import mapa from "./assets/images/mapa.png";
import states from "./assets/images/states.png";
import tower from "./assets/images/tower.png";
import infinityIcon from "./assets/svg/infinity.svg";
import mecanic from "./assets/svg/mecanic.svg";
import numberOne from "./assets/svg/numberOne.svg";
import solarPanelverified from "./assets/svg/solarPanelVerified.svg";
import solarPanelWithSol from "./assets/svg/solarPanelWithSol.svg";
import Button from "./components/Button";
import Card from "./components/Card";
import CarouselParceiros from "./components/CarrouselParceiros";
import CarrouselPontosItem from "./components/CarrouselPontos";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSectionMobile from "./components/HeroSection/mobile";
import HeroSectionPC from "./components/HeroSection/web";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Text from "./components/Text";
import { carouselItems } from "./utils/utils";

const App: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=553841410381&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: ( next: number) => setSelectedIndex(next),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "18px",
          height: "8px",
          borderRadius: "11px",
          backgroundColor: "#A8A8A8",
          margin: "0 5px",
        }}
      ></div>
    ),
  };

  return (
    <div className="font-titillium">
      <div className="h-screen flex flex-col">
        <Header />
        {isDesktop ? (
          <HeroSectionPC handleClick={handleClick} />
        ) : (
          <HeroSectionMobile handleClick={handleClick} />
        )}
      </div>

      <div className="relative bg-white w-full flex flex-col lg:flex-row items-center lg:items-start justify-center px-[24px] lg:px-[240px] pb-24 lg:gap-[140px]">
    {/* Div for Desktop */}
    <div className="hidden lg:block lg:w-[720px]">
      <Text
        type="paragraph"
        className="text-[#606060] text-start text-[42px] leading-[42px] mt-20 font-tomorrow"
      >
        <span className="text-[#F16422] font-bold">QueLuz</span>, sua loja de{" "}
        <span className="text-[#F16422] font-bold">confiança</span> em produtos{" "}
        <span className="text-[#F16422] font-bold">elétricos</span> e{" "}
        <span className="text-[#F16422] font-bold">hidráulicos.</span> Oferecemos soluções
        para otimizar seu consumo e proteger o meio ambiente.
      </Text>
      <Text type="paragraph" className="mt-4 text-[#606060] text-start">
        Venha conhecer nossas opções e transforme de vez a forma como você
        utiliza energia e recursos!
      </Text>
      <Button
        text="FALE COM A NOSSA EQUIPE!"
        onClick={handleClick}
        className="mt-10"
      />
    </div>

    {/* Div for Mobile */}
    <div className="block lg:hidden">
      <Text
        type="subtitle"
        className="text-[#606060] text-center text-[42px] leading-[42px] mt-20"
      >
        QueLuz, sua loja de confiança em produtos elétricos e hidráulicos.
      </Text>
      <Text type="paragraph" className="mt-4 text-[#606060] text-center">
        Venha conhecer nossas opções e transforme de vez a forma como você
        utiliza energia e recursos!
      </Text>
    </div>

    {/* Carousel and Button */}
    <div className="mt-8 relative w-full lg:w-[720px] lg:mt-16">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index}>
            <CarrouselPontosItem {...item} />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`w-[18px] h-[8px] rounded-[11px] mx-1 ${
              selectedIndex === index ? "bg-[#13212F]" : "bg-[#A8A8A8]"
            }`}
          />
        ))}
      </div>
      <Button
        text="FALE COM A NOSSA EQUIPE!"
        onClick={handleClick}
        className="mx-auto mt-10 flex lg:hidden"
      />
    </div>
  </div>

      <div className="bg-[#F16422] h-[670px] w-full">
        <div>
          <Text
            type="subtitle"
            className="text-center text-white pt-20 text-[32px] leading-[32px] px-7"
          >
            Algumas das grandes empresas que confiam em nossos serviços:
          </Text>
          <div className="w-full px-7">
            <CarouselParceiros />
          </div>
          <div className="w-full px-7 flex lg:hidden">
            <div
              className="relative w-full h-[550px] mt-32 rounded-3xl bg-cover bg-center flex items-center text-center justify-end pb-28 flex-col"
              style={{ backgroundImage: `url(${tower})` }}
            >
              <Text type="subtitle" className="text-[#606060] p-4 text-3xl">
                Mais de
                <span className="text-[#F16422]">
                  40% da conta de energia
                </span>{" "}
                da sua empresa{" "}
                <span className="text-[#F16422]">são impostos!</span>
              </Text>
              <Text type="paragraph" className="text-[#606060] p-4 text-xl">
                Invista hoje e colha muita economia pelas próximas décadas!
              </Text>
            </div>
          </div>
          <div className="w-full px-7 hidden lg:flex">
            <div
              className="relative w-[80%] mx-auto rounded-3xl h-[650px] mt-32 "
              style={{ 
                backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7)), url(${bgBeneficios})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
               }}
            >
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-[80%] flex">
                  <div className=" w-1/2 h-full flex flex-col items-start pl-28 justify-end">
                  <Text type="title" className="text-white text-left p-4 text-[48px] leading-[48px]">Por Que Escolher a <p className="text-[#F16422] font-bold">Queluz?</p></Text>
                  <Text type="title" className="text-white text-left p-4 text-[18px]">oferecemos produtos de alta qualidade e soluções inovadoras <p></p>
                  para residências, empresas e grandes projetos.</Text>
                  <Button text="TAMBÉM QUERO ESSAS VANTAGENS!" onClick={handleClick} className="mt-8" />
                  </div>
                  <div className="w-1/2 h-full flex items-center justify-center">
                  <div className="relative w-[70%] bg-[#F5F5F5] rounded-3xl flex flex-col items-start justify-around gap-8 p-10 ">
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                Qualidade e Variedade de Produtos
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                Atendimento Personalizado
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                Parcerias de Sucesso
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                Presença Digital
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                Custo-Benefício
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                Variedade de Estoque
                </Text>
              </div>
              </div>
              </div>
              </div>    
               <div className="flex items-end pb-4 justify-evenly w-full h-[20%]">
               <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-white text-[18px]">
                Torneiras - Caixa acoplada 
                                </Text>
              </div>
               <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-white text-[18px]">
                Manutenção  - Chuveiros                 </Text>
              </div>
               <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-white text-[18px]">
                reparos de registros  e valvulas de descarga.                </Text>
              </div>
               </div>
              </div>
            </div>
          </div>
          <div className="px-7">
            <div className="relative lg:hidden w-full bg-[#F5F5F5] rounded-3xl flex flex-col items-start justify-around gap-8 p-10 z-10 -mt-24">
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                  Melhor visibilidade do negócio frente a novos investimentos
                  (ESG)
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                  Redução dos custos da sua empresa
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                  Aumento da lucratividade no seu negócio
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                  Blindagem contra a variação do custo de energia
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                  Garantia de retorno sobre o investimento
                </Text>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={infinityIcon}
                  alt="Infinity Icon"
                  className="w-8 h-8 mr-2"
                />
                <Text type="paragraph" className="text-[#606060] text-[18px]">
                  Isenção do ICMS, PIS/CONFINS sobre a energia gerada
                </Text>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden items-center justify-center my-7">
            <Button text="QUERO ESSAS VANTAGENS" onClick={() => {}} />
          </div>

          <div className="mt-16 mb-20 px-5 lg:px-[650px] text-center">
            <Text className="text-[#606060] text-[32px]" type="subtitle">
              Escolher a{" "}
              <span className="text-[#F16422]">Queluz é ter certeza</span> da
              <span className="text-[#F16422]"> parceria duradoura</span> com
              uma
              <span className="text-[#F16422]"> empresa comprometida</span> na
              entrega do esperado.
            </Text>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 px-7 lg:px-[240px]">
            <Card
              description="Disponibilizamos uma vasta gama de produtos elétricos e hidráulicos, incluindo chuveiros, dispositivos inteligentes (Alexa, plugs e lâmpadas inteligentes), tubos elétricos, fios, caixas d'água e diversos tipos de canos."
              title="Equipamentos
de qualidade"
              image={solarPanelWithSol}
            />
            <Card
              description="Produtos Certificados: Todos os nossos produtos passam por rigorosos testes de qualidade e possuem certificações de segurança, proporcionando tranquilidade e confiança para você e sua família."
              title="Segurança
de engenharia"
              image={solarPanelverified}
            />
            <Card
              description="Nossa equipe é altamente treinada para oferecer o melhor suporte técnico e orientação personalizada, garantindo que você encontre exatamente o que precisa para seu projeto."
              title="Consultoria Especializada"
              image={numberOne}
            />
            <Card
              description="Nossa equipe está pronta para ajudar você a escolher os produtos ideais, oferecendo soluções que atendem às suas necessidades específicas."
              title="Amplo estoque 
e agilidade na instalação"
              image={mecanic}
            />
          </div>
          <div className="flex items-center justify-center my-16">
            <Button onClick={handleClick} text="FALE COM UM ESPECIALISTA!" />
          </div>
        </div>
        <div className="h-fit w-full bg-[#13212F] pb-48 lg:pb-14">
          <div className="pt-20 px-4 text-center">
            <Text type="subtitle" className="text-[32px] text-white ">
              Com um
              <span className="text-[#F16422]"> amplo </span>{" "} estoque e soluções
              <span className="text-[#F16422]">personalizadas,</span> estamos prontos para atender diversos públicos, de 
              <span className="text-[#F16422]"> residências</span> a
               <span className="text-[#F16422]"> grandes indústrias</span>.
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-7">
              Números que comprovam a nossa excelência:
            </Text>
            <div className="block lg:hidden">
            <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-white">
              +<span className="text-[#F16422]">8</span>
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-10">
              anos de experiência no setor
            </Text>
            <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-white">
              +<span className="text-[#F16422]">2000</span>
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-10">
              clientes atendidos e satisfeitos
            </Text>
            <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-white">
              +<span className="text-[#F16422]">42</span>
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-10">
              colaboradores em operação 
            </Text>
            <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-[#F16422]">
              3 Unidades
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-10">
              Ipatinga, Almenara, Governador Valadares
            </Text>
            <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-[#F16422]">
              3 Estados
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-10">
              Projetos espalhados em 3 estados: Minas Gerais, Bahia e Espírito
              Santo;
            </Text>
            <img src={states} alt="states" className="mx-auto mt-5" />
            </div>
            <div className="hidden lg:flex flex-col">
            <div className="w-full flex items-center justify-around">
            <div>
            <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-white">
              +<span className="text-[#F16422]">6</span>
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-10">
              anos de experiência no setor
            </Text>
            </div>
            <div>
            <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-white">
              +<span className="text-[#F16422]">150 MIL</span>
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-10">
            clientes atendidos e satisfeitos
            </Text>
            </div>
            <div>
            <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-white">
              +<span className="text-[#F16422]">10 mil</span>
            </Text>
            <Text type="paragraph" className="text-white text-[18px] mt-10">
              Produtos em estoque
            </Text>
            </div>
            </div>
            <div>
              <Text type="subtitle" className="mt-20 text-[80px] leading-[80px] text-[#F16422]">Nossa Unidade</Text>
              <img src={mapa} alt="unidade" className="mx-auto mt-10"/>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center px-3">
          <Text type="subtitle" className="text-[32px]">
            Quem instalou,
            <p className="text-[#F16422]"> aprovou e recomenda!</p>
          </Text>

          <TestimonialCarousel />
        </div>
        <div className="mt-16 w-full">
          <img
            src={form}
            alt="form"
            className="mx-auto w-full px-3 object-cover block lg:hidden"
          />
          <ContactForm />
        </div>
        <div className="relative w-full h-[780px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgOrcamento})` }}>
        <div className="absolute inset-0 flex flex-col gap-12 items-center justify-end pb-10">
          <Text type="title" className="text-white text-[32px] text-center px-4 pt-24">
          Quem preza pela qualidade e segurança do produto, sabe que a Queluz é a melhor opção!
          </Text>
      
          <Button
        text="SOLICITAR ORÇAMENTO GRATUITO"
        onClick={handleClick}
      />        
      </div>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default App;
