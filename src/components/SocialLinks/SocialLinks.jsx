import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/karavan.sam?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    Icon: FaInstagram,
  },
  { label: "Telegram", href: "https://t.me/karavansam", Icon: FaTelegramPlane },
  { label: "YouTube", href: "https://www.youtube.com/@Karavansam", Icon: FaYoutube },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-3">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="grid h-12 w-12 place-items-center rounded-2xl bg-white/80 text-green-900 shadow-sm ring-1 ring-slate-900/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-green-900 hover:text-white hover:shadow-lg hover:shadow-green-900/25 active:scale-95 dark:bg-stone-900/70 dark:text-green-300 dark:ring-white/10 dark:hover:bg-green-700 dark:hover:text-white"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
