"use client";

import { useState } from "react";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemember] = useState(false);

	return (
		<main
			className={`${inter.className} min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8`}
		>
			<div className="w-full max-w-sm scale-90">
				<h1
					className={`${roboto.className} text-xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-gray-900 leading-tight`}
				>
					Welcome to Dantix AutoML Platform
				</h1>

				<div className="">
					<div className="mb-6">
						<h2 className="text-lg sm:text-xl font-bold mb-1.5 text-center text-gray-900">
							Log in to Dantix
						</h2>
						<p className="text-xs text-gray-600 text-center leading-relaxed">
							Welcome back! Please enter your details.
						</p>
					</div>

					<button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-300 rounded-lg py-2 mb-3 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md text-sm font-medium text-gray-700">
						<svg width="16" height="16" viewBox="0 0 18 18" fill="none">
							<path
								d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
								fill="#4285F4"
							/>
							<path
								d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
								fill="#34A853"
							/>
							<path
								d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.959H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.041l3.007-2.334z"
								fill="#FBBC05"
							/>
							<path
								d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
								fill="#EA4335"
							/>
						</svg>
						<span className="font-medium">Continue with Google</span>
					</button>

					<div className="flex items-center gap-3 my-4">
						<div className="flex-1 h-px bg-gray-200"></div>
						<span className="text-xs text-gray-500 font-medium">Or</span>
						<div className="flex-1 h-px bg-gray-200"></div>
					</div>

					<form
						className="space-y-3.5"
						onSubmit={(e) => {
							e.preventDefault();
							console.log({ email, password });
						}}
					>
						<div>
							<label className="block text-xs font-semibold text-gray-700 mb-1.5">
								Email Address
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full rounded-lg border-2 border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black focus:border-black transition-all placeholder-gray-600"
								placeholder="you@example.com"
								required
							/>
						</div>

						<div>
							<label className="block text-xs font-semibold text-gray-700 mb-1.5">
								Password
							</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full rounded-lg border-2 border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black focus:border-black transition-all placeholder-gray-600"
								placeholder="••••••••"
								required
							/>
						</div>

						<div className="flex items-center justify-between text-xs">
							<label className="flex items-center gap-1.5 cursor-pointer text-gray-700">
								<input
									type="checkbox"
									checked={remember}
									onChange={(e) => setRemember(e.target.checked)}
									className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
								/>
								<span>Remember Me</span>
							</label>
							<a
								href="#"
								className="text-blue-600 hover:text-blue-700 font-medium"
							>
								Forget Password?
							</a>
						</div>
						<div className="flex justify-center">
							<button
								type="submit"
								className="w-1/3 bg-black text-white rounded-lg py-2 mt-5 text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
							>
								Log in
							</button>
						</div>
					</form>

					<div className="flex justify-center">
						<div
							onClick={() => console.log("Sign up clicked")}
							className="w-1/3 mt-2.5 pt-2 text-sm font-semibold text-gray-900 text-center border-b-2 border-gray-900 hover:text-gray-500 cursor-pointer transition-colors duration-200"
						>
							Sign up
						</div>
					</div>

					<p className="text-xs text-gray-500 text-center mt-6">
						By continuing, you agree to our{" "}
						<a href="#" className="text-blue-600 hover:underline">
							Terms of Service
						</a>{" "}
						and{" "}
						<a href="#" className="text-blue-600 hover:underline">
							Privacy Policy
						</a>
						.
					</p>
				</div>
			</div>
		</main>
	);
}
