import { menuItems } from "@/components/navbar/utils";
import { useState } from "react";
import { X } from "lucide-react";

export default function MobileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden z-10">
      {/* Hamburger Icon */}
      <button
        className="flex flex-col justify-center items-center space-y-1.5 w-8 h-8 rounded-sm bg-green-primary"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-green-primary text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <X className="m-6 cursor-pointer" onClick={toggleMenu} />
        <div className="p-6">
          <ul>
            {menuItems.map((item) => (
              <li className="py-2 cursor-pointer">{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
