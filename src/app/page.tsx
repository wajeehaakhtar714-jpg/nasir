import Image from "next/image";

export default function HomePage() {
  return (
    <div className="pt-28 px-10 space-y-32">
      {/* 🏠 Home Section */}
      <section id="home" className="min-h-screen scroll-mt-24">
        <h2 className="text-4xl font-bold mb-4">Welcome to FoodMania 🍕</h2>
        <p className="text-gray-700 text-lg">
          Enjoy our best pizzas, burgers, and snacks made fresh for you!
        </p>

        {/* 3 Famous Items */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { name: "Pepperoni Pizza", desc: "Crispy crust with cheesy toppings", img:"/pizza.jpg" },
            { name: "Chease Burger", desc: "Juicy beef patty with melted cheese", img: "/burger.jpg" },
            { name: "Crispy Fries", desc: "Golden and crunchy fries", img: "/fries.jpg" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
              <Image src={item.img} alt={item.name} width={400} height={300} className="rounded-xl" />
              <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ℹ️ About Section */}
      <section id="about" className="min-h-screen scroll-mt-24">
        <h2 className="text-4xl font-bold mb-4">About Us 🧑‍🍳</h2>
        <p className="text-gray-700 text-lg">
          We started with a passion for delicious food and quality service. At FoodMania,
          we make sure every bite brings a smile to your face.
        </p>
      </section>

      {/* ☎️ Contact Section */}
      <section id="contact" className="min-h-screen scroll-mt-24">
        <h2 className="text-4xl font-bold mb-4">Contact Us 📞</h2>
        <p className="text-gray-700 text-lg">📍 Address: Main Food Street, Karachi</p>
        <p className="text-gray-700 text-lg">📞</p>
        <p className="text-gray-700 text-lg">📧 Email: info@foodmania.com</p>
      </section>
    </div>
  );
}
