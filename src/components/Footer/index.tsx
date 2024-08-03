import footerLogo from "../../assets/images/footerLogo.png"
import Text from "../Text"
export default function Footer() {
  return (
    <div className="w-full bg-[#1C1C1C] flex flex-col items-center pb-11">
      <img src={footerLogo} alt="footer" className="pt-8" />
      <Text type="paragraph" className="text-[14px text-[#CBCBCB] px-6">Faça a escolha certa com a QueLuz. Somos referência regional em vendas de produtos de qualidade com foco na  eficiência e sustentabilidade. Atuamos desde a análise de viabilidade até a manutenção dos mesmos.</Text>
      <div className="mt-12 w-[90%] px-6 h-[1px] bg-white bg-opacity-[18%]"/>
      <Text type="paragraph" className="text-[14px] text-center text-[#CBCBCB] mt-5">Copyright © 2024 <span className="text-[#F16422]">QueLuz Elétricos e Hidráulicos</span> AmaralAgencyRp.</Text>
      <div className="flex items-center justify-around w-full">
        <Text type="paragraph" className="text-[14px] text-white mt-5">Políticas de Privacidade</Text>
        <Text type="paragraph" className="text-[14px] text-white mt-5">Aviso Legal</Text>
      </div>
    </div>
  )
}
