"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import { toast } from "react-toastify";
import { useUserContext } from "@/app/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const router = useRouter();
  const {user, setUser} = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null)
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
    router.push("/")
  }

  return (
    <div className="relative text-white ">
      <div className="flex flex-row items-center gap-3 ">
        <Link
          className={"text-lg py-3 px-4 rounded-full hover:bg-[#1F1F1F] transition cursor-pointer text-white " + (user === null ? "opacity-0" : "block ")}
          disabled={user === null}
          href="/createEntry"
        >
          Neuer Eintrag +
          </Link>
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
            {user != null ? (
              <>
                <MenuItem onClick={() => {
                  router.push("/myEntrys")
                }} label="Meine Einträge" />
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
