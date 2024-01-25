"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

const UserMenu = () => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    signOut();
    toast.success("Logout erfolgreich", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <div className="relative text-white ">
      <div className="flex flex-row items-center gap-3 ">
        <button
          onClick={() => {}}
          className={"text-lg py-3 px-4 rounded-full hover:bg-[#1F1F1F] transition cursor-pointer text-white " + (!session.data?.user ? "opacity-0" : "block ")}
          disabled={!session.data?.user}
        >
          Neuer Eintrag +
        </button>
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
            {session.data?.user ? (
              <>
                <MenuItem onClick={() => {}} label="Meine Einträge" />
                <MenuItem onClick={handleLogout} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={() => setLoginOpen(true)} label="Anmelden" />
                <MenuItem
                  onClick={() => setRegisterOpen(true)}
                  label="Registrieren"
                />
              </>
            )}
          </div>
        </div>
      )}

      {loginOpen && (
        <>
          <LoginModal onClick={() => setLoginOpen(false)}/>
        </>
      )}

      {registerOpen && (
        <>
          <RegisterModal onClick={() => setRegisterOpen(false)} />
        </>
      )}
    </div>
  );
};

export default UserMenu;
