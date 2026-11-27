import { useState, useEffect, useRef } from "react";

const images = [
  "https://avatars.mds.yandex.net/get-altay/11018317/2a0000018c7bf97a0a33c614d5849c502dcd/XXXL",
  "https://avatars.mds.yandex.net/get-altay/10637974/2a0000018c7c68ea84ead85e07b82368d763/XXXL",
  "https://avatars.mds.yandex.net/get-altay/17043127/2a0000019b267b1e1e38c1da17a879f34924/XXXL",
];

const INTERVAL = 4000;

const TopGallery = () => {
  const [current, setCurrent] = useState(0);
  const touchX = useRef(null);

  // Avtomatik aylantirish (qo'lda almashtirilganda taymer qayta boshlanadi)
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent((i) => (i + 1) % images.length),
      INTERVAL
    );
    return () => clearTimeout(timer);
  }, [current]);

  const go = (dir) =>
    setCurrent((i) => (i + dir + images.length) % images.length);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(diff) > 40) go(diff < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <div
      className="relative h-60 w-full overflow-hidden rounded-[28px] bg-slate-900 shadow-xl shadow-green-950/15"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Karavan do'koni — rasm ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
            current === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}

      {/* Gradient qatlam */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/10" />

      {/* Nuqtalar */}
      <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-2 backdrop-blur-md">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
              current === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`${index + 1}-rasmga o'tish`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopGallery;
