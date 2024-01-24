"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import About from "./About";
import UserMenu from "./UserMenu";
import Rent from "./Rent";

const Navbar = ({
  currentUser
}) => {
  return (
    <div className="fixed w-full bg-black bg-opacity-40 z-10 shadow-sm shadow-gray-300 text-black">
      <div className="py-4 border-b ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <div className=" flex flex-row gap-10">
              <Rent />
              <About />
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
