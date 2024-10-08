import clsx from 'clsx';
import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Text from '../Text';

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({ text, onClick, className, ...props }) => {
  const combinedClassName = clsx(
    'flex items-center justify-between bg-[#F16422] text-white rounded-[8px] lg:px-8 px-2 py-2',
    className
  );

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      <Text type="title" className='text-[16px]'>{text}</Text>
      <FaArrowRight className="ml-2" />
    </button>
  );
};

export default Button;
