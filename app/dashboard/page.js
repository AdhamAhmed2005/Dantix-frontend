"use client";

import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "600"] });
const inter = Inter({ subsets: ["latin"], weight: ["600"] });

export default function DashboardPage() {
  const stats = [
    { label: "Total Models", value: "12", change: "+3 this week", color: "text-orange-600" },
    { label: "Active", value: "3", change: "3 deployed", color: "text-red-600" },
    { label: "Predictions", value: "1.2k", change: "Last 24h", color: "text-orange-500" },
    { label: "Alerts", value: "2", change: "Needs attention", color: "text-orange-500" },
  ];

  const pieData = [
    { label: "Training/Staged/Archived", value: 35, color: "#6200EE" },
    { label: "Deploying", value: 25, color: "#26A69A" },
    { label: "Gamma", value: 20, color: "#EE6002" },
    { label: "Delta", value: 20, color: "#FFC107" },
  ];

  const barHeights = [34, 45, 63, 39, 108, 155, 129, 109, 77, 104, 59, 104];

  return (
    <main className={`${roboto.className} min-h-screen bg-gray-50`}>
      {/* Top Navigation */}
      <div className="border-b border-gray-200 bg-white px-7 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <span className="text-gray-500">Dashboard</span>
            <span className="text-black">/</span>
            <span className="text-black text-[10px] tracking-wide">Model Overview</span>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 bg-gray-200 bg-opacity-50 rounded-full px-5 py-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-24" />
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
                <svg className="w-7 h-7 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
                <svg className="w-7 h-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-7 py-6">
        {/* Model Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-normal text-black mb-2">Customer_Churn_V3</h1>
              <div className="flex items-center gap-3 text-xl text-gray-500">
                <span>XGBoost</span>
                <span className="text-4xl leading-none">.</span>
                <span>Version V3.2.1</span>
              </div>
            </div>
            <div className="bg-green-600 rounded-lg px-3 py-2">
              <span className="text-white text-xl font-normal">Deployed</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm p-6">
              <p className="text-sm font-semibold text-gray-800 mb-1.5 tracking-wide">{stat.label}</p>
              <div className="flex items-end justify-between">
                <div>
                  <span className={`text-2xl font-semibold ${stat.color} ${inter.className}`}>{stat.value}</span>
                  <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
                </div>
                <svg className={`w-6 h-6 ${stat.color}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Pie Chart */}
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="text-lg font-normal text-black mb-6">Sales by product</h3>
            <div className="flex items-center justify-center gap-6">
              <div className="relative w-36 h-36">
                {/* Simple pie chart representation */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#6200EE" strokeWidth="20" strokeDasharray="88 251" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#26A69A" strokeWidth="20" strokeDasharray="63 251" strokeDashoffset="-88" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#EE6002" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-151" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#FFC107" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-201" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-xs">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-black">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="text-lg font-normal text-black mb-2">Model Performance</h3>
            <p className="text-sm text-gray-600 mb-6">Monthly prediction accuracy</p>
            <div className="h-44 flex items-end justify-between gap-0.5">
              {barHeights.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-500 rounded-t-sm"
                  style={{ height: `${(height / 180) * 100}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-3">
              <span>9a</span>
              <span>12p</span>
              <span>3p</span>
              <span>6p</span>
              <span>9p</span>
            </div>
          </div>
        </div>

        {/* Storage Usage Chart */}
        <div className="bg-white rounded shadow-md p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-normal text-black">Storage Usage</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-normal text-black">15.3</span>
                <span className="text-xl text-gray-600">TB</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">of 20 TB</p>
            </div>
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E8EAED" strokeWidth="10" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3B00ED" strokeWidth="10" strokeDasharray="132 251" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#9C27B0" strokeWidth="10" strokeDasharray="106 251" strokeDashoffset="-132" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#D81B60" strokeWidth="10" strokeDasharray="65 251" strokeDashoffset="-238" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FF9800" strokeWidth="10" strokeDasharray="86 251" strokeDashoffset="-303" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xl font-normal text-black">76%</div>
                <div className="text-sm text-gray-600">Used</div>
              </div>
            </div>
          </div>
          
          {/* Progress Bars */}
          <div className="space-y-5 mt-6">
            {[
              { label: "Photos & Videos", value: "8.2 GB", percent: 53 },
              { label: "Music & Audio", value: "3.5 GB", percent: 42 },
              { label: "Games", value: "2.1 GB", percent: 26 },
              { label: "Movies & TV", value: "1.5 GB", percent: 34 },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
