import React from "react";

import Input from "../Input";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const RegisterModal = ({ onClick }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()

        if (!email || !name || !password || !address || !city || !postalCode) {
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
        
        axios.post('/api/register', { 
          email: email,
          name: name,
          password: password,
          address: address,
          city: city,
          postalCode: postalCode
        }).then(res => {
          if (res.data.success) {
            toast.success('Registrierung erfolgreich', {
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
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none bg-neutral-800/70">
      <div className=" relative w-full  md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-automd:h-auto">
        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none p-10">
          <button
            className="p-1 border-0 hover:opacity-70 transition absolute left-9 "
            onClick={onClick}
          >
            <IoMdClose size={18} />
          </button>
          <div className="text-2xl text-center pb-10 font-semibold">
            Registrieren
          </div>
          <div className="flex flex-col gap-4">
            <Input id="email" label="Email" required onChange={(e) => setEmail(e.target.value)} />
            <Input id="name" label="Name" required onChange={(e) => setName(e.target.value)}/>
            <Input id="password" label="Passwort" type="password" required onChange={(e) => setPassword(e.target.value)} />
            <Input id="address" label="Addresse" required onChange={(e) => setAddress(e.target.value)} />
            <Input id="city" label="Stadt" required onChange={(e) => setCity(e.target.value)} />
            <Input id="postalCode" label="PLZ" type="number" required onChange={(e) => setPostalCode(e.target.value)} />
            <Button label="Registrieren" onClick={handleRegister} outline small />
          </div>
        </div>
      </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
    </div>
  );
};

export default RegisterModal;
