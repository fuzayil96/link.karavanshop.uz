import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const actions = [
  {
    title: "+998 90 463 99 99",
    subtitle: "Qo'ng'iroq qilish",
    href: "tel:+998904639999",
    Icon: FaPhoneAlt,
    tile: "bg-green-900",
  },
  {
    title: "+998 90 462 99 99",
    subtitle: "Qo'ng'iroq qilish",
    href: "tel:+998904629999",
    Icon: FaPhoneAlt,
    tile: "bg-green-900",
  },
  {
    title: "Telegram Operator 1",
    subtitle: "Telegramda yozish",
    href: "https://t.me/+998904639999",
    Icon: FaTelegramPlane,
    tile: "bg-sky-500",
    external: true,
  },
  {
    title: "Telegram Operator 2",
    subtitle: "Telegramda yozish",
    href: "https://t.me/+998904629999",
    Icon: FaTelegramPlane,
    tile: "bg-sky-500",
    external: true,
  },
];

const ActionMenu = () => {
  return (
    <div>
      <h2 className="mb-3 px-1 text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase dark:text-stone-500">
        Bog'lanish
      </h2>

      <div className="flex flex-col gap-2.5">
        {actions.map(({ title, subtitle, href, Icon, tile, external }) => (
          <a
            key={href}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="group flex items-center gap-4 rounded-2xl bg-white/80 p-3 pr-4 shadow-sm ring-1 ring-slate-900/5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md active:scale-[0.98] dark:bg-stone-900/70 dark:ring-white/10 dark:hover:bg-stone-900"
          >
            <span
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-sm ${tile}`}
            >
              <Icon size={17} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-semibold text-slate-900 dark:text-stone-100">
                {title}
              </span>
              <span className="block text-sm text-slate-500 dark:text-stone-400">{subtitle}</span>
            </span>
            <FiChevronRight
              size={20}
              className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-green-800 dark:text-stone-600 dark:group-hover:text-green-400"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ActionMenu;
