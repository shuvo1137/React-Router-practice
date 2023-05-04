import React, { useState } from "react";
import LinkK from "../../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navigation = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "friends", link: "/friends" },
    { id: 3, name: "Countries", link: "/countries" },
    { id: 4, name: "meal", link: "/meal" },
  ];
  const [open, setOpen] = useState(false);
  function handleMenuClick() {
    setOpen(!open);
  }

  return (
    <nav className="bg-indigo-200">
      <div
        onClick={handleMenuClick}
        className="h-6 w-6 text-blue-500 md:hidden "
      >
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>

      <ul
        className={`md:flex justify-center bg-indigo-200 md:static absolute duration-500 w-full ease-in ${
          open ? "top-5" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <LinkK key={route.id} route={route}></LinkK>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
