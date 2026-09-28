import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

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

export default SocialLinks