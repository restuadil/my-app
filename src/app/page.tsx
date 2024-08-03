import Navbar from "@/components/Navbar"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-[100vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url("/discover.jpg")` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to</h1>
          <h1 className="text-5xl font-bold mb-4"> Coffee Shop</h1>
          <p className="text-xl mb-6">Discover the best coffee in town</p>
          <button className="bg-white text-black py-2 px-4 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Highlights */}
      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Bestsellers</h2>
        <div className="flex justify-center gap-10">
          <div className="w-60 p-5 bg-white shadow-lg rounded-lg flex flex-col justify-around">
            <Image
              src="/espreso.jpg"
              alt="Product 1"
              width={240}
              height={200}
              className="h-52 rounded-md shadow-md shadow-slate-600"
            />
            <h3 className="text-xl font-semibold mt-4">Espresso</h3>
            <p className="mt-2">Rich and bold espresso shots</p>
            <p className="mt-2 font-bold">$2.50</p>
          </div>
          <div className="w-60 p-5 bg-white shadow-lg rounded-lg flex flex-col justify-around">
            <Image
              src="/Capucino.jpg"
              alt="Product 2"
              width={240}
              height={200}
              className="h-52 rounded-md shadow-md shadow-slate-600"
            />
            <h3 className="text-xl font-semibold mt-4">Cappuccino</h3>
            <p className="mt-2">Smooth and creamy cappuccino</p>
            <p className="mt-2 font-bold">$3.00</p>
          </div>
          <div className="w-60 p-5 bg-white shadow-lg rounded-lg flex flex-col justify-around">
            <Image
              src="/latte.jpg"
              alt="Product 3"
              width={240}
              height={200}
              className="h-52 rounded-md shadow-md shadow-slate-600"
            />
            <h3 className="text-xl font-semibold mt-4">Latte</h3>
            <p className="mt-2">Perfectly balanced latte</p>
            <p className="mt-2 font-bold">$3.50</p>
          </div>
        </div>
      </section>

      {/* new products */}
      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our New Products</h2>
        <div className="flex justify-center gap-10 mx-20">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5">
            <div className="text-left flex flex-col gap-3 w-full">
              <div className="flex flex-row items-center justify-between">
                <span className="bg-red-500 text-white px-5 py-1.5 rounded-lg w-1/3 text-center">
                  NEW!!
                </span>
                <span className="text-2xl font-bold">$4.00</span>
              </div>
              <h2 className="text-xl font-semibold">Croissant Hazelnut</h2>
              <p className="text-gray-600 text-sm">
                Classic croissant with hazelnut filling
              </p>
            </div>
            <Image
              src={"/croissant.jpg"}
              alt="newProduct"
              className="w-80 h-80 rounded-lg mt-5 transition-transform transform hover:scale-105"
              height={320}
              width={320}
            />
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="flex justify-center gap-10">
          <div className="w-80 p-5 bg-gray-100 shadow-lg rounded-lg">
            <p>
              The best coffee Ive ever had! Great atmosphere and friendly staff.
            </p>
            <p className="mt-4 font-semibold">- Jane Doe</p>
          </div>
          <div className="w-80 p-5 bg-gray-100 shadow-lg rounded-lg">
            <p>Amazing selection of coffee and pastries. Highly recommend!</p>
            <p className="mt-4 font-semibold">- John Smith</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="max-w-3xl mx-auto">
          Coffee Shop is a family-owned business that has been serving the
          community since 1990. Our mission is to provide the best coffee
          experience with high-quality beans and excellent customer service.
          Join us for a cup of coffee and enjoy the cozy atmosphere of our shop.
        </p>
      </section>
    </div>
  )
}
export default Home
