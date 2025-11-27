"use client";

import Header from "@/components/Header";
import { Roboto, Inter, DM_Sans } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["500"] });

export default function DashboardPage() {
  const metrics = [
    {
      label: "Model Accuracy",
      value: "92",
      trend: "up",
      color: "text-orange-600",
      icon: "trend-up",
    },
    {
      label: "Data Quality Score",
      value: "0.89",
      trend: "down",
      color: "text-red-600",
      icon: "trend-down",
    },
    {
      label: "Prediction Latency",
      value: "0.91",
      trend: "neutral",
      color: "text-orange-500",
      icon: "chart",
    },
    {
      label: "System Health",
      value: "0.90",
      trend: "neutral",
      color: "text-orange-500",
      icon: "chart",
    },
  ];

  const features = [
    { name: "Age", drift: 8.5 },
    { name: "Income", drift: 15.2 },
    { name: "Customer_Lifetime_Value", drift: 45.7 },
    { name: "Tenure_Months", drift: 32.1 },
    { name: "Last_Purchase_Days", drift: 28.9 },
  ];

  const getDriftColor = (drift) => {
    if (drift > 30) return { bg: "bg-red-600", text: "text-red-600" };
    if (drift > 20) return { bg: "bg-orange-600", text: "text-orange-600" };
    return { bg: "bg-green-600", text: "text-green-600" };
  };

  return (
    <main className={`${roboto.className} min-h-screen bg-white`}>
      <Header
        pageName="Dashboard"
        sectionName="Model Monitoring & Drift Detection"
      />

      <div className="max-w-[1440px] mx-auto px-7 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold mb-1 tracking-tight text-black">
            Model Monitoring & drift Detection
          </h1>
          <p className="text-sm text-gray-600">
            Track model performance and detect drifts
          </p>
        </div>

        {/* Critical Alert */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="flex items-start gap-4 p-4 border-l-4 border-red-600">
            <div className="shrink-0 mt-0.5">
              <svg
                className="w-5 h-5 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-600 mb-0.5">
                Critical Alert
              </p>
              <p className="text-sm text-red-600">
                Data drift detected in multiple features. Consider retraining
                the model immediately
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white rounded-2xl shadow-sm p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm font-semibold text-gray-800 tracking-wide leading-tight">
                  {metric.label}
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span
                    className={`text-2xl font-semibold ${metric.color} ${inter.className}`}
                  >
                    {metric.value}
                  </span>
                  <p className={`text-sm mt-1 ${metric.color}`}>
                    {metric.trend === "down"
                      ? "-10% from baseline"
                      : metric.trend === "neutral"
                      ? "Stable performance"
                      : "High risk"}
                  </p>
                </div>
                {metric.trend === "up" && (
                  <svg
                    className={`w-7 h-7 ${metric.color}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {metric.trend === "down" && (
                  <svg
                    className={`w-7 h-7 ${metric.color} transform rotate-180`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {metric.trend === "neutral" && (
                  <svg
                    className={`w-8 h-8 ${metric.color}`}
                    fill="none"
                    viewBox="0 0 32 32"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 16h24M8 8l8 8 8-8M8 24l8-8 8 8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Browse Files Button */}
        <div className="flex justify-end mb-8">
          <button
            className={`${dmSans.className} flex items-center gap-2.5 bg-black text-white px-6 py-2.5 rounded-lg text-base font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg`}
          >
            Browse Files
          </button>
        </div>

        {/* Temperature Chart */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-normal text-black mb-1">
              Housing Temperature Over Time
            </h3>
            <p className="text-sm text-gray-600 tracking-wide">
              Temperature trends for high and low settings
            </p>
          </div>

          <div className="relative h-56 mb-4">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-xs text-gray-600">
              <span>100°</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
            </div>

            {/* Chart area */}
            <div className="absolute left-10 right-0 top-0 bottom-6">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="border-t border-gray-200"></div>
                ))}
                <div className="border-t border-gray-300"></div>
              </div>

              {/* Chart lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,40 80,35 160,38 240,32 320,36 400,30"
                  fill="none"
                  stroke="#EE6002"
                  strokeWidth="2.5"
                />
                <polyline
                  points="0,80 80,75 160,78 240,72 320,76 400,70"
                  fill="none"
                  stroke="#6200EE"
                  strokeWidth="2.5"
                />
                <line
                  x1="0"
                  y1="85"
                  x2="100%"
                  y2="85"
                  stroke="rgba(0,0,0,0.4)"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                />
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between text-xs text-gray-600">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-8 mt-6 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-orange-600"></div>
              <span>High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-purple-700"></div>
              <span>Low</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-px border-t border-dashed border-gray-600"></div>
              <span>Required Housing Temp</span>
            </div>
          </div>
        </div>

        {/* Feature Drift Analysis */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-sm font-medium text-gray-900 mb-8">
            Feature Drift Analysis
          </h3>

          <div className="space-y-7">
            {features.map((feature) => {
              const colors = getDriftColor(feature.drift);
              return (
                <div key={feature.name}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-medium text-gray-900">
                      {feature.name}
                    </span>
                    <span className={`text-sm font-medium ${colors.text}`}>
                      {feature.drift}%
                    </span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute left-0 top-0 h-full ${colors.bg} rounded-full transition-all duration-500`}
                      style={{ width: `${Math.min(feature.drift, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Drift Summary */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Overall Drift Status:</span>
              <span className="font-semibold text-red-600">
                Critical - Immediate Action Required
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
