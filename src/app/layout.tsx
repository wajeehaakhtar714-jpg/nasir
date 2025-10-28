import type { Metadata } from "next";
import "../app/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "FoodMania | Next.js 15 Project",
  description: "Delicious fast food website built with Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-10 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
