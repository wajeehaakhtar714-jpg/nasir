"use client";

export default function Sidebar() {
  const menuItems = [
    { name: "Chicken Pizza", price: 1200 },
    { name: "Cheese Burger", price: 850 },
    { name: "Samosas", price: 300 },
    { name: "Pakoras", price: 250 },
    { name: "French Fries", price: 400 },
    { name: "Zinger Burger", price: 950 },
  ];

  return (
    <aside className="w-64 bg-blue-50 border-r border-blue-200 p-6 flex flex-col justify-between min-h-screen">
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-5">🍽 Menu</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <span className="font-medium text-gray-800">{item.name}</span>
              <span className="text-blue-600 font-semibold">Rs {item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-8 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition text-lg">
        Order Now 🍔
      </button>
    </aside>
  );
}
