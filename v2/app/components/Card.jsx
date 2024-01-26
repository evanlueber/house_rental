import React from "react";

const Card = ({image, price, showDelete}) => {
  
  const handleDelete = () => {
    axios.delete('/api/deleteEntry', {
      image: image,
      price: price
    })
  }

  return (
    <div className="flex flex-col rounded p-10 gap-2 text-white">
      <img className="w-full " src={image} alt="image" />
      <p className=" pt-2 font-bold text-md">{price}</p>
      {showDelete && (
        <button className=" bg-red-500 rounded p-2" onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
};

export default Card;
