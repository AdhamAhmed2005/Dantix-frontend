import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const Roboto = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dantix - ML Model Platform",
  description: "Upload and monitor your machine learning models",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Roboto.variable} antialiased bg-gray-50`}>
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="flex-1 min-h-screen max-h-screen overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
