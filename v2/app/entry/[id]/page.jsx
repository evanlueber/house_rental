import React from "react";
import Button from "../../components/Button";
import db from "../../libs/db";
import api from "@/app/utils/api";

const page = ({ params }) => {
  const entry = api.getEntry(params.id);
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col w-1/2 h-screen">
        <div>
          <p className="text-3xl font-bold">{entry.title}</p>
          <p className="text-xl">{entry.description}</p>
          <p>{entry.amenities}</p>
        </div>
        <div>
          <div className="flex flex-row ">
            calender
          </div>
          <Button label="Reservieren" outline small onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-row w-1/2 h-screen text-right text-xl ">
        <div className="flex flex-col w-full h-full text-right">
          <p>{entry.price} CHF</p>
          <p>{entry.rooms} Rooms</p>
        </div>
        <div className="flex flex-col w-full h-full text-right">
          <p className="rounded drop-shadow-md drop-shadow-white ">{entry.image}</p>
          <p>{entry.postal} {entry.city}</p>
          <p>{entry.address}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
