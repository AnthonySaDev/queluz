import React from "react";
import logo from "../../assets/images/logo.png";
import Button from "../Button";

const Header: React.FC = () => {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=553841410381&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <div className="flex items-center justify-center lg:justify-around bg-white p-4">
      <img src={logo} alt="logo" className="max-w-full h-auto" />
      <Button
        text="FALE COM A NOSSA EQUIPE!"
        onClick={handleClick} 
        className="hidden lg:flex"
      />
    </div>
  );
};

export default Header;
