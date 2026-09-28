import { FiChevronRight, FiMapPin } from "react-icons/fi";
// 6. Store Locations Component
const StoreLocations = () => {
  return (
    <div className="w-full px-6 pb-12 flex flex-col mt-2.5">
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
      <h2 className="flex justify-center font-bold mb-2.5 text-xl">
        Bizning Manzillar
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <FiMapPin size={20} className="text-slate-800 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-800">
            <a href="https://yandex.uz/maps/-/CDq8J62K">
              Samarqand, Rudakiy koʻchasi, 97
            </a>
          </p>
        </div>
        <div className="flex items-start gap-3">
          <FiMapPin size={20} className="text-slate-800 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-800">
            <a href="https://yandex.uz/maps/-/CXUFI8Pp">
              Samarqand, Rudakiy koʻchasi, 105
            </a>
          </p>
        </div>
        <div className="flex items-start gap-3">
          <FiMapPin size={20} className="text-slate-800 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-800">
            <a href="https://yandex.uz/maps/-/CXUB7O~W">
              Buyuk Ipak Yoʻli koʻchasi, 52А
            </a>
          </p>
        </div>
        <div className="flex items-start gap-3">
          <FiMapPin size={20} className="text-slate-800 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-800">
            <a href="https://yandex.uz/maps/-/CXUFA84Q">
              Samarqand, Amir Temur koʻchasi, 103B
            </a>
          </p>
        </div>
        <div className="flex items-start gap-3">
          <FiMapPin size={20} className="text-slate-800 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-800">
            <a href="https://yandex.uz/maps/-/CXUFA-pQ">
              Samarqand tumani, Qoziariq mahalla fuqarolar yigʻini, Avrangzeb
              Olamgir koʻchasi, 6
            </a>
          </p>
        </div>
        <div className="flex items-start gap-3">
          <FiMapPin size={20} className="text-slate-800 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-800">
            <a href="https://yandex.uz/maps/-/CXUFEFpb">
              Samarqand tumani, Ravonak mahalla fuqarolar yigʻini, Ravonak
              koʻchasi, 352, 2-qavat
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreLocations;
