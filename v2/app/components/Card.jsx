import React from "react";

const Card = ({image, price}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="w-2/3 h-full">{image}</p>
      <p className="w-1/3 h-full font-bold text-md">{price}</p>
    </div>
  );
};

export default Card;
