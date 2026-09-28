// 2. Profile Header Component

import logo from "../assets/logo.jpg"
const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center -mt-10 z-10 relative">
      <img
        src={logo}
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

export default ProfileHeader