import React from "react";
import comment1 from "../../assets/images/comment1.png";
import comment2 from "../../assets/images/comment2.png";
import comment3 from "../../assets/images/comment3.png";
import comment4 from "../../assets/images/comment4.png";

const TestimonialCarousel: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] my-28 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <img src={comment1} alt="comment1" className="w-[500px] h-[190px] object-contain" />
      <img src={comment2} alt="comment2" className="w-[500px] h-[190px] object-contain" />
      <img src={comment3} alt="comment3" className="w-[500px] h-[210px] object-contain" />
      <img src={comment4} alt="comment4" className="w-[500px] h-[190px] object-contain" />
    </div>
  );
};

export default TestimonialCarousel;
