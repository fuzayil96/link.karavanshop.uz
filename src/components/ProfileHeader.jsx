import logo from "../assets/logo.jpg";

const ProfileHeader = () => {
  return (
    <div className="relative z-10 -mt-12 flex flex-col items-center text-center">
      <div className="rounded-full bg-linear-to-br from-green-800 via-green-600 to-emerald-300 p-1 shadow-lg shadow-green-900/25">
        <img
          src={logo}
          alt="KARAVAN logotipi"
          className="h-24 w-24 rounded-full object-cover ring-4 ring-stone-100 dark:ring-stone-950"
        />
      </div>

      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[0.18em] text-green-950 dark:text-green-100">
        KARAVAN
      </h1>
      <p className="mt-1.5 text-base font-medium text-slate-500 dark:text-stone-400">
        Siz va Oilangiz uchun!
      </p>
    </div>
  );
};

export default ProfileHeader;
