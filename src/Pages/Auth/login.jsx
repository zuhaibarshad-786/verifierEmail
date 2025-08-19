import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(32.14% 49.96% at 60.13% 50.04%, #19132E 0%, #110D23 34.92%, #0F0E1A 100%)",
      }}
    >
      {/* Background Orbs */}
      <div
        className="pointer-events-none absolute -top-12 -left-10 md:h-80 md:w-120 sm:h-80 sm:w-80 rounded-full
             bg-[radial-gradient(circle_at_70%_70%,#9B5CFF55,transparent_60%)]
             scale-x-[-1] scale-y-[-1]"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-15 -right-10 h-100 md:w-120 sm:h-80 sm:w-80 rounded-full bg-[radial-gradient(circle_at_70%_70%,#5CB8FF4d,transparent_60%)]" />
      </div>

      {/* Card */}
      <div
        className="relative w-full max-w-lg rounded-3xl border border-white/10 p-6 sm:p-8 my-12 mt-20 mb-20"
        style={{
          background: "#18274099",
          boxShadow: "0px 0px 20px 0px #2A3D5B",
          backdropFilter: "blur(35px)",
        }}
      >
        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_0_rgba(99,102,241,0.08)] pointer-events-none" />
        <h1 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-6">
          Welcome
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="flex  flex-1 text-sm  text-white/80 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-400/50 border border-white/10"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="flex  flex-1 text-sm text-white/80 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-400/50 border border-white/10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 text-white/80 text-sm select-none">
            <input
              type="checkbox"
              className="appearance-none h-4 w-4 rounded border border-white/20 bg-transparent
                         checked:bg-white/80 checked:border-white/80
                         focus:ring-2 focus:ring-fuchsia-400/50"
            />
            Remember me
          </label>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg cursor-pointer py-2.5 text-white font-semibold shadow-lg
                       bg-gradient-to-r from-[#8A5CF6] via-[#B35CFF] to-[#FF6B6B]
                       hover:opacity-80 transition"
          >
            Login
          </button>

          <div className="flex items-center justify-between text-xs sm:text-sm mt-2">
            <Link
              to="/forgetPassword"
              className="text-[#C16598] hover:text-fuchsia-200 underline underline-offset-4"
            >
              Forgot Password?
            </Link>
            <Link to="/SignUp"
              className="text-[#C16598] hover:text-fuchsia-200 underline underline-offset-4"
            >
              Create Account
            </Link>
          </div>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 text-xs text-white bg-transparent">
                or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="rounded-lg border cursor-pointer border-[#2A3D5B] bg-[#18274099] text-white py-2.5 font-medium 
               shadow-[0px_0px_10px_0px_#2A3D5B44] 
               hover:opacity-80 transition"
            >
              Google
            </button>
            <button
              type="button"
              className="rounded-lg border cursor-pointer border-[#2A3D5B] bg-[#18274099] text-white py-2.5 font-medium 
               shadow-[0px_0px_10px_0px_#2A3D5B44] 
               hover:opacity-80 transition"
            >
              Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
