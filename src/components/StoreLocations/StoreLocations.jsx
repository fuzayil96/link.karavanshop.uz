import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const stores = [
  {
    address: "Samarqand, Rudakiy koʻchasi, 97",
    href: "https://yandex.uz/maps/-/CDq8J62K",
  },
  {
    address: "Samarqand, Rudakiy koʻchasi, 105",
    note: "Mo'ljal: Vokzal Erkaklar",
    href: "https://yandex.uz/maps/-/CXUFI8Pp",
  },
  {
    address: "Buyuk Ipak Yoʻli koʻchasi, 52А",
    href: "https://yandex.uz/maps/-/CXUB7O~W",
  },
  {
    address: "Samarqand, Amir Temur koʻchasi, 103B",
    href: "https://yandex.uz/maps/-/CXUFA84Q",
  },
  {
    address:
      "Samarqand tumani, Qoziariq mahalla fuqarolar yigʻini, Avrangzeb Olamgir koʻchasi, 6",
    href: "https://yandex.uz/maps/-/CXUFA-pQ",
  },
  {
    address:
      "Samarqand tumani, Ravonak mahalla fuqarolar yigʻini, Ravonak koʻchasi, 352, 2-qavat",
    href: "https://yandex.uz/maps/-/CXUFEFpb",
  },
];

const StoreLocations = () => {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase dark:text-stone-500">
          Bizning manzillar
        </h2>
        <span className="rounded-full bg-green-900/10 px-2.5 py-0.5 text-xs font-semibold text-green-900 dark:bg-green-400/15 dark:text-green-300">
          {stores.length} ta do'kon
        </span>
      </div>

      <ul className="divide-y divide-slate-900/5 overflow-hidden rounded-3xl bg-white/80 shadow-sm ring-1 ring-slate-900/5 backdrop-blur dark:divide-white/5 dark:bg-stone-900/70 dark:ring-white/10">
        {stores.map(({ address, note, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3.5 p-4 transition hover:bg-green-50/70 active:bg-green-50 dark:hover:bg-green-400/5 dark:active:bg-green-400/10"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-green-900/10 text-green-900 transition group-hover:bg-green-900 group-hover:text-white dark:bg-green-400/15 dark:text-green-300 dark:group-hover:bg-green-700 dark:group-hover:text-white">
                <FiMapPin size={17} />
              </span>
              <span className="min-w-0 flex-1 pt-0.5">
                <span className="block text-[15px] leading-snug font-medium text-slate-800 dark:text-stone-200">
                  {address}
                </span>
                {note && (
                  <span className="mt-1 inline-block rounded-md bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">
                    {note}
                  </span>
                )}
              </span>
              <FiArrowUpRight
                size={18}
                className="mt-2 shrink-0 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-800 dark:text-stone-600 dark:group-hover:text-green-400"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreLocations;
