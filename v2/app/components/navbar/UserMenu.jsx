"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import Input from "../Input";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

const UserMenu = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className="relative text-white">
      <div className="flex flex-row items-center gap-3 ">
        <div
          onClick={() => {}}
          className="hidden md:block text-lg py-3 px-4 rounded-full hover:bg-[#1F1F1F] transition cursor-pointer"
        >
          Your Home
        </div>
        <div
          onClick={toggleIsOpen}
          className=" p-4 md:py-1 md:px-2 gap-3 border-1 border hover:shadow-md hover:shadow-gray-300 border-white flex flex-row items-center rounded-full cursor-pointer transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block ">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 text-sm  bg-[#131313]">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={() => setLoginOpen(true)} label="Login" />
                <MenuItem
                  onClick={() => setRegisterOpen(true)}
                  label="Sign Up"
                />
              </>
            )}
          </div>
        </div>
      )}

      {loginOpen && (
        <div
          className="
            justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 
            z-50 
            outline-none 
            focus:outline-none
           bg-neutral-800/70"
        >
          <div
            className="
            relative 
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto 
            h-full 
            lg:h-auto
            md:h-auto"
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-black 
              outline-none 
              focus:outline-none
              p-10
              "
            >
              <button
                className=" border-0 hover:opacity-70 transition absolute left-9 "
                onClick={() => setLoginOpen(false)}
              >
                <IoMdClose size={18} />
              </button>
              <div className=" font-semibold text-center pb-10 text-2xl">
                Einloggen
              </div>
              <div className="flex flex-col gap-4">
                <Input id="email" label="Email" required />
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  required
                />
                <Button label="Registrieren" onClick={() => {}} outline small />
              </div>
            </div>
          </div>
        </div>
      )}

      {registerOpen && (
        <div
          className="
            justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 
            z-50 
            outline-none 
            focus:outline-none
           bg-neutral-800/70"
        >
          <div
            className="
            relative 
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto 
            h-full 
            lg:h-auto
            md:h-auto"
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-black 
              outline-none 
              focus:outline-none
              p-10
              "
            >
              <button
                className="p-1 border-0 hover:opacity-70 transition absolute left-9 "
                onClick={() => setRegisterOpen(false)}
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-2xl text-center pb-10 font-semibold">Registrieren</div>
              <div className="flex flex-col gap-4">
                <Input id="email" label="Email" required />
                <Input id="name" label="Name" required />
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  required
                />
                <Button label="Registrieren" onClick={() => {}} outline small />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
