import React, { useState, useEffect } from 'react';

const images = [
  "https://avatars.mds.yandex.net/get-altay/11018317/2a0000018c7bf97a0a33c614d5849c502dcd/XXXL",
  "https://avatars.mds.yandex.net/get-altay/10637974/2a0000018c7c68ea84ead85e07b82368d763/XXXL",
  "https://avatars.mds.yandex.net/get-altay/17043127/2a0000019b267b1e1e38c1da17a879f34924/XXXL"
];

const TopGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avtomatik aylantirish uchun useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 soniyada bir almashadi (3000 = 3 sek)

    return () => clearInterval(timer); // Komponent o'chganda taymerni tozalash
  }, []);

  return (
    // h-screen to'liq ekran balandligini, w-full to'liq kenglikni oladi
    <div className="relative w-full h-48 overflow-hidden bg-black">
      
      {/* Rasmlar qatori */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pastki navigatsiya nuqtalari (Dots) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default TopGallery;




// // 1. Top Gallery Component
// const TopGallery = () => {
//   return (
//     <div className="w-full flex h-48 bg-white overflow-hidden">
//       <div className="w-1/3 border-r">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijFWnaEROhzhUrzFrTJf7Z6wUtV3m4-Y2BDN4EohOYo7OYmsnjble0Z5v&s=10"
//           alt="Jacket"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="w-1/3  border-r">
//         <img
//           src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
//           alt="Jacket"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="w-1/3">
//         <img
//           src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
//           alt="Jacket"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default TopGallery