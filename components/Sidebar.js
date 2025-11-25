"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/upload",
      label: "Upload Dataset",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.5}>
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
    },
    {
      href: "/monitoring",
      label: "Monitoring & Drift",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 18 18">
          <path d="M2.25 2.25h4.5v4.5h-4.5v-4.5zm0 9h4.5v4.5h-4.5v-4.5zm9-9h4.5v4.5h-4.5v-4.5zm0 9h4.5v4.5h-4.5v-4.5z" />
        </svg>
      ),
    },
    {
      href: "/models",
      label: "Model Details",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 18 18">
          <path d="M9 2.25a3 3 0 100 6 3 3 0 000-6zm-4.5 10.5a4.5 4.5 0 019 0v1.5h-9v-1.5z" />
        </svg>
      ),
    },
    {
      href: "/report",
      label: "Report",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 18 18">
          <path d="M2.25 2.25h6v6h-6v-6zm7.5 0h6v6h-6v-6zm-7.5 7.5h6v6h-6v-6z" />
        </svg>
      ),
    },
  ];

  const settingsItems = [
    {
      href: "/settings",
      label: "Settings",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 18 18">
          <path d="M9 2.25a1.5 1.5 0 00-1.5 1.5v.75A1.5 1.5 0 009 6a1.5 1.5 0 001.5-1.5V3.75A1.5 1.5 0 009 2.25z" />
        </svg>
      ),
    },
    {
      href: "/help",
      label: "Help",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 18 18">
          <path d="M9 2.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5z" />
        </svg>
      ),
    },
  ];

  const isActive = (href) => pathname === href;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col justify-between p-4 z-50">
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image 
            src="/assets/PHOTO-2025-11-25-15-26-43.jpg" 
            alt="Dantix Logo" 
            width={75} 
            height={75}
            className="shrink-0 rounded-lg"
          />
          <span className={`${inter.className} text-xl font-semibold text-black`}>Dantix</span>
        </Link>

        {/* Main Menu */}
        <div className="flex flex-col gap-2">
          <span className={`${inter.className} text-xs font-medium text-gray-400 mb-2`}>MAIN MENU</span>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-colors ${
                isActive(item.href)
                  ? "bg-black text-white"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              <span className={`${inter.className} text-sm ${isActive(item.href) ? "font-medium" : ""}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Settings */}
        <div className="flex flex-col gap-2">
          <span className={`${inter.className} text-xs font-medium text-gray-400 mb-2`}>SETTINGS</span>
          {settingsItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-colors ${
                isActive(item.href)
                  ? "bg-black text-white"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              <span className={`${inter.className} text-sm ${isActive(item.href) ? "font-medium" : ""}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col">
            <span className={`${inter.className} text-sm font-medium text-black`}>Michael Robinson</span>
            <span className={`${inter.className} text-xs text-gray-600`}>michael.robin@gmail.com</span>
          </div>
        </div>
        <button className="w-5 h-5">
          <svg fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="1.25" fill="currentColor" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
