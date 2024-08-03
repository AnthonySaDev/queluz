import Text from "../Text";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: Props) {
  return (
    <div className="w-full bg-[#F5F5F5] rounded-3xl flex flex-col items-center justify-around gap-8 p-10 text-center">
      <img src={image} alt="icon" />
      <Text type="subtitle" className="text-[#F16422] text-[22px]">
        {title}
      </Text>
      <Text type="paragraph" className="text-[#606060] text-[18px]">
        {description}
      </Text>
    </div>
  );
}
