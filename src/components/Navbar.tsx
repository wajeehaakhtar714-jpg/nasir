"use client";

import Image from "next/image";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full bg-white shadow-md py-3 px-10 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* ✅ Left: Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo.jpg"
          alt="logo.jpg"
          width={60}
          height={60}
          className="rounded-full border border-gray-300 object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-800">FoodMania</h1>
      </div>

      {/* ✅ Right: Icons */}
      <div className="flex items-center gap-8 text-gray-700 text-2xl">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-blue-500 transition"
          title="Home"
        >
          <FaHome />
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-blue-500 transition"
          title="About"
        >
          <FaInfoCircle />
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-blue-500 transition"
          title="Contact"
        >
          <FaPhone />
        </button>
      </div>
    </nav>
  );
}
