import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-[#800001] text-white w-full py-4 flex justify-between items-center px-6">
        <div className="text-2xl font-bold">Mid-City Body Works</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#appointment" className="hover:underline">Book Appointment</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center p-6">
        <section id="home" className="w-full bg-white p-6 rounded-lg shadow-md mt-6 text-center">
          <h1 className="text-4xl font-bold text-[#800001]">Mid-City Body Works</h1>
        </section>

        {/* Our Services Section */}
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#800001] text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#800001] p-4 rounded">
              <h3 className="font-bold">Auto Body and Paint Repair</h3>
            </div>
            <div className="bg-[#800001] p-4 rounded">
              <h3 className="font-bold">Frame and Unibody Correction</h3>
            </div>
            <div className="bg-[#800001] p-4 rounded">
              <h3 className="font-bold">Theft Restoration</h3>
            </div>
            <div className="bg-[#800001] p-4 rounded">
              <h3 className="font-bold">Painting and Tape Pin-striping</h3>
            </div>
            <div className="bg-[#800001] p-4 rounded">
              <h3 className="font-bold">Suspension Repair</h3>
            </div>
            <div className="bg-[#800001] p-4 rounded">
              <h3 className="font-bold">Glass Replacement</h3>
            </div>
          </div>
          <div className="text-center mt-6">
            <a href="#appointment" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Appointment</a>
          </div>
        </section>

        {/* Placeholder Photo Section */}
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-300 h-40"></div>
            <div className="bg-gray-300 h-40"></div>
            <div className="bg-gray-300 h-40"></div>
            <div className="bg-gray-300 h-40"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white w-full py-6 mt-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Address: 1234 Main Street, Anytown, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@collisionrepair.com</p>
        </div>
      </footer>
    </div>
  );
}
