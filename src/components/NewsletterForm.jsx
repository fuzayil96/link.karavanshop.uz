import { FiChevronRight, FiMapPin } from "react-icons/fi";

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

export default NewsletterForm