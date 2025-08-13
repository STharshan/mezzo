import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <div id='contact' className="scroll-mt-28 min-h-screen w-full bg-gradient-to-b from-green-950 via-green-950 to-black text-white font-sans p-6 md:p-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-7">Get In Touch</h2>
        <p className="text-sm md:text-lg text-white font-semibold max-w-xl mx-auto mb-13">
          Have questions or want to share feedback? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Form + Info Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-13">
        {/* Left Form Section */}
        <div className="bg-white/10 rounded-lg p-6 md:p-10 shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send us a Message via WhatsApp</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="bg-transparent border border-white/30 rounded-md p-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="email" placeholder="Your Email" className="bg-transparent border border-white/30 rounded-md p-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>

          <input type="text" placeholder="Subject" className="bg-transparent border border-white/30 rounded-md p-2 text-white placeholder-white/70 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400" />

          <textarea placeholder="Your Message" rows="12" className="bg-transparent border border-white/30 rounded-md p-2 text-white placeholder-white/70 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>

          <button className="mt-26 w-full bg-[#4a821d] hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-all">
            Send via WhatsApp
          </button>
        </div>

        {/* Right Info Section */}
        <div className="flex flex-col gap-7">
          {/* Location */}
          <div className="bg-white/10 rounded-lg p-4 flex gap-4 items-center">
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiMapPin />
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm">Unit 19 Victoria Way Pride Park Derby DE24 8AN</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white/10 rounded-lg p-4 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiPhone />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm">01332 318181</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white/10 rounded-lg p-4 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiMail />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm">mezzo.derby@gmail.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white/10 rounded-lg p-4 flex gap-4 items-start">
            <div className="w-10 h-10 mt-25 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiClock />
            </div>
            <div>
              <h3 className="font-semibold">Online ordering :</h3>
              <p className="text-sm">
                Mon – Fri: 10.00 – 21.00 (check for weekend opening)
              </p>
              <h3 className="font-semibold">Call and collect :</h3>
              <p className="text-sm">
                Mon – Fri: 10.00 – 21.00 (check for weekend opening)
              </p>
              <h3 className="font-semibold">Deliveries :</h3>
              <p className="text-sm">
                Mon – Fri: 10.00 – 21.00 via Deliveroo, Uber Eats and Just Eat <br />
                (check for weekend opening)
              </p>
              <h3 className="font-semibold">Buffet service (in store) :</h3>
              <p className="text-sm">
                Mon – Fri: 11.00 – 15.00
              </p>
              <h3 className="font-semibold">Made to Order bowl service (in store) :</h3>
              <p className="text-sm">
                Mon – Fri: 10.00 – 21.00 (check for weekend opening)
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps?q=Unit+19+Victoria+Way,+Pride+Park,+Derby,+DE24+8AN&output=embed"
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
