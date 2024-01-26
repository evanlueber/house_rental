import React from "react";

import Input from "../Input";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useUserContext } from "@/app/context/UserContext";
import api from "@/app/utils/api";

const LoginModal = ({ onClick }) => {
  const {setUser} = useUserContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email || !password) {
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

    const res = await api.login(email, password);

    if (!res.data.success) {
        toast.error('Login fehlgeschlagen: ' + res.error, {
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
    } else {
      toast.success('Login erfolgreich', {
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
          setUser(res.data.user)
          setTimeout(() => {
            onClick()
          }, 2000);
        }
  }

  return (
    <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className=" relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className=" translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none p-10">
          <button
            className=" border-0 hover:opacity-70 transition absolute left-9 "
            onClick={onClick}
          >
            <IoMdClose size={18} />
          </button>
          <div className=" font-semibold text-center pb-10 text-2xl">
            Anmelden
          </div>
          <div className="flex flex-col gap-4">
            <Input id="email" label="Email" required onChange={(e) => setEmail(e.target.value)} />
            <Input id="password" label="Passwort" type="password" required onChange={(e) => setPassword(e.target.value)} />
            <Button label="Anmelden" onClick={handleLogin} outline small />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginModal;
