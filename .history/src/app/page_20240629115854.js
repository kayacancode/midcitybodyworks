import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="bg-blue-600 text-white w-full py-6">
        <h1 className="text-center text-3xl font-bold">Local Business Body Collision Repair</h1>
      </header>
      <main className="flex flex-col items-center p-6">
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Our Shop</h2>
          <p className="mb-4">
            We provide top-notch body collision repair services for your vehicle. Our experienced team is dedicated to delivering the best results and ensuring customer satisfaction.
          </p>
          <h3 className="text-xl font-semibold mb-2">Our Services</h3>
          <ul className="list-disc pl-6">
            <li className="mb-2">Full Body Collision Repair</li>
            <li className="mb-2">Paintless Dent Repair</li>
            <li className="mb-2">Auto Painting</li>
            <li className="mb-2">Frame Straightening</li>
          </ul>
        </section>
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="mb-4">
            Address: 1234 Main Street, Anytown, USA
          </p>
          <p className="mb-4">
            Phone: (123) 456-7890
          </p>
          <p>
            Email: info@collisionrepair.com
          </p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white w-full py-4 mt-6">
        <p className="text-center">&copy; 2024 Local Business Body Collision Repair</p>
      </footer>
    </div>
  )
}
