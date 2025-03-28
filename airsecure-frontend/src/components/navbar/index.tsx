import Logo from "@/components/logo";
// import { useNavigate, useLocation } from "react-router-dom";
import MobileDropdown from "./components/MobileDropdown";
import { menuItems } from "./utils";
import Schedule from "@/components/schedule";

export default function NavBar() {
  return (
    <div className="flex flex-row pt-2 mb-2 h-16 w-full px-6 md:px-0 md:w-5/6 max-w-screen-2xl items-center justify-between">
      <Logo />

      {/* For desktop view */}
      <div className="md:flex flex-row items-center space-x-8 hidden">
        <ul className="flex space-x-8">
          {menuItems.map((item) => (
            <li className="cursor-pointer md:hover:text-green-primary transition duration-200">
              {item.text}
            </li>
          ))}
        </ul>
        <Schedule />
      </div>

      {/* For mobile view */}
      <MobileDropdown />
    </div>
  );
}
