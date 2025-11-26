"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import {
  ChartPie,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  LayoutDashboard,
  ReceiptText,
  RefreshCcw,
  Settings,
  Upload,
  Users,
} from "lucide-react";

const menuItems = [
  { href: "/upload", label: "Upload Dataset", icon: Upload },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/monitoring", label: "Monitoring & Drift", icon: ReceiptText },
  { href: "/models", label: "Model Details", icon: Users },
  { href: "/report", label: "Report", icon: ChartPie },
];

const settingsItems = [
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/subscription", label: "Subscription", icon: RefreshCcw },
  { href: "/help", label: "Help", icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const isActive = (href) => pathname === href;

  return (
    <aside
      className={`h-screen  flex flex-col justify-between border-r border-gray-200 bg-white z-50 p-4 
        transition-all duration-300
        ${isOpen ? "w-64" : "w-20"}
      `}
    >
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 overflow-hidden ${
              !isOpen && "justify-center gap-0 bg-red-500 w-0 hidden"
            }`}
          >
            <Image
              src="/assets/logo.svg"
              alt="Dantix Logo"
              width={30}
              height={30}
              className={`shrink-0 rounded-lg ${
                isOpen ? "opacity-100" : "opacity-0 w-0 hidden"
              }`}
            />
            <span
              className={`text-lg font-semibold text-black transition-all duration-200 
              ${isOpen ? "opacity-100 ml-1" : "opacity-0 w-0"}
            `}
            >
              Dantix
            </span>
          </Link>

          <button
            className="border border-neutral-200 rounded-lg p-1 hover:bg-neutral-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        {/* Main Menu */}
        <div className="flex flex-col gap-2">
          <span
            className={`text-xs font-medium text-gray-400 mb-2 transition-all duration-200 
            ${isOpen ? "opacity-100" : "opacity-0 hidden"}
          `}
          >
            MAIN MENU
          </span>

          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2.5 rounded-full transition-colors gap-3
                ${
                  isActive(item.href)
                    ? "bg-black text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }
                ${!isOpen && "gap-0"}
              `}
            >
              <item.icon className="w-5 h-5 shrink-0" />

              <span
                className={`text-sm whitespace-nowrap overflow-hidden transition-all duration-200
                ${isOpen ? "opacity-100" : "opacity-0 w-0 hidden"}
              `}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Settings */}
        <div className="flex flex-col gap-2">
          <span
            className={`text-xs font-medium text-gray-400 mb-2 transition-all duration-200 
            ${isOpen ? "opacity-100" : "opacity-0 hidden"}
          `}
          >
            SETTINGS
          </span>

          {settingsItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2.5 rounded-full transition-colors gap-3
                ${
                  isActive(item.href)
                    ? "bg-black text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }
              `}
            >
              <item.icon className="w-5 h-5 shrink-0" />

              <span
                className={`text-sm whitespace-nowrap overflow-hidden transition-all duration-200
                ${isOpen ? "opacity-100" : "opacity-0 w-0 hidden"}
              `}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0" />

          <div
            className={`flex flex-col transition-all duration-200
            ${isOpen ? "opacity-100" : "opacity-0 w-0"}
          `}
          >
            <span className="text-sm font-medium text-black">
              Michael Robinson
            </span>
            <span className="text-xs text-gray-600">
              michael.robin@gmail.com
            </span>
          </div>
        </div>

        {isOpen && (
          <button className="w-5 h-5">
            <svg fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="1.25" fill="currentColor" />
            </svg>
          </button>
        )}
      </div>
    </aside>
  );
}
