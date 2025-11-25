import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[#e3e4e6] bg-white">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Dantix</Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/upload" className="hover:underline">Upload</Link>
          <Link href="/monitoring" className="hover:underline">Monitoring</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </nav>
      </div>
    </header>
  );
}
