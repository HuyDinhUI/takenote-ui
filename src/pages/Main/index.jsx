import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSortAmountDown,
  faList,
  faThLarge,
  faEllipsis,
  faEllipsisV,
  faEdit,
  faTag,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

export const Main = () => {
  return (
    <main
      className="flex-1 transition-all duration-300 bg-gray-50 min-h-screen ml-64"
      id="main-content"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Tất cả công việc</h1>
          <p className="text-gray-600">
            Quản lý và theo dõi các công việc của bạn
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select className="appearance-none bg-gray-100 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>Tất cả</option>
                  <option>Chưa hoàn thành</option>
                  <option>Đã hoàn thành</option>
                </select>
                <FontAwesomeIcon
                  className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                  icon={faChevronDown}
                />
              </div>

              <div className="relative">
                <select className="appearance-none bg-gray-100 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>Tất cả nhãn</option>
                  <option>Công việc</option>
                  <option>Học tập</option>
                  <option>Cá nhân</option>
                  <option>Dự án</option>
                </select>
                <FontAwesomeIcon
                  className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                  icon={faChevronDown}
                />
              </div>

              <div className="relative">
                <select className="appearance-none bg-gray-100 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>Tất cả mức độ</option>
                  <option>Cao</option>
                  <option>Trung bình</option>
                  <option>Thấp</option>
                </select>
                <FontAwesomeIcon
                  className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                  icon={faChevronDown}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-all">
                <FontAwesomeIcon icon={faSortAmountDown} />
                <span>Sắp xếp</span>
              </button>

              <div className="flex border rounded-lg overflow-hidden">
                <button
                  className="px-3 py-2 bg-indigo-600 text-white"
                  id="view-list"
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
                <button
                  className="px-3 py-2 bg-white text-gray-600"
                  id="view-grid"
                >
                  <FontAwesomeIcon icon={faThLarge} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4" id="task-list">
          <div className="task-item bg-white rounded-xl shadow-sm p-5 transition-all duration-200 border-l-4 border-red-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <div>
                  <h3 className="font-medium text-gray-800 text-lg">
                    Hoàn thành báo cáo dự án quý 3
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Tổng hợp số liệu và hoàn thiện báo cáo để trình lên ban giám
                    đốc vào cuối tuần.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="tag bg-red-100 text-red-700 text-xs px-2.5 py-1 rounded-full">
                      Công việc
                    </span>
                    <span className="tag bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-full">
                      Ưu tiên cao
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="dropdown relative">
                  <button className="text-gray-400 hover:text-gray-600 p-2">
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </button>
                  <div className="dropdown-content absolute right-0 top-5 mt-2 bg-white text-gray-700 w-40">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      <FontAwesomeIcon className="mr-2" icon={faEdit} /> Chỉnh
                      sửa
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      <FontAwesomeIcon className="mr-2" icon={faTag} /> Đổi nhãn
                    </a>
                    <div className="border-t border-gray-200"></div>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      <FontAwesomeIcon className="mr-2" icon={faTrashAlt} /> Xóa
                    </a>
                  </div>
                </div>
                <span className="text-gray-500 text-sm mt-4">
                  Hạn: 30/09/2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
