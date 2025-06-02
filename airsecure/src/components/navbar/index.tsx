"use client";

import Logo from "../logo";
import Schedule from "../schedule";
// import { useNavigate, useLocation } from "react-router-dom";
import MobileDropdown from "./components/MobileDropdown";
import { menuItems } from "./utils";

export default function NavBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-row pt-2 mb-2 h-16 w-full px-6 md:px-0 md:w-5/6 max-w-screen-2xl items-center justify-between">
        <Logo />

        {/* For desktop view */}
        <div className="md:flex flex-row items-center space-x-8 hidden">
          <ul className="flex space-x-8">
            {menuItems.map((item, i) => (
              <li
                key={i}
                onClick={() => (window.location.href = item.href)}
                className="cursor-pointer md:hover:text-brand-secondary transition duration-200"
              >
                {item.text}
              </li>
            ))}
          </ul>
          <Schedule />
        </div>

        {/* For mobile view */}
        <MobileDropdown />
      </div>
    </div>
  );
}
