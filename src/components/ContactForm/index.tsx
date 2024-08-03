import React from "react";
import InputMask from "react-input-mask";
import formImage from "../../assets/images/formImage.png";
import Text from "../Text";
const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:mb-20">
      <img src={formImage} alt="form image"  className="hidden lg:block lg:w-[600px] lg:h-[800px] object-cover"
      />
    <div className="bg-[#F5F5F5] text-center lg:text-start pt-11 pb-16 px-4 lg:px-16 min-h-[800px] lg:w-[600px]">
      <h1 className="bg-[#13212F] w-fit mx-auto lg:mx-0 lg:text-start text-white px-4 py-2 rounded-lg">
        C O N T A T O
      </h1>
      <Text
        type="subtitle"
        className="my-6 text-[32px] text-[#F16422] px-8 lg:px-0 text-center lg:text-start"
      >
        O que preciso fazer para realizar um orçamento sem compromisso?
      </Text>
      <Text type="paragraph" className="text-[#767D8E] text-[17px]">
        É muito simples! Preencha o formulário abaixo que um de nossos
        especialistas entrará em contato com você!
      </Text>

      <form className="mt-8 max-w-md mx-auto lg:mx-0">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Seu nome:"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F16422] placeholder:text-[17px] placeholder:text-[#181C28]"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Seu email:"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F16422] placeholder:text-[17px] placeholder:text-[#181C28]"
            required
          />
        </div>

        <div className="mb-4">
          <InputMask
            mask="(99) 99999-9999"
            placeholder="Telefone com DDD:"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F16422] placeholder:text-[17px] placeholder:text-[#181C28]"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Seu estado:"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F16422] placeholder:text-[17px] placeholder:text-[#181C28]"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Valor médio da conta de energia:"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F16422] placeholder:text-[17px] placeholder:text-[#181C28]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#F16422] text-white py-3 rounded-md mt-6 hover:bg-[#e0551d] transition-colors"
        >
          <Text type="title" className="text-[16px] tracking-wider	">FINALIZAR MEU CADASTRO</Text>
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;