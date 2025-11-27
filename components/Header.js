export default function Header({ pageName, sectionName }) {
  return (
    <div className="border-b border-gray-200 bg-white px-7 py-4">
      <div className="flex items-center justify-between gap-10">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-gray-500">{pageName}</span>
          <span className="text-black">/</span>
          <span className="text-black text-[10px] tracking-wide">
            {sectionName}
          </span>
        </div>
        <div className="flex-1 flex items-center gap-8">
          <div className="flex-1 flex items-center gap-2 bg-gray-200 bg-opacity-50 rounded-full px-5 py-2">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-sm w-24"
            />
          </div>
          <div className="flex items-center gap-1">
            <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
