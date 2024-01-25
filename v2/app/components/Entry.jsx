import React from "react";
import Button from "./Button";

const Entry = () => {


  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <div></div>
        <div>
          <div className="flex flex-row ">
            auswahl wieviele tage man bleibt

          </div>
          <Button label="Reservieren" outline small onClick={() => {}} />
        </div>
      </div>
      <div>
        pictures
      </div>
    </div>
  );
};

export default Entry;
