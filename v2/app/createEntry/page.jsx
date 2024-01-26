"use client";
import React, { useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";
import api from "../utils/api";

const page = () => {
  const router = useRouter();
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [amenities, setAmenities] = useState({
    familyFriendly: false,
    petsAllowed: false,
    smokingAllowed: false,
    aircon: false,
    balcony: false,
    bath: false,
    beach: false,
    dryer: false,
    elevator: false,
    freeParking: false,
    hairDryer: false,
    heating: false,
    kitchen: false,
    safe: false,
    selfCheckIn: false,
    ski: false,
    tv: false,
    washer: false,
    wifi: false,
  });

  useEffect(() => {
    if (!user || user._id === "") {
      router.push("/");
    }
  });
  const handleCheckboxChange = (amenity) => {
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [amenity]: !prevAmenities[amenity],
    }));
  };

  const handleCreateEntry = (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !price ||
      !rooms ||
      !postal ||
      !city ||
      !address ||
      !image
    ) {
      return toast.error("Bitte alle Felder ausfüllen", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
const res = api.createEntry(title, description, amenities, price, rooms, postal, city, address, image, user._id)
        if (res.success) {
          toast.success("Eintrag erstellt", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          setTimeout(() => {
            router.push('/myEntrys')
          }, 2000);
        } else {
          toast.error(res.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
  };

  return (
    <div className=" w-full pl-10 pr-10 flex flex-col justify-center items-center text-white gap-2">
      <div className="flex flex-row gap-3">
        <div className="w-1/2 h-full flex flex-col gap-2">
          <Input
            id="title"
            label="Titel"
            required
            onChange={(e) => setTitle(e.target.value)}
            className="text-3xl font-bold"
          />
          <Input
            id="description"
            label="Description"
            required
            onChange={(e) => setDescription(e.target.value)}
            className="text-3xl "
          />
          <Input
            id="price"
            label="Preis pro Nacht"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            id="rooms"
            label="Rooms"
            required
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>
        <div className="w-1/2 h-full flex flex-col gap-2">
          <Input
            id="image"
            label="Bild"
            type="file"
            required
            onChange={(e) => setImage(e.target.value)}
            className="rounded drop-shadow-md drop-shadow-white "
          />
          <Input
            id="postal"
            label="PLZ"
            required
            onChange={(e) => setPostal(e.target.value)}
          />
          <Input
            id="city"
            label="Stadt"
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            id="address"
            label="Addresse"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="w-1/2 flex flex-row flex-wrap gap-3">
          {Object.keys(amenities).map((amenity) => (
            <div key={amenity}>
              <label>
                <input
                  type="checkbox"
                  name={amenity}
                  checked={amenities[amenity]}
                  onChange={() => handleCheckboxChange(amenity)}
                />
                {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button label="Hochladen" onClick={handleCreateEntry} />
      <ToastContainer />
    </div>
  );
};

export default page;
