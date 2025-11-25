"use client";

import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    onSubmit?.({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-[#e3e4e6] px-3 py-2 outline-none focus:ring-2 focus:ring-[#2fbc2f]"
          placeholder="you@company.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Password</label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-[#e3e4e6] px-3 py-2 pr-20 outline-none focus:ring-2 focus:ring-[#2fbc2f]"
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-foreground/60 hover:text-foreground"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      {error && <div className="text-sm text-[#b00020]">{error}</div>}
      <button
        type="submit"
        className="w-full rounded-lg bg-[#2fbc2f] text-white py-2 font-medium hover:brightness-95"
      >
        Sign in
      </button>
    </form>
  );
}
