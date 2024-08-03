import { FC, ReactNode } from "react";
import clsx from "clsx";

type TextProps = {
  type: "title" | "subtitle" | "paragraph" | "light" | "extralight";
  children: ReactNode;
  className?: string;
};

const Text: FC<TextProps> = ({ type, children, className, ...props }) => {
  const baseStyle = "font-titillium";
  const typeStyles = {
    title: "text-4xl font-bold",
    subtitle: "text-2xl font-semibold",
    paragraph: "text-[16px] font-regular",
    light: "text-base font-light",
    extralight: "text-base font-extralight",
  };

  const combinedClassName = clsx(baseStyle, typeStyles[type], className);

  return (
    <p className={combinedClassName} {...props}>
      {children}
    </p>
  );
};

export default Text;
