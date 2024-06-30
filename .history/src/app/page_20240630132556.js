"use client";

import Image from "next/image";
import { useState } from 'react';
import Head from "next/head";
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
    vechiclevin:'',
    licenseplate:'',

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to Formspree
    fetch('https://formspree.io/f/xblrjrng', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          alert('Your appointment request has been sent!');
        } else {
          alert('There was a problem with your submission.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was a problem with your submission.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
            <Head>
        <title>Mid-City Body Works | Memphis Collision Repair Body Shop</title>
        <meta name="description" content="Mid-City Body Works offers professional auto body and paint repair, frame and unibody correction, theft restoration, painting and tape pin-striping, suspension repair, and glass replacement services in Memphis. Book your appointment today!" />
        <meta name="keywords" content="Memphis collision repair, auto body shop, paint repair, frame correction, theft restoration, pin-striping, suspension repair, glass replacement, Mid-City Body Works" />
        <meta name="author" content="Mid-City Body Works" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Mid-City Body Works | Memphis Collision Repair Body Shop" />
        <meta property="og:description" content="Mid-City Body Works offers professional auto body and paint repair, frame and unibody correction, theft restoration, painting and tape pin-striping, suspension repair, and glass replacement services in Memphis. Book your appointment today!" />
        <meta property="og:url" content="https://www.midcitybodyworks.com" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Navigation Bar */}
      <header className="bg-[#800001] text-white w-full py-4 flex justify-between items-center px-6">
        <div className="text-2xl font-bold">Mid-City Body Works</div>
     
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center p-6">
        <section id="home" className="w-full bg-white p-6 rounded-lg shadow-md mt-6 text-center text-[#800001]">
          <div className="">
          <Image src="/logo1.png" alt="Placeholder Image 1" width = {200} height={200} className="rounded" />
</div>
          <p className="italic">Mid-City Body Works has been family owned and operated since 1979</p>
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
            <a href="#appointment" className="bg-black text-white px-4 py-2 rounded hover:bg-[#800001]">Book Appointment</a>
          </div>
        </section>

        {/*  Photo Section */}
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-[#800001]">Our Work</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="relative w-full h-40">
              <Image src="/car1.png" alt="Placeholder Image 1" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car2.jpeg" alt="Placeholder Image 2" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car3.jpeg" alt="Placeholder Image 3" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car4.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car5.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car6.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car7.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car8.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car9.png" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car10.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car11.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car12.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="relative w-full h-40">
              <Image src="/car13.jpeg" alt="Placeholder Image 4" layout="fill" objectFit="cover" className="rounded" />
            </div>
          </div>
        </section>
        <section id="appointment" className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-6 text-[#800001]">
          <h2 className="text-2xl font-semibold mb-4 text-[#800001] text-center">Book Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
              >
                <option value="">Select a service</option>
                <option value="Auto Body and Paint Repair">Auto Body and Paint Repair</option>
                <option value="Frame and Unibody Correction">Frame and Unibody Correction</option>
                <option value="Theft Restoration">Theft Restoration</option>
                <option value="Painting and Tape Pin-striping">Painting and Tape Pin-striping</option>
                <option value="Suspension Repair">Suspension Repair</option>
                <option value="Glass Replacement">Glass Replacement</option>
              </select>
            </div>
            <div>
            <label htmlFor="vechiclevin" className="block text-sm font-medium text-gray-700">Vehicle Vin Number</label>
              <input
                type="vechiclevin"
                name="vechiclevin"
                id="vechiclevin"
                value={formData.vechiclevin}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
            <label htmlFor="licenseplate" className="block text-sm font-medium text-gray-700">License Plate</label>
              <input
                type="licenseplate"
                name="licenseplate"
                id="licenseplate"
                value={formData.licenseplate}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-[#800001]"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
     
      {/* Footer */}
      <footer className="bg-gray-800 text-white w-full py-6 mt-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Address: 1336 N Watkins St, Memphis, TN 38108 </p>
          <p>Phone: (901) 270-8466</p>
          <p>Email: midcitybodyworks901@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
