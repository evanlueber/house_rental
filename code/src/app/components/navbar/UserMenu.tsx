"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useRouter } from "next/router";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: SafeUser | null;
} 

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
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
          onClick={toggleOpen}
          className=" p-4 md:py-1 md:px-2 gap-3 border-1 border hover:shadow-sm hover:shadow-gray-300 border-white flex flex-row items-center rounded-full cursor-pointer transition"
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
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
