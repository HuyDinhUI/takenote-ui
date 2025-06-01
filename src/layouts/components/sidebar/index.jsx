import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBriefcase, faCalendar, faCalendarWeek, faPlus, faStar, faTasks } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
  return (
    <aside
      id="sidebar"
      className="bg-white shadow-md w-64 fixed h-full transition-all duration-300 z-5 overflow-y-auto"
    >
      <div className="py-6 px-4">
        <div className="mb-8">
          <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-3">
            Danh mục
          </h2>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="sidebar-item active flex items-center px-3 py-2 rounded-lg text-indigo-600 font-medium"
              >
                <FontAwesomeIcon className='mr-3 w-4' icon={faTasks} />
                <span>Tất cả công việc</span>
                <span className="ml-auto bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                  24
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sidebar-item flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600"
              >
                <FontAwesomeIcon className='mr-3 w-4' icon={faStar} />
                <span>Quan trọng</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  8
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sidebar-item flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600"
              >
                <FontAwesomeIcon className='mr-3 w-4' icon={faCalendar} />
                <span>Hôm nay</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  5
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sidebar-item flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600"
              >
                <FontAwesomeIcon className='mr-3 w-4' icon={faCalendarWeek} />
                <span>Tuần này</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  12
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
              Nhãn
            </h2>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="sidebar-item flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600"
              >
                <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
                <span>Công việc</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  7
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sidebar-item flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600"
              >
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                <span>Học tập</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  5
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sidebar-item flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600"
              >
                <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
                <span>Cá nhân</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  9
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sidebar-item flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600"
              >
                <span className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></span>
                <span>Dự án</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  3
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
              Dự án
            </h2>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="sidebar-item flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600"
              >
                <FontAwesomeIcon className='mr-3 text-purple-500' icon={faBriefcase} />
                <span>Dự án A</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
