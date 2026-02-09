"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AuthScreen() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-[#0f0f10] text-white">

      {/* ---------------- LEFT : LOGIN ---------------- */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">

          <h1 className="text-3xl font-semibold">Log in</h1>

          <div className="space-y-3">
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full flex items-center justify-center gap-3 rounded-md border border-white/20 py-2.5 hover:bg-white/5 transition"
            >
              <span className="text-lg">G</span>
              Continue with Google
            </button>

            <button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="w-full flex items-center justify-center gap-3 rounded-md border border-white/20 py-2.5 hover:bg-white/5 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.76c-1.09-.75.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.24a2.56 2.56 0 0 0 3.5 1a2.56 2.56 0 0 1 .76-1.61c-2.66-.3-5.46-1.33-5.46-5.93a4.64 4.64 0 0 1 1.23-3.22a4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.18a4.63 4.63 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.47 5.92a2.88 2.88 0 0 1 .82 2.23v3.3c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              Continue with GitHub
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-white/50">
            <div className="h-px flex-1 bg-white/10" />
            OR
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-3">
            <label className="text-sm text-white/80">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-md bg-[#1a1a1b] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            />

            <button
              onClick={() =>
                signIn("credentials", {
                  email,
                  callbackUrl: "/",
                })
              }
              className="w-full rounded-md bg-white text-black py-2 font-medium hover:bg-white/90 transition"
            >
              Continue
            </button>
          </div>

        </div>
      </div>

      {/* ---------------- RIGHT : HERO / INPUT ---------------- */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden">

        {/* gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/60 via-blue-500/60 to-pink-400/60 blur-3xl scale-110" />

        {/* content */}
        <div className="relative z-10 w-full max-w-xl px-8">
          <div className="bg-white/90 rounded-2xl flex items-center px-5 py-4 shadow-xl">

            <input
              placeholder="Ask Lovable to build your…"
              className="flex-1 bg-transparent outline-none text-black placeholder:text-black/50"
            />

            <button className="ml-3 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
              ↑
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
