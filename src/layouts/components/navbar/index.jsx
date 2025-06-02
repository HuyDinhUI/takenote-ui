import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faClipboardCheck,
  faBars,
  faPlus,
  faChevronDown,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button id="sidebar-toggle" className="lg:hidden">
            <FontAwesomeIcon className="text-xl" icon={faBars} />
          </button>
          <div className="flex items-center">
            <FontAwesomeIcon
              className="text-2xl mr-2"
              icon={faClipboardCheck}
            />
            <h1 className="text-xl font-bold">TaskNote Pro</h1>
          </div>
        </div>

        <div className="hidden md:flex flex-grow max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Tìm kiếm ghi chú..."
              className="w-full py-1.5 pl-10 pr-4 bg-white rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <FontAwesomeIcon
              className="absolute left-3 top-2.5 text-gray-400"
              icon={faSearch}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-indigo-700 hover:bg-indigo-800 px-4 py-1.5 rounded-lg flex items-center transition-all">
            <FontAwesomeIcon className="mr-2" icon={faPlus} />
            <span className="hidden sm:inline">Tạo mới</span>
          </button>

          <div className="dropdown relative">
            <button className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center">
                <span className="font-medium">TN</span>
              </div>
              <FontAwesomeIcon className="text-xs" icon={faChevronDown} />
            </button>
            <div className="dropdown-content w-40 absolute right-0 mt-2 bg-white text-gray-700">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                <FontAwesomeIcon className="mr-2" icon={faUser} /> Hồ sơ
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                <FontAwesomeIcon className="mr-2" icon={faCog} /> Cài đặt
              </a>
              <div className="border-t border-gray-200"></div>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} /> Đăng
                xuất
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
