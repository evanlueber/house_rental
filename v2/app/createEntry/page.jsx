import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  const handleCreateEntry = (e) => {
    e.preventDefault()

    if (!title || !description || !amenities || !price || !rooms || !postal || !city || !address || !image) {
        return toast.error('Bitte alle Felder ausfüllen', {
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

    axios.post('/api/createEntry', {
        title: title,
        description: description,
        amenities: amenities,
        price: price,
        rooms: rooms,
        postal: postal,
        city: city,
        address: address,
        image: image
    }).then(res => {
        if (res.data.success) {
            toast.success('Eintrag erstellt', {
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
                    onClick()
                }, 2000);
        } else {
            toast.error(res.data.message, {
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
    })
  }

  return (
    <div>
      <div className="flex flex-col w-1/2 h-screen">
        <div>
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
          <p>{entry.amenities}</p>
        </div>
        <div>
          <div className="flex flex-row ">calender</div>
          <Button label="Reservieren" outline small onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-row w-1/2 h-screen text-right text-xl ">
        <div className="flex flex-col w-full h-full text-right">
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
        <div className="flex flex-col w-full h-full text-right">
          <Input
            id="image"
            label="Bild"
            type="file"
            required
            onChange={(e) => setImage(e.target.value)}
            className="rounded drop-shadow-md drop-shadow-white "
          />
          <div className="flex flex-row justify-between">
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
        </div>
      </div>
      <Button label="Hochladen" onClick={handleCreateEntry} />
      <ToastContainer />
    </div>
  );
};

export default page;
