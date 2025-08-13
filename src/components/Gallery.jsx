import React from 'react';

const images = [
  '/barger.jpeg',
  '/cake.jpeg',
  '/chocolate.jpeg',
  '/fishfry.jpeg',
  '/juice.jpeg',
  '/lemon.jpeg',
  '/samocha.jpeg',
  '/tea.jpeg',
  '/barger.jpeg',
  '/cake.jpeg',
];

const Gallery = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-green-950 to-green-950 text-white py-16 -mt-15">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-7">Our Gallery</h2>
        <p className="text-sm md:text-lg text-white font-semibold">
          Take a visual journey through our delicious offerings and vibrant atmosphere
        </p>
      </div>

      {/* Scrolling gallery */}
      <div className="overflow-hidden relative group"> {/* Add group for hover tracking */}
        <div className="flex gap-6 w-max px-6 scroll-gallery">
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden 
              transform transition-transform duration-300 
              hover:scale-105 cursor-pointer"
            >
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom keyframes and pause on hover */}
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-50%) }
        }

        .scroll-gallery {
          animation: scroll-x 40s linear infinite;
        }

        .group:hover .scroll-gallery {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
