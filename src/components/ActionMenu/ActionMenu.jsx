import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiChevronRight, FiMapPin } from "react-icons/fi";

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
          <a target="_blank"  href="https://t.me/+998904639999">Telegram Operator 1</a>
        </span>
      </button>
      <button className={btnClass}>
        <FaTelegramPlane size={18} className="absolute left-6" />
        <span className="w-full text-center font-medium cursor-pointer">
          <a target="_blank" href="https://t.me/+998904629999">Telegram Operator 2</a>
        </span>
      </button>
    </div>
  );
};

export default ActionMenu