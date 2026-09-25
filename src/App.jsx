import React from "react";
// Ikonkalarni react-icons dan chaqiramiz
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiChevronRight, FiMapPin } from "react-icons/fi";

// 1. Top Gallery Component
const TopGallery = () => {
  return (
    <div className="w-full flex h-48 bg-white overflow-hidden">
      <div className="w-1/3 border-r">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijFWnaEROhzhUrzFrTJf7Z6wUtV3m4-Y2BDN4EohOYo7OYmsnjble0Z5v&s=10"
          alt="Jacket"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/3  border-r">
        <img
          src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
          alt="Jacket"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/3">
        <img
          src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
          alt="Jacket"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// 2. Profile Header Component
const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center -mt-10 z-10 relative">
      <img
        src="/assets/logo.jpg"
        alt="DenTex Profile"
        className="w-20 h-20 rounded-full object-cover border-4 border-slate-200"
      />
      <h1 className="text-5xl font-bold mt-2 font-serif tracking-widest  text-slate-900">
        KARAVAN
      </h1>
      <p className="text-xl text-slate-600 font-medium">
        Siz va Oilangiz uchun!
      </p>
    </div>
  );
};

// 3. Social Links Component
const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 my-6">
      {/* <a
        href="#"
        className="w-10 h-10 bg-green-900 text-white flex items-center justify-center rounded-xl"
      >
        <FaFacebook size={20} />
      </a> */}
      <a
        href="https://www.instagram.com/karavan.sam?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
        className="w-10 h-10 bg-green-900 text-white flex items-center justify-center rounded-xl"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://t.me/karavansam"
        className="w-10 h-10 bg-green-900 text-white flex items-center justify-center rounded-xl"
      >
        <FaTelegramPlane size={20} />
      </a>
      <a
        href="https://www.youtube.com/@Karavansam"
        className="w-10 h-10 bg-green-900 text-white flex items-center justify-center rounded-xl"
      >
        <FaYoutube size={20} />
      </a>
    </div>
  );
};

// 4. Action Menu Component
const ActionMenu = () => {
  const btnClass =
    "w-full border border-slate-400 rounded-full py-3 px-6 flex items-center relative hover:bg-slate-300/30 transition-colors";

  return (
    <div className="w-full px-6 flex flex-col gap-3">
      <button className={btnClass}>
        <FaPhoneAlt size={18} className="absolute left-6" />
        <span className="w-full text-center font-medium cursor-pointer">
          <a href="tel:+998904639999">+998 90 463 99 99</a>
        </span>
      </button>
      <button className={btnClass}>
        <FaPhoneAlt size={18} className="absolute left-6" />
        <span className="w-full text-center font-medium cursor-pointer">
          <a href="tel:+998904629999">+998 90 462 99 99</a>
        </span>
      </button>
      <button className={btnClass}>
        <FaTelegramPlane size={18} className="absolute left-6" />
        <span className="w-full text-center font-medium cursor-pointer">
          <a href="">Telegram admin</a>
        </span>
      </button>

      <button className={btnClass}>
        <span className="w-full text-center font-medium">Our online store</span>
        <FiChevronRight size={20} className="absolute right-6" />
      </button>

      <button className={btnClass}>
        <span className="w-full text-center font-medium">Customer care</span>
        <FiChevronRight size={20} className="absolute right-6" />
      </button>

      <button className={btnClass}>
        <span className="w-full text-center font-medium">Read reviews</span>
        <FiChevronRight size={20} className="absolute right-6" />
      </button>
    </div>
  );
};

// 5. Newsletter Form Component
const NewsletterForm = () => {
  return (
    <div className="w-full px-6 mt-10 mb-8 flex flex-col items-center">
      <h3 className="font-bold text-lg mb-4 text-slate-900">
        Find out about discounts first
      </h3>
      <div className="w-full flex items-center border border-slate-400 rounded-full overflow-hidden bg-transparent h-12">
        <input
          type="email"
          placeholder="email@example.com"
          className="flex-1 bg-transparent px-5 outline-none placeholder-slate-500 text-sm"
        />
        <button className="h-full px-6 bg-slate-800 text-white flex items-center justify-center">
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* <div className="w-2/3 h-px bg-slate-300 mt-10"></div> */}
    </div>
  );
};

// 6. Store Locations Component
const StoreLocations = () => {
  return (
    <div className="w-full px-6 pb-12 flex flex-col">
      {/* <h3 className="font-bold text-lg mb-4 text-center text-slate-900">
        Our stores
      </h3> */}

      {/* <div className="w-full h-40 bg-slate-200 mb-6 rounded">
        <img
          src="https://via.placeholder.com/400x200?text=Map+Image"
          alt="Stores Map"
          className="w-full h-full object-cover rounded"
        />
      </div> */}

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <FiMapPin size={20} className="text-slate-800 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-800">
            <a href="https://yandex.uz/maps/-/CXQ5iBKX">
              Samarqand, Rudakiy koʻchasi, 97
            </a>
          </p>
        </div>
       
      </div>
    </div>
  );
};

// Asosiy App Component
function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex justify-center">
      <div className="w-full max-w-md bg-slate-200 shadow-xl flex flex-col overflow-hidden relative">
        <TopGallery />
        <ProfileHeader />
        <SocialLinks />
        <ActionMenu />
        <NewsletterForm />
        <StoreLocations />
      </div>
    </div>
  );
}

export default App;
